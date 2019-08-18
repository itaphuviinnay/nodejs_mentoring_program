"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jill",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "James",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
