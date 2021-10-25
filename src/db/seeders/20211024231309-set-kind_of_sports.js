"use strict";

const { Sequelize } = require("sequelize");

const kindOfSports = [
  {
    name: "Футбол",
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    name: "Теннис",
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("kind_of_sport", kindOfSports);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
