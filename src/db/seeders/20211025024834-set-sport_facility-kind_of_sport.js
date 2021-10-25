"use strict";

const sportFacilityKindOfSport = [
  {
    kind_of_sport_id: 1,
    sport_facility_id: 1,
  },
  {
    kind_of_sport_id: 2,
    sport_facility_id: 2,
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
      "sport_facility_kind_of_sport",
      sportFacilityKindOfSport
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
