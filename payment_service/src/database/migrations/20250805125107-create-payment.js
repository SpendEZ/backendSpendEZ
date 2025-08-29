// migrations/20250805125107-create-payment.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('payment', {
    paymentId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    customerId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    paymentMethodId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'paymentMethod',
        key: 'paymentMethodId',
      },
    },
    orderId: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    currency: {
      type: Sequelize.STRING(3),
      allowNull: false,
    },
    paymentStatusId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'paymentStatus',
        key: 'paymentStatusId',
      },
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
    metadata: {
      type: Sequelize.JSONB,
    },
  });
  await queryInterface.addIndex('payment', ['customerId']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('payment');
}