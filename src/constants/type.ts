export type ProductInfo = {
    id: string;
    title: string;
    text: string;
    rating: number;
    price: number;
    currentPrice: number;
    currencyCode: string;
    endDateOffer:number;
    chooseColor: Array<ChooseColor>;
}


export type CustomerDetails = {
    country: string;
    currency: string;
}

export type ChooseColor ={
    id: string;
    url: string;
    color: string;
    width:number;
}
export type IterableDTO = Array<DTO>;
export type DTO={
    id: string;
    [key: string]:string;
}