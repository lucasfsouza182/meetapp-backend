module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'provider');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'provider', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },
};
