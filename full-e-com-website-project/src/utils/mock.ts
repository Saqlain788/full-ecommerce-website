import { Product } from "./type";
import P14 from '/public/P14.webp'
import P1 from '/public/P1.png'
import P10 from '/public/P10.png'
import P11 from '/public/P11.png'
import event2 from "/public/event2.webp"
import event3 from "/public/event3.webp"

export const Products : Product[]=[
    {
        id: 1,
        name : ' Imperial Alpaca Hoodie',
        price : 10,
        category : 'female',
        image : P14
    },
    {
        id: 2,
        name : '  Brushed Raglan Sweatshirt',
        price : 40,
        category  : 'female',
        image : P1
    },
    {
        id: 3,
        name : '  Brushed Bomber',
        price : 60,
        category  : 'female',
        image : P10
    },
    {
        id: 3,
        name : '  Brushed Bomber',
        price : 60,
        category  : 'female',
        image : P11
    },
    {
        id: 4,
        name : 'Flex Sweatshirt',
        price : 100,
        category  : 'male',
        image : event2
    },
    {
        id: 4,
        name : 'Flex Push Button Bomber',
        price : 100,
        category : 'male',
        image : event3
    },
    
];
