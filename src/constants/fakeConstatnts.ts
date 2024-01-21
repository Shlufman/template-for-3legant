import {ProductInfo, CustomerDetails, ChooseColor} from './type';
import blackChoose from "./images/black.png";
import greyChoose from "./images/grey.png";
import redChoose from "./images/red.png";
import whiteChoose from "./images/white.png";


export const fakeReviews = 11;


export const productInfo: ProductInfo = {
    id: "1",
    title: "Tray Table",
    text: "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    rating: 3,
    price: 400,
    currentPrice: 199,
    currencyCode: "$",
    endDateOffer: +new Date() + 2 * 24 * 60 * 60 * 1000,
    chooseColor: [{id: "1", url: blackChoose, color: "black",width:72},
        {id: "2", url: greyChoose, color: "grey",width:72},
        {id: "3", url: redChoose, color: "red",width:72},
        {id: "4", url: whiteChoose, color: "white",width:72}

    ]
}

export const customerDetails: CustomerDetails = {
    country: "USA",
    currency: "dollar us"
}