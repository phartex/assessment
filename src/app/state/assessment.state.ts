export interface Iassessment {
    info: Info
    results: Result[]
  }
  
  export interface Info {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  export interface Result {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  }
  
  export interface Origin {
    name: string
    url: string
  }
  
  export interface Location {
    name: string
    url: string
  }
  
export interface Icharacter {
    character : Iassessment[]
}

export const characterState = {
    counter: {
      name: 'tobi',
      gender : 'M'
    }
}
export const locationState = {
    characters: null
}
export const episodeState = {
    characters: null
}
export const searchState = {
    characters: null
}
