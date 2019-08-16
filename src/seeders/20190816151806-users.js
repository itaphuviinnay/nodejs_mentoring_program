"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Vinay",
          lastName: "Itapu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Vijay",
          lastName: "Itapu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Siva",
          lastName: "Rallabhandi",
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
