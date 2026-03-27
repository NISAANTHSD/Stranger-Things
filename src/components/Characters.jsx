import React, { useEffect, useMemo, useState } from 'react'
import './Characters.css'

const characters = [
  {
    name: 'Eleven',
    role: 'Psychic teen with telekinetic power.',
    note: 'Raised in Hawkins Lab.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Mike Wheeler',
    role: 'Heart of the party and loyal leader.',
    note: 'Guides the group through danger.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Dustin Henderson',
    role: 'Inventive thinker and comic relief.',
    note: 'Finds solutions when it counts.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Lucas Sinclair',
    role: 'Strategic, brave, and grounded.',
    note: 'Keeps the team focused.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Will Byers',
    role: 'Linked to the Upside Down.',
    note: 'Survives the first disappearance.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Max Mayfield',
    role: 'Skater with a fearless streak.',
    note: 'Fights through trauma with grit.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Erica Sinclair',
    role: 'Bold, clever, and unshakable.',
    note: 'Handles missions with swagger.',
    tag: 'The Party',
    group: 'The Party',
  },
  {
    name: 'Kali Prasad (008)',
    role: 'Illusionist with a rough past.',
    note: 'A lost sister from the lab.',
    tag: 'Hawkins Lab',
    group: 'Hawkins Lab',
  },
  {
    name: 'Joyce Byers',
    role: 'Relentless mother who never quits.',
    note: 'Trusts her instincts.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Jim Hopper',
    role: 'Hawkins police chief and protector.',
    note: 'Takes on the lab and beyond.',
    tag: 'Hawkins PD',
    group: 'Hawkins PD',
  },
  {
    name: 'Nancy Wheeler',
    role: 'Investigator who uncovers the truth.',
    note: 'Fearless with a plan.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Jonathan Byers',
    role: 'Photographer and protective brother.',
    note: 'Keeps his family safe.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Steve Harrington',
    role: 'Reformed jock, babysitter hero.',
    note: 'Always shows up for the kids.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Robin Buckley',
    role: 'Sharp, witty, and fearless ally.',
    note: 'Cracks codes and conspiracies.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Eddie Munson',
    role: 'Hellfire Club leader.',
    note: 'Metalhead with a heroic heart.',
    tag: 'Hellfire',
    group: 'Hellfire',
  },
  {
    name: 'Chrissy Cunningham',
    role: 'Hawkins High cheer captain.',
    note: 'Carries hidden fears.',
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Jason Carver',
    role: 'Hawkins High star athlete.',
    note: 'Rallies the town.',
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Patrick McKinney',
    role: 'Basketball player caught in chaos.',
    note: "One of Vecna's targets.",
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Fred Benson',
    role: 'School journalist.',
    note: 'Trapped by guilt.',
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Vickie',
    role: 'Band member and love interest.',
    note: 'Grounded, kind, and smart.',
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Angela',
    role: 'California bully at Lenora High.',
    note: 'Targets Eleven.',
    tag: 'Hawkins High',
    group: 'Hawkins High',
  },
  {
    name: 'Billy Hargrove',
    role: "Max's stepbrother with a dark edge.",
    note: 'Falls under the Mind Flayer.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Karen Wheeler',
    role: 'Wheeler family matriarch.',
    note: 'Tries to protect her kids.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Ted Wheeler',
    role: 'Wheeler family patriarch.',
    note: 'Detached but present.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Holly Wheeler',
    role: 'Youngest Wheeler sibling.',
    note: 'Witnesses strange events.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Lonnie Byers',
    role: 'Byers family father.',
    note: 'Absent and unreliable.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Terry Ives',
    role: "Eleven's mother.",
    note: 'A survivor of the lab.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Becky Ives',
    role: "Terry's sister.",
    note: 'Protects her family.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Claudia Henderson',
    role: "Dustin's mother.",
    note: 'Supportive and loving.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Susan Hargrove',
    role: "Max's mother.",
    note: 'Tries to hold the family together.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Neil Hargrove',
    role: "Billy's father.",
    note: 'Harsh and controlling.',
    tag: 'Family',
    group: 'Family',
  },
  {
    name: 'Barb Holland',
    role: "Nancy's best friend.",
    note: 'First major victim.',
    tag: 'Hawkins',
    group: 'Hawkins',
  },
  {
    name: 'Bob Newby',
    role: "Joyce's boyfriend.",
    note: 'Brave and kind-hearted.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Scott Clarke',
    role: 'Hawkins science teacher.',
    note: 'Explains the strange.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Dr. Martin Brenner',
    role: "Scientist behind the lab's experiments.",
    note: 'Obsessed with control.',
    tag: 'Hawkins Lab',
    group: 'Hawkins Lab',
  },
  {
    name: 'Dr. Sam Owens',
    role: 'Government scientist and uneasy ally.',
    note: 'Tries to contain the chaos.',
    tag: 'Hawkins Lab',
    group: 'Hawkins Lab',
  },
  {
    name: 'Lt. Colonel Sullivan',
    role: 'Military commander investigating Hawkins.',
    note: 'Sees Eleven as a threat.',
    tag: 'Government',
    group: 'Government',
  },
  {
    name: 'Murray Bauman',
    role: 'Conspiracy investigator and fixer.',
    note: 'Always two steps ahead.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Argyle',
    role: 'Chill friend and getaway driver.',
    note: 'Keeps spirits up.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Eden',
    role: 'Free-spirited Lenora teen.',
    note: 'Helps the group.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Suzie Bingham',
    role: 'Radio genius and romantic lead.',
    note: 'Saves the day with math.',
    tag: 'Allies',
    group: 'Allies',
  },
  {
    name: 'Alexei',
    role: 'Russian scientist.',
    note: 'Finds joy in freedom.',
    tag: 'Russia',
    group: 'Russia',
  },
  {
    name: 'Dmitri "Enzo" Antonov',
    role: 'Russian guard turned ally.',
    note: 'Helps Hopper survive.',
    tag: 'Russia',
    group: 'Russia',
  },
  {
    name: 'Yuri Ismaylov',
    role: 'Smuggler and pilot.',
    note: 'Plays both sides.',
    tag: 'Russia',
    group: 'Russia',
  },
  {
    name: 'Grigori',
    role: 'Russian enforcer.',
    note: 'Relentless pursuer.',
    tag: 'Russia',
    group: 'Russia',
  },
  {
    name: 'Officer Powell',
    role: 'Hawkins police officer.',
    note: 'Works alongside Hopper.',
    tag: 'Hawkins PD',
    group: 'Hawkins PD',
  },
  {
    name: 'Officer Callahan',
    role: 'Hawkins police officer.',
    note: 'Often out of his depth.',
    tag: 'Hawkins PD',
    group: 'Hawkins PD',
  },
  {
    name: 'Vecna (Henry Creel)',
    role: 'Primary antagonist from the Upside Down.',
    note: 'Targets the vulnerable.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Victor Creel',
    role: 'Haunted father of the Creel family.',
    note: 'Survivor of the curse.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Virginia Creel',
    role: 'Matriarch of the Creel family.',
    note: 'A victim of Vecna.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Alice Creel',
    role: 'Daughter of Victor Creel.',
    note: 'A victim of Vecna.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'The Mind Flayer',
    role: 'Hive-mind entity seeking control.',
    note: 'Corrupts the town from within.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Demogorgon',
    role: 'Predator that hunts across dimensions.',
    note: 'First creature to terrorize Hawkins.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Demodogs',
    role: 'Pack of juvenile Demogorgons.',
    note: 'Connected to the Mind Flayer.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
  {
    name: 'Demobats',
    role: 'Swarm predators in the Upside Down.',
    note: 'Attack in numbers.',
    tag: 'Upside Down',
    group: 'Upside Down',
  },
]

const fallbackImage = '/images/characters/placeholder.svg'
const imageExtensions = ['webp', 'jpg', 'jpeg', 'png', 'svg']

const slugifyName = (name) =>
  name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getImageCandidates = (name) => {
  const slug = slugifyName(name)
  return imageExtensions.map((ext) => `/images/characters/${slug}.${ext}`)
}

const CharacterImage = ({ name, className, loading }) => {
  const [candidateIndex, setCandidateIndex] = useState(0)
  const candidates = useMemo(() => getImageCandidates(name), [name])

  useEffect(() => {
    setCandidateIndex(0)
  }, [name])

  const handleError = () => {
    setCandidateIndex((current) => {
      if (current < candidates.length - 1) {
        return current + 1
      }
      return candidates.length
    })
  }

  const src = candidateIndex < candidates.length ? candidates[candidateIndex] : fallbackImage

  return <img className={className} src={src} alt={`${name} portrait`} loading={loading} onError={handleError} />
}

const Characters = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const filters = useMemo(() => {
    const groups = Array.from(new Set(characters.map((character) => character.group || 'Other')))
    return ['All', ...groups]
  }, [])

  const visibleCharacters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return characters.filter((character) => {
      const groupValue = character.group || 'Other'
      const matchesFilter = activeFilter === 'All' || groupValue === activeFilter
      if (!matchesFilter) return false

      if (!normalizedQuery) return true
      const haystack = `${character.name} ${character.role} ${character.note} ${character.tag} ${groupValue}`
      return haystack.toLowerCase().includes(normalizedQuery)
    })
  }, [activeFilter, query])

  useEffect(() => {
    if (!selectedCharacter) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCharacter(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedCharacter])

  return (
    <section className="characters-page">
      <div className="characters-header">
        <p className="characters-kicker">Residents of Hawkins</p>
        <h1 className="characters-title">Stranger Things Characters</h1>
        <p className="characters-subtitle">
          From the Party to the Upside Down, meet the heroes, allies, and threats that shape the story.
        </p>
      </div>

      <div className="characters-controls">
        <div className="characters-search">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search characters, roles, or groups..."
            aria-label="Search characters"
          />
          <span className="characters-count">{visibleCharacters.length} characters</span>
        </div>
        <div className="characters-filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="characters-grid">
        {visibleCharacters.map((character) => (
          <button
            type="button"
            className="character-card"
            key={character.name}
            onClick={() => setSelectedCharacter(character)}
          >
            <div className="character-card-header">
              <div className="character-card-title">
                <CharacterImage name={character.name} className="character-avatar" loading="lazy" />
                <h3>{character.name}</h3>
              </div>
              <span className="character-tag">{character.tag}</span>
            </div>
            <p className="character-role">{character.role}</p>
            <p className="character-note">{character.note}</p>
          </button>
        ))}
      </div>

      {selectedCharacter && (
        <div className="character-modal" role="dialog" aria-modal="true" aria-label="Character details">
          <button
            className="character-modal-backdrop"
            type="button"
            aria-label="Close character details"
            onClick={() => setSelectedCharacter(null)}
          />
          <div className="character-modal-card">
            <button
              type="button"
              className="character-modal-close"
              onClick={() => setSelectedCharacter(null)}
              aria-label="Close character details"
            >
              Close
            </button>
            <div className="character-modal-media">
              <CharacterImage name={selectedCharacter.name} className="" loading="eager" />
            </div>
            <div className="character-modal-body">
              <p className="character-modal-kicker">{selectedCharacter.group}</p>
              <h2 className="character-modal-name">{selectedCharacter.name}</h2>
              <p className="character-modal-role">{selectedCharacter.role}</p>
              <p className="character-modal-note">{selectedCharacter.note}</p>
              <div className="character-modal-tags">
                <span>{selectedCharacter.tag}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Characters
