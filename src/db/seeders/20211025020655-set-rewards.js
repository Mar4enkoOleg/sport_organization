"use strict";

const { Sequelize } = require("sequelize");

const rewards = [
  {
    number_place: 1,
    sportsman_id: 2,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    number_place: 2,
    sportsman_id: 1,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    number_place: 1,
    sportsman_id: 3,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    number_place: 2,
    sportsman_id: 4,
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
    await queryInterface.bulkInsert("reward", rewards);
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
