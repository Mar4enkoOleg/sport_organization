"use strict";

const rewardingReward = [
  {
    rewarding_id: 1,
    reward_id: 1,
  },
  {
    rewarding_id: 1,
    reward_id: 2,
  },
  {
    rewarding_id: 2,
    reward_id: 3,
  },
  {
    rewarding_id: 2,
    reward_id: 4,
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
    await queryInterface.bulkInsert("rewarding_reward", rewardingReward);
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
