// migrations/20250805125104-create-webhook-event-status.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('webhookEventStatus', {
    webhookEventStatusId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    statusName: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('webhookEventStatus');
}