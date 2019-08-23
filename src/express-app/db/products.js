const products = [
  {
    id: 1,
    name: "T-shirt",
    brand: "Supreme",
    price: 99.99,
    color: "blue",
    size: "XL",
    reviews: [
      "The T-Shirt is awesome. Fits perfectly. On-time delivery. Keep up the good work",
      "These type of casual wear are perfect for daily usage. If you are looking for wear at an affordable price range then this is your best buy. Don't hesitate. Just go for it."
    ],
    createdAt: new Date(),
    lastModifiedDate: new Date()
  },
  {
    id: 2,
    name: "Jeans",
    brand: "Supreme",
    price: 599.0,
    color: "black",
    size: "L",
    reviews: [
      "The Jeans is really nice and trendy. I got this for my birthday and it didn't disappoint me. On-time delivery made it more special"
    ],
    createdAt: new Date(),
    lastModifiedDate: new Date()
  },
  {
    id: 3,
    name: "Casual Wear",
    brand: "Supreme",
    price: 399.99,
    color: "red",
    size: "M",
    reviews: [],
    createdAt: new Date(),
    lastModifiedDate: new Date()
  }
];

export default products;
