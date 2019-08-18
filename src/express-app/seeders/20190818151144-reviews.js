"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          productId: 1,
          userId: 3,
          review:
            "The T-Shirt is awesome. Fits perfectly. On-time delivery. Keep up the good work",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          userId: 2,
          review:
            "The Jeans is really nice and trendy. I got this for my birthday and it didn't disappoint me. On-time delivery made it more special",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 1,
          userId: 1,
          review:
            "These type of casual wear are perfect for daily usage. If you are looking for wear at an affordable price range then this is your best buy. Don't hesitate. Just go for it.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};
