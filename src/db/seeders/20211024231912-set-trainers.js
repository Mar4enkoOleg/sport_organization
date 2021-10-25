"use strict";

const { Sequelize } = require("sequelize");

const trainers = [
  {
    full_name: "Футболист Футболистович",
    kind_of_sport_id: 1,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    full_name: "Теннис Теннисович",
    kind_of_sport_id: 2,
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
    await queryInterface.bulkInsert("trainer", trainers);
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
