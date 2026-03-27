import React, { useMemo, useState } from 'react'
import './Episodes.css'

const seasons = [
  {
    season: 1,
    year: '2016',
    episodes: [
      {
        number: 1,
        title: 'The Vanishing of Will Byers',
        duration: '48:52',
        description: 'Will disappears on a stormy night, pushing the boys and Joyce into a frantic search.',
      },
      {
        number: 2,
        title: 'The Weirdo on Maple Street',
        duration: '55:43',
        description: 'A mysterious girl appears as the kids shelter her from a growing danger.',
      },
      {
        number: 3,
        title: 'Holly, Jolly',
        duration: '52:10',
        description: 'Joyce follows strange signals while Nancy and Jonathan uncover a dark truth.',
      },
      {
        number: 4,
        title: 'The Body',
        duration: '50:46',
        description: 'The search intensifies after a shocking discovery shakes the town.',
      },
      {
        number: 5,
        title: 'The Flea and the Acrobat',
        duration: '53:17',
        description: 'Hopper digs into the lab as the boys test a theory about the Upside Down.',
      },
      {
        number: 6,
        title: 'The Monster',
        duration: '47:02',
        description: 'Secrets spill out and the creature strikes closer to home.',
      },
      {
        number: 7,
        title: 'The Bathtub',
        duration: '42:20',
        description: 'Eleven reveals her past; the crew devises a risky rescue.',
      },
      {
        number: 8,
        title: 'The Upside Down',
        duration: '55:03',
        description: 'All paths lead to a final confrontation between two worlds.',
      },
    ],
  },
  {
    season: 2,
    year: '2017',
    episodes: [
      {
        number: 1,
        title: 'MADMAX',
        duration: '48:08',
        description: 'A new kid joins the party as fresh threats rise in Hawkins.',
      },
      {
        number: 2,
        title: 'Trick or Treat, Freak',
        duration: '56:36',
        description: 'Halloween night brings eerie encounters and rising tension.',
      },
      {
        number: 3,
        title: 'The Pollywog',
        duration: '50:58',
        description: 'Dustin discovers a strange new pet with a dangerous secret.',
      },
      {
        number: 4,
        title: 'Will the Wise',
        duration: '46:12',
        description: "Will's visions worsen as the lab's experiments resurface.",
      },
      {
        number: 5,
        title: 'Dig Dug',
        duration: '58:04',
        description: 'Hopper and Eleven uncover answers that change everything.',
      },
      {
        number: 6,
        title: 'The Spy',
        duration: '51:50',
        description: 'The group faces a hive-mind presence and a risky plan.',
      },
      {
        number: 7,
        title: 'The Lost Sister',
        duration: '45:36',
        description: "Eleven leaves to uncover her origins and a sister's path.",
      },
      {
        number: 8,
        title: 'The Mind Flayer',
        duration: '47:49',
        description: 'The Mind Flayer tightens its grip as Hawkins starts to fall.',
      },
      {
        number: 9,
        title: 'The Gate',
        duration: '1:02:02',
        description: 'The team makes a final stand to seal the gate.',
      },
    ],
  },
  {
    season: 3,
    year: '2019',
    episodes: [
      {
        number: 1,
        title: 'Suzie, Do You Copy?',
        duration: '50:50',
        description: 'Summer begins, the mall opens, and strange signals appear.',
      },
      {
        number: 2,
        title: 'The Mall Rats',
        duration: '50:29',
        description: 'The kids track mysterious activity beneath Starcourt.',
      },
      {
        number: 3,
        title: 'The Case of the Missing Lifeguard',
        duration: '50:03',
        description: "A lifeguard's disappearance points to a growing danger.",
      },
      {
        number: 4,
        title: 'The Sauna Test',
        duration: '52:43',
        description: 'A risky test reveals an unsettling truth.',
      },
      {
        number: 5,
        title: 'The Flayed',
        duration: '52:18',
        description: 'The town turns as the monster grows stronger.',
      },
      {
        number: 6,
        title: 'E Pluribus Unum',
        duration: '59:57',
        description: 'Allies unite as the battle escalates.',
      },
      {
        number: 7,
        title: 'The Bite',
        duration: '55:25',
        description: 'The monster attacks, pushing everyone to the brink.',
      },
      {
        number: 8,
        title: 'The Battle of Starcourt',
        duration: '1:17:59',
        description: 'A fiery showdown at Starcourt changes everything.',
      },
    ],
  },
  {
    season: 4,
    year: '2022',
    episodes: [
      {
        number: 1,
        title: 'The Hellfire Club',
        duration: '1:18:09',
        description: 'Hawkins reels from tragedy as the Hellfire Club takes center stage.',
      },
      {
        number: 2,
        title: "Vecna's Curse",
        duration: '1:17:05',
        description: 'A new horror strikes; the group searches for answers.',
      },
      {
        number: 3,
        title: 'The Monster and the Superhero',
        duration: '1:03:06',
        description: "The gang splits across locations to uncover the monster's origin.",
      },
      {
        number: 4,
        title: 'Dear Billy',
        duration: '1:18:33',
        description: "A daring plan targets Vecna's curse.",
      },
      {
        number: 5,
        title: 'The Nina Project',
        duration: '1:16:33',
        description: 'Eleven returns to the lab to restore her power.',
      },
      {
        number: 6,
        title: 'The Dive',
        duration: '1:15:07',
        description: 'Journeys collide as danger closes in.',
      },
      {
        number: 7,
        title: 'The Massacre at Hawkins Lab',
        duration: '1:40:55',
        description: 'A shocking massacre is revealed and the stakes rise.',
      },
      {
        number: 8,
        title: 'Papa',
        duration: '1:27:13',
        description: "Hopper's survival leads to a risky escape.",
      },
      {
        number: 9,
        title: 'The Piggyback',
        duration: '2:22:12',
        description: "A final battle for Hawkins' future begins.",
      },
    ],
  },
  {
    season: 5,
    year: '2025',
    episodes: [
      {
        number: 1,
        title: 'The Crawl',
        duration: '1:11:28',
        description: 'Hawkins locks down as the crew launches risky crawls into the Upside Down.',
      },
      {
        number: 2,
        title: 'The Vanishing of Holly Wheeler',
        duration: '57:53',
        description: 'A Demogorgon takes Holly, forcing Eleven and Hopper to push deeper.',
      },
      {
        number: 3,
        title: 'The Turnbow Trap',
        duration: '1:09:26',
        description: 'The group sets a trap while the military base closes in on their secrets.',
      },
      {
        number: 4,
        title: 'Sorcerer',
        duration: '1:26:45',
        description: "A rescue mission collides with Vecna's strike as Will's powers surface.",
      },
      {
        number: 5,
        title: 'Shock Jock',
        duration: '1:08:03',
        description: 'The kids wake in Camazotz as Henry tightens his hold on Hawkins.',
      },
      {
        number: 6,
        title: 'Escape from Camazotz',
        duration: '1:15:35',
        description: 'Exotic matter destabilizes the Upside Down while Demodogs strike Hawkins.',
      },
      {
        number: 7,
        title: 'The Bridge',
        duration: '1:06:09',
        description: "The team regroups to reach the Abyss and sever Vecna's link.",
      },
      {
        number: 8,
        title: 'The Rightside Up',
        duration: '2:08:17',
        description: 'The final battle erupts across worlds, demanding sacrifices to save Hawkins.',
      },
    ],
  },
]

const Episodes = () => {
  const [activeSeason, setActiveSeason] = useState(1)
  const activeSeasonData = useMemo(
    () => seasons.find((season) => season.season === activeSeason) || seasons[0],
    [activeSeason],
  )

  return (
    <section className="episodes-page">
      <div className="episodes-header">
        <p className="episodes-kicker">Episode Guide</p>
        <h1 className="episodes-title">Stranger Things: Seasons 1-5</h1>
        <p className="episodes-subtitle">
          Every chapter, runtime, and story beat -- organized by season with Netflix-style summaries.
        </p>
      </div>

      <div className="season-nav">
        {seasons.map((season) => (
          <button
            key={season.season}
            type="button"
            className={`season-chip ${activeSeason === season.season ? 'active' : ''}`}
            onClick={() => setActiveSeason(season.season)}
          >
            Season {season.season}
          </button>
        ))}
      </div>

      <div className="season-list">
        <section className="season-section">
          <div className="season-header">
            <div>
              <p className="season-kicker">Season {activeSeasonData.season}</p>
              <h2 className="season-title">
                {activeSeasonData.season === 5 ? 'Coming Soon' : `Year ${activeSeasonData.year}`}
              </h2>
            </div>
            <span className="season-count">{activeSeasonData.episodes.length} Episodes</span>
          </div>

          <div className="episode-list">
            {activeSeasonData.episodes.map((episode) => (
              <article className="episode-card" key={`${activeSeasonData.season}-${episode.number}`}>
                <div className="episode-index">{episode.number}</div>
                <div className="episode-meta">
                  <div className="episode-title-row">
                    <h3 className="episode-title">{episode.title}</h3>
                    <span className="episode-duration">{episode.duration}</span>
                  </div>
                  <p className="episode-desc">{episode.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Episodes
