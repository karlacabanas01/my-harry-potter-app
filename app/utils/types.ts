export type Wand = {
  wood: string;
  core: string;
  length: number;
};

export type Character = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

export interface Book {
  id: string;
  type: string;
  attributes: {
    slug: string;
    author: string;
    cover: string;
    dedication?: string;
    pages: number;
    release_date: string;
    summary: string;
    title: string;
    wiki: string;
  };
  relationships: {
    chapters: {
      data: {
        id: string;
        type: string;
      }[];
    };
  };
  links: {
    self: string;
  };
}

export type Movie = {
  id: string;
  type: string;
  attributes: {
    slug: string;
    box_office: string;
    budget: string;
    cinematographers: string[];
    directors: string[];
    distributors: string[];
    editors: string[];
    music_composers: string[];
    poster: string;
    producers: string[];
    rating: string;
    release_date: string;
    running_time: string;
    screenwriters: string[];
    summary: string;
    title: string;
    trailer: string;
    wiki: string;
  };
  links: {
    self: string;
  };
};
export interface CartItem {
  producto: ProductoHarryPotter;
  cantidad: number;
  size?: string;
}
export type ProductoHarryPotter = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  stock: number;
  imagen: string;
  peso: string;
  dimensiones: string;
  envio: string;
};
