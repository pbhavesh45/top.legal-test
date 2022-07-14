import { BASE_CHARACTER_API_URL } from "./constants";
import { CharacterResponse } from "./types";

export const getCharacters = async (
  page?: number
): Promise<CharacterResponse> => {
  try {
    const response = await fetch(`${BASE_CHARACTER_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query characters  {
          characters (page:${page || 1 }){
            info {
              count,
              pages
            }
            results {
              id
              name
              status
              species
              type
              image
              gender
              origin{
                name
              }
              episode { 
                id
                name
              }
              location {
                id
                name
              }
              created
            }
          }
        }
      `,
        variables: {
          now: new Date().toISOString(),
        },
      }),
    });
    //fetch(`${BASE_CHARACTER_API_URL}?page=${page}`);
    const data = await response.json();
    
    return data.data.characters;
  } catch (error) {
    throw error;
  }
};