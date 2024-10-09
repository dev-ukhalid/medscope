import {
  facebook,
  instagram,
  detailbg,
  telegram,
  twitter,
} from "../assets";
import { ReactComponent as card1 } from "../assets/products/card-1.svg";
import { ReactComponent as card2 } from "../assets/products/card-2.svg";
import { ReactComponent as card3 } from "../assets/products/card-3.svg";
import { ReactComponent as card4 } from "../assets/products/card-4.svg";
import { ReactComponent as card5 } from "../assets/products/card-5.svg";
import { ReactComponent as card6 } from "../assets/products/card-6.svg";

import product1 from "../assets/products/product-1.png";
import product2 from "../assets/products/product-2.png";
import product3 from "../assets/products/product-3.png";
import product4 from "../assets/products/product-4.png";
import product5 from "../assets/products/product-5.png";
import product6 from "../assets/products/product-6.png";
import product7 from "../assets/products/product-7.png";
import product8 from "../assets/products/product-8.png";
import product9 from "../assets/products/product-9.png";
import product10 from "../assets/products/product-10.png";
import product11 from "../assets/products/product-11.png";
import product12 from "../assets/products/product-12.png";

export const navigation = [
  {
    id: "0",
    title: "Products",
    url: "/products",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about-us",
  },
  {
    id: "2",
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    id: "3",
    title: "Home",
    url: "/",
  },
];


export const Detail = [
  {
    id: "0",
    imageUrl: detailbg,
    colorful: true,
  }
  
];

export const products = [
  {
    id: "0",
    title: "Patient Monitor",
    text: "We offer patient monitors for various needs. Our multi-function model provides comprehensive vital signs analysis.",
    backgroundUrl: card1,
    productImage: product1

  },
  {
    id: "1",
    title: "High-Defination Wireless Ultrasound",
    text: "Clarius HD3 is a 30% smaller, lighter third-gen portable ultrasound with AI-powered, cloud app.",
    backgroundUrl: card2,
    productImage: product2
  },
  {
    id: "2",
    title: "Body Composition BC",
    text: "The New Standard in Body Composition Analysis.",
    backgroundUrl: card3,
    productImage: product3
  },
  {
    id: "3",
    title: "Electrosurgical ZERO50",
    text: "50W RF electrosurgical unit for monopolar mode.",
    backgroundUrl: card4,
    productImage: product4
  },
  {
    id: "4",
    title: "NAVI-60 Vein Illuminator",
    text: "NAVI-60 Vein Illuminator offers real-time vas deferens imaging, improving patient safety and reducing healthcare costs.",
    backgroundUrl: card5,
    productImage: product5
  },
  {
    id: "5",
    title: "AV-Heart Care",
    text: "Cardiac arrest is sudden heart failure; defibrilator or CPR improves survival until help arrives.",
    backgroundUrl: card6,
    productImage: product6
  },
];
 

export const allProducts = [
  ...products,
  {
    id: "6",
    title: "Patient Monitor",
    text: "We offer patient monitors for various needs. Our multi-function model provides comprehensive vital signs analysis.",
    backgroundUrl: card1,
    productImage: product7
  },
  {
    id: "7",
    title: "High-Defination Wireless Ultrasound",
    text: "Clarius HD3 is a 30% smaller, lighter third-gen portable ultrasound with AI-powered, cloud app.",
    backgroundUrl: card2,
    productImage: product8
  },
  {
    id: "8",
    title: "Body Composition BC",
    text: "The New Standard in Body Composition Analysis.",
    backgroundUrl: card3,
    productImage: product9
  },
  {
    id: "9",
    title: "Electrosurgical ZERO50",
    text: "50W RF electrosurgical unit for monopolar mode.",
    backgroundUrl: card4,
    productImage: product10
  },
  {
    id: "10",
    title: "NAVI-60 Vein Illuminator",
    text: "NAVI-60 Vein Illuminator offers real-time vas deferens imaging, improving patient safety and reducing healthcare costs.",
    backgroundUrl: card5,
    productImage: product11
  },
  {
    id: "11",
    title: "AV-Heart Care",
    text: "Cardiac arrest is sudden heart failure; defibrilator or CPR improves survival until help arrives.",
    backgroundUrl: card6,
    productImage: product12
  },
  {
    id: "0",
    title: "Patient Monitor",
    text: "We offer patient monitors for various needs. Our multi-function model provides comprehensive vital signs analysis.",
    backgroundUrl: card1,
    productImage: product1

  },
  {
    id: "1",
    title: "High-Defination Wireless Ultrasound",
    text: "Clarius HD3 is a 30% smaller, lighter third-gen portable ultrasound with AI-powered, cloud app.",
    backgroundUrl: card2,
    productImage: product2
  },
  {
    id: "2",
    title: "Body Composition BC",
    text: "The New Standard in Body Composition Analysis.",
    backgroundUrl: card3,
    productImage: product3
  },
  {
    id: "3",
    title: "Electrosurgical ZERO50",
    text: "50W RF electrosurgical unit for monopolar mode.",
    backgroundUrl: card4,
    productImage: product4
  },
  {
    id: "4",
    title: "NAVI-60 Vein Illuminator",
    text: "NAVI-60 Vein Illuminator offers real-time vas deferens imaging, improving patient safety and reducing healthcare costs.",
    backgroundUrl: card5,
    productImage: product5
  },
  {
    id: "5",
    title: "AV-Heart Care",
    text: "Cardiac arrest is sudden heart failure; defibrilator or CPR improves survival until help arrives.",
    backgroundUrl: card6,
    productImage: product6
  }
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
