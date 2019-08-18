"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "T-Shirt",
          brand: "Supreme",
          price: 99.99,
          color: "blue",
          size: "XL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeans",
          brand: "Supreme",
          price: 599.99,
          color: "black",
          size: "L",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Casual Wear",
          brand: "Supreme",
          price: 399.99,
          color: "red",
          size: "M",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  }
};
