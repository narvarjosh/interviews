export const trackingData = [
  {
    trackingNumber: 'threecolors',
    status: "Just Shipped",
    edd: '2022-04-23T12:00:00.000Z'
  },
  {
    trackingNumber: 'twocolors',
    status: "Delivered",
    edd: '2022-04-18T12:00:00.000Z'
  },
  {
    trackingNumber: 'twomorecolors',
    status: "In Transit",
    edd: '2022-04-15T12:00:00.000Z'
  }
];

export const orderData = {
  items: [
    {
      id: 'zaffre',
      image: 'https://via.placeholder.com/50x50/0014a8',
      name: 'A zaffre block'
    },
    {
      id: 'australien',
      image: 'https://via.placeholder.com/50x50/cc9911',
      name: 'An australien block'
    },
    {
      id: 'falu',
      image: 'https://via.placeholder.com/50x50/801818/',
      name: 'A purple block'
    },
    {
      id: 'razzmatazz',
      image: 'https://via.placeholder.com/50x50/E3256B',
      name: 'A razzmatazz block'
    },
    {
      id: 'gooseturdgreen',
      image: 'https://via.placeholder.com/50x50/4EA809',
      name: 'A goose turd green block'
    },
    {
      id: 'lustygallant',
      image: 'https://via.placeholder.com/50x50/FD7F4F',
      name: 'A lusty gallant block'
    },
    {
      id: 'glaucous',
      image: 'https://via.placeholder.com/50x50/6082B6',
      name: 'A glaucous block'
    },
    {
      id: 'gingerline',
      image: 'https://via.placeholder.com/50x50/FCCB4F',
      name: 'A gingerline block'
    },
  ],
  shipments: [
    {
      trackingNumber: 'threecolors',
      items: [
        {
          quantity: 5,
          id: 'gingerline'
        },
        {
          quantity: 17,
          id: 'gooseturdgreen'
        },
        {
          quantity: 1,
          id: 'falu'
        },
      ]
    },
    {
      trackingNumber: 'twomorecolors',
      items: [
        {
          quantity: 7,
          id: 'glaucous'
        },
        {
          quantity: 11,
          id: 'zaffre'
        },
      ]
    },
    {
      trackingNumber: 'twocolors',
      items: [
        {
          quantity: 8,
          id: 'australien'
        },
        {
          quantity: 9,
          id: 'lustygallant'
        },
        {
          quantity: 2,
          id: 'razzmatazz'
        },
      ]
    }
  ]
};