"use strict";
const { Sequelize } = require("sequelize");

const characteristics = [
  {
    name: "Вместительность",
    value: "2000",
    created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  {
    name: "Тип покрытия",
    value: "Искусственная газон",
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
    await queryInterface.bulkInsert(
      "sports_facility_characteristic",
      characteristics
    );
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
