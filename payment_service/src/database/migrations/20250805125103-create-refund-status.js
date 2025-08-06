// migrations/20250805125103-create-refund-status.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('refund_statuses', {
    status_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    status_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('refund_statuses');
}