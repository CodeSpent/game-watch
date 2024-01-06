// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Platform = {
  id: number
  name: string
}

export type Genre = {
  id: number
  name: string
}

export type Link = {
  label: string
  url: string
}

export type Game = {
  id: number
  name: string
  platforms: Platform[]
  genres: Genre[]
  multiplayer: boolean
  boxArtUrl: string
  description: string
  links: Link[]
  storyline?: string
  releaseDate: string
}