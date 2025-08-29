// migrations/20250805125103-create-refund-status.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('refundStatus', {
    refundStatusId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    statusName: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('refundStatus');
}