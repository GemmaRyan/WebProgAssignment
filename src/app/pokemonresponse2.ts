import { ICardImage } from "./interfaces/image";
export interface PokemonResponse2{
    Search: pokeDetails[];
    totalResults: string;
    Error:string;
}
 interface pokeDetails {
    id: string;
  name: string;
  supertype?: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  images: ICardImage;
 }