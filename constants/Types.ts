import cities from './Cities';
import departments from './Departments';

export type City = typeof cities[number];
export type Department = typeof departments[number];

export const states = ["bon état", "état moyen", "mauvais état", "détruit"]
export type State = typeof states[number];

export const monumentsTypes = ["dolmen", "menhir", "tumulus", "autre"]
export type MonumentType = typeof monumentsTypes[number];

export const materials = ["inconnu", "silex", "basalte", "marbre", "grès", "schiste", "quartzite", "gneiss", "calcaire", "granite", "andesite", "diorite"]
export type Material = typeof materials[number];

export type Site = {
    name: string;
    place: string;
    department: number;
    coords: {
        lat: number;
        lon: number;
    };
    type: string;
    publicAccess?: boolean;
    description?: string;
    size?: number;
    weigth?: number;
    material?: string;
    state: string;
    images: {
        url1: string;
        url2: string;
        url3: string;
        url4: string;
        url5: string;
    };
    userId: string;
    date: string;
    posts: {
        date: string;
    }[];
}

export type user = {
    email: string,
    userId: string,
    password: string,
    isModerator: boolean,
}