import { CharacterResponse } from "../../services/types";

export interface NameLoc {
  name: string;
  id: number;
}

export interface Character {
  created: string;
  episode: Episode[];
  gender: string;
  id: number;
  image: string;
  location: NameLoc;
  name: string;
  origin: NameLoc;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Episode {
  air_date?: string;
  characters?: string[];
  created?: string;
  episode?: string;
  id: number;
  name: string;
  url?: string;
}

export type MockData =
  | Character
  | CharacterResponse
  | Episode;
