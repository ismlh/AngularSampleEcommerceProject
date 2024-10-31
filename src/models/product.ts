export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category:string;
    image:string|ArrayBuffer|null;
    rating:{
        rate:number;
        count:number;
    }
}
