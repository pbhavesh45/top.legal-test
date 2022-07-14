import { Character, Episode } from "../models/common/types";
import { CharacterResponse, } from "../services/types";

export const DUMMY_CHARACTER: Character = {
  created: "2017-11-04T18:48:46.250Z",
  episode: [
    {
      "id": 25,
      "name": "Vindicators 3: The Return of Worldender"
    }
  ],
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Citadel of Ricks",
    id:1
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    id: 2,
  },
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1",
};

export const DUMMY_EPISODES: Episode[] = [
  {
    air_date: "December 2, 2013",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:33.798Z",
    episode: "S01E01",
    id: 1,
    name: "Pilot",
    url: "https://rickandmortyapi.com/api/episode/1",
  },
  {
    air_date: "December 2, 2013",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:33.798Z",
    episode: "S01E01",
    id: 1,
    name: "Pilot",
    url: "https://rickandmortyapi.com/api/episode/1",
  },
];

export const DUMMY_EPISODE: Episode = {
  air_date: "December 2, 2013",
  characters: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
  ],
  created: "2017-11-10T12:56:33.798Z",
  episode: "S01E01",
  id: 1,
  name: "Pilot",
  url: "https://rickandmortyapi.com/api/episode/1",
};

export const DUMMY_CHARACTER_RESPONSE: CharacterResponse = {
  info: {
    count: 826,
    next: "https://rickandmortyapi.com/api/character?page=2",
    pages: 42,
    prev: null,
  },
  results: [DUMMY_CHARACTER],
};
