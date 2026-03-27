$ErrorActionPreference = 'Stop'

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$charactersFile = Join-Path $projectRoot 'src/components/Characters.jsx'
$imagesDir = Join-Path $projectRoot 'public/images/characters'

if (-not (Test-Path $charactersFile)) {
  throw "Characters file not found: $charactersFile"
}

New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null

$content = Get-Content $charactersFile -Raw
$names = [regex]::Matches($content, "name:\s*'([^']+)'") |
  ForEach-Object { $_.Groups[1].Value } |
  Select-Object -Unique

$overrides = @{
  'Vecna (Henry Creel)' = 'Vecna'
  'Dmitri "Enzo" Antonov' = 'Dmitri Antonov'
  'Kali Prasad (008)' = 'Kali Prasad'
  'Barb Holland' = 'Barbara Holland'
  'Dr. Martin Brenner' = 'Martin Brenner'
  'Dr. Sam Owens' = 'Sam Owens'
  'Lt. Colonel Sullivan' = 'Jack Sullivan'
  'Vickie' = 'Vickie Dunne'
  'Eden' = 'Eden Bingham'
  'Officer Powell' = 'Calvin Powell'
  'Officer Callahan' = 'Phil Callahan'
  'Demogorgon' = 'The Demogorgon'
  'Demodogs' = 'Demogorgon (species)'
}

function Get-Slug([string]$name) {
  $value = $name.ToLower()
  $value = [regex]::Replace($value, '\([^)]*\)', '')
  $value = [regex]::Replace($value, '[^a-z0-9]+', '-')
  return $value.Trim('-')
}

function Get-Title([string]$name) {
  if ($overrides.ContainsKey($name)) {
    return $overrides[$name]
  }
  $title = [regex]::Replace($name, '\([^)]*\)', '')
  $title = $title -replace '"', ''
  return $title.Trim()
}

function Get-PageThumbnailUrl([string]$title) {
  $apiUrl = "https://strangerthings.fandom.com/api.php?action=query&titles=$([uri]::EscapeDataString($title))&prop=pageimages&piprop=thumbnail&pithumbsize=900&format=json&origin=*"
  $data = Invoke-RestMethod -Uri $apiUrl -Method Get
  $page = $data.query.pages.PSObject.Properties.Value | Select-Object -First 1
  return $page.thumbnail.source
}

function Get-FirstImageUrl([string]$title) {
  $imagesApi = "https://strangerthings.fandom.com/api.php?action=query&titles=$([uri]::EscapeDataString($title))&prop=images&imlimit=50&format=json&origin=*"
  $imagesData = Invoke-RestMethod -Uri $imagesApi -Method Get
  $page = $imagesData.query.pages.PSObject.Properties.Value | Select-Object -First 1
  $images = @()
  if ($page.images) {
    $images = $page.images |
      Where-Object { $_.title -match '^File:' } |
      Where-Object { $_.title -match '\.(png|jpg|jpeg|webp)$' }
  }

  if (-not $images -or $images.Count -eq 0) {
    return $null
  }

  $preferred = $images | Where-Object { $_.title -match '(Poster|Promo|Portrait|Profile|Character|ST4|ST3|ST2|ST1)' }
  $pick = if ($preferred -and $preferred.Count -gt 0) { $preferred[0] } else { $images[0] }

  $fileApi = "https://strangerthings.fandom.com/api.php?action=query&titles=$([uri]::EscapeDataString($pick.title))&prop=imageinfo&iiprop=url&format=json&origin=*"
  $fileData = Invoke-RestMethod -Uri $fileApi -Method Get
  $filePage = $fileData.query.pages.PSObject.Properties.Value | Select-Object -First 1
  if ($filePage.imageinfo) {
    return $filePage.imageinfo[0].url
  }
  return $null
}

foreach ($name in $names) {
  $slug = Get-Slug $name
  if (-not $slug) {
    Write-Warning "Skipped empty slug for $name"
    continue
  }

  $title = Get-Title $name
  $thumb = $null

  try {
    $thumb = Get-PageThumbnailUrl $title
  } catch {
    Write-Warning "Pageimages API failed for $name ($title): $($_.Exception.Message)"
  }

  if (-not $thumb) {
    try {
      $thumb = Get-FirstImageUrl $title
    } catch {
      Write-Warning "Images API failed for $name ($title): $($_.Exception.Message)"
    }
  }

  if (-not $thumb) {
    Write-Warning "No image found for $name ($title)"
    continue
  }

  $ext = [System.IO.Path]::GetExtension($thumb)
  if (-not $ext) {
    $ext = '.jpg'
  }

  $outFile = Join-Path $imagesDir ("$slug$ext")
  if (Test-Path $outFile) {
    continue
  }

  try {
    Invoke-WebRequest -Uri $thumb -OutFile $outFile -UseBasicParsing | Out-Null
  } catch {
    Write-Warning "Download failed for $name -> $thumb"
    continue
  }
}

Write-Host "Done. Images saved to $imagesDir"
