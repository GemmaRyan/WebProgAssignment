import { ICardImage } from "./interfaces/image";
export interface PokemonResponse{
    id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  images: ICardImage;

}