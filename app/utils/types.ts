export type Character = {
  id: string;
  type: string;
  attributes: {
    slug: string;
    alias_names: string[];
    animagus: string | null;
    blood_status: string | null;
    boggart: string | null;
    born: string | null;
    died: string;
    eye_color: string | null;
    family_members: string[];
    gender: string | null;
    hair_color: string | null;
    height: string | null;
    house: string;
    image: string;
    jobs: string[];
    marital_status: string | null;
    name: string;
    nationality: string | null;
    patronus: string;
    romances: string[];
    skin_color: string | null;
    species: string | null;
    titles: string[];
    wands: string[];
    weight: string | null;
    wiki: string;
  };
  links: {
    self: string;
  };
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
