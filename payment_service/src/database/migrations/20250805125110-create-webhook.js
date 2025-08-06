// migrations/20250805125110-create-webhook.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('webhooks', {
    webhook_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    merchant_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    endpoint_url: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    secret_key: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    event_types: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
    retry_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    last_retry_at: {
      type: Sequelize.DATE,
    },
  });
  await queryInterface.addIndex('webhooks', ['merchant_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('webhooks');
}