// migrations/20250805125106-create-payment-method.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('paymentMethod', {
    paymentMethodId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    customerId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    paymentTypeId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'paymentType',
        key: 'paymentTypeId',
      },
    },
    isDefault: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
  await queryInterface.addIndex('paymentMethod', ['customerId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('paymentMethod');
}
