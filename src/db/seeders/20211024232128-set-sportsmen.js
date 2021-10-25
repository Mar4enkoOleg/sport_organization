"use strict";

const { Sequelize } = require("sequelize");

const sportsmen = [
  {
    full_name: "Попов Поп Попович",
    sport_club_id: 1,
    skill_lvl: 4,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    full_name: "Иванов Иван Иванович",
    skill_lvl: 3,
    sport_club_id: 1,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    full_name: "Сидоров Сидр Сидорович",
    sport_club_id: 2,
    skill_lvl: 5,
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    full_name: "Джон До",
    sport_club_id: 2,
    skill_lvl: 5,
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
    await queryInterface.bulkInsert("sportsman", sportsmen);
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
