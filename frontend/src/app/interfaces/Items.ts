import { Category } from './Categories';

export interface Items{
    id: number;
    pic: string;
    name: string;
    price: number;
    category: Category[];
}