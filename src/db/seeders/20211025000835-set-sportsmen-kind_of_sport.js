"use strict";

const sportsmenKindOfSport = [
  {
    kind_of_sport_id: 1,
    sportsman_id: 1,
  },
  {
    kind_of_sport_id: 1,
    sportsman_id: 2,
  },
  {
    kind_of_sport_id: 2,
    sportsman_id: 3,
  },
  {
    kind_of_sport_id: 2,
    sportsman_id: 4,
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
      "sportsman_kind_of_sport",
      sportsmenKindOfSport
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
