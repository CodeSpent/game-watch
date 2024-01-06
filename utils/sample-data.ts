//   __      _
// o'')}____//
//  `_/      )
//  (_(_/-(_/

import { User, Game } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 169, name: 'Bryan' },
  { id: 170, name: 'Alice' },
  { id: 171, name: 'Bob' },
  { id: 172, name: 'Caroline' },
  { id: 173, name: 'Dave' },
]


export const sampleGameData: Game[] = [
  {
    id: 1,
    name: 'Hunt: Showdown',
    platforms: [
      { id: 1, name: 'PC' },
      { id: 2, name: 'PS4' }
    ],
    genres: [
      { id: 1, name: 'shooter' },
      { id: 2, name: 'horror' }
    ],
    multiplayer: true,
    boxArtUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4i6q.png',
    description: 'Hunt: Showdown is a thrilling, high-stakes PvPvE first-person shooter. Take down nightmarish monsters, as you compete for the bounties that will bring you glory, gear, and gold in this unforgiving and unforgettable online multiplayer experience.',
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/app/594650' },
      { label: 'Twitch', url: 'https://www.twitch.tv/directory/game/Hunt:%20Showdown' }
    ],
    releaseDate: new Date(1566928594).toISOString()
  }
]
//      __
// (___()'`;
// /,    /`
// \\"--\\
