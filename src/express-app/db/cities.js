const cities = [
  {
    id: 1,
    name: "Brest",
    country: "Belarus",
    capital: false,
    location: {
      lat: 52.0976,
      long: 23.734
    },
    createdAt: new Date(),
    lastModifiedDate: new Date()
  },
  {
    id: 2,
    name: "Krakow",
    country: "Poland",
    capital: false,
    location: {
      lat: 50.0647,
      long: 19.945
    },
    createdAt: new Date(),
    lastModifiedDate: new Date()
  },
  {
    id: 3,
    name: "Berlin",
    country: "Germany",
    capital: true,
    location: {
      lat: 52.52,
      long: 13.405
    },
    createdAt: new Date(),
    lastModifiedDate: new Date()
  }
];

export default cities;
