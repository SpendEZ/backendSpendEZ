// migrations/20250805125110-create-webhook.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('webhook', {
    webhookId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    stripeWebhookId: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    merchantId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    endpointUrl: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    secretKey: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    eventType: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
  await queryInterface.addIndex('webhook', ['merchantId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('webhook');
}