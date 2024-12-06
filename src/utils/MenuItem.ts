import { FRONTEND_URL } from "./utilsimp";

export const menuItem = [
  {
    name: `Home`,
    url: `${FRONTEND_URL}`,
  },
  {
    name: `About`,
    url: `/about`,
  },

  {
    name: `Products`,
    url: `/our-products`,
    dropdown: [
      {
        name: `Luxury Watches`,
        url: `${FRONTEND_URL}/luxury-watches`,
      },
      {
        name: `Sport Watches`,
        url: `${FRONTEND_URL}/sport-watches`,
      },
      {
        name: `Smart Watches`,
        url: `${FRONTEND_URL}/smart-watches`,
      },
      {
        name: `Classic Watches`,
        url: `${FRONTEND_URL}/classic-watches`,
      },
      {
        name: `Chronograph Watches`,
        url: `#`,
        subMenuItem: [
          {
            name: `Analog Chronograph`,
            url: `${FRONTEND_URL}/analog-chronograph`,
          },
          {
            name: `Digital Chronograph`,
            url: `${FRONTEND_URL}/digital-chronograph`,
          },
        ],
      },
      {
        name: `Diving Watches`,
        url: `${FRONTEND_URL}/diving-watches`,
      },
      {
        name: `Fashion Watches`,
        url: `${FRONTEND_URL}/fashion-watches`,
      },
      {
        name: `Limited Edition`,
        url: `${FRONTEND_URL}/limited-edition`,
      },
      {
        name: `Accessories`,
        url: `${FRONTEND_URL}/accessories`,
        subMenuItem: [
          {
            name: `Watch Straps`,
            url: `${FRONTEND_URL}/watch-straps`,
          },
          {
            name: `Watch Boxes`,
            url: `${FRONTEND_URL}/watch-boxes`,
          },
        ],
      },
      {
        name: `Gift Sets`,
        url: `${FRONTEND_URL}/gift-sets`,
      },
    ],
  },

  {
    name: `Catalogue`,
    url: `${FRONTEND_URL}/our-brands`,
  },
  {
    name: `Contact`,
    url: `${FRONTEND_URL}/contact`,
  },
  {
    name: `Privacy Policy`,
    url: `${FRONTEND_URL}/privacy-policy`,
  },
  {
    name: `T&C`,
    url: `${FRONTEND_URL}/T&C`,
  },
  {
    name: `Sales & Return Policy`,
    url: `${FRONTEND_URL}/sales-and-return-policy`,
  },
];
