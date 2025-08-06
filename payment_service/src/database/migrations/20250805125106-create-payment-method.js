// migrations/20250805125106-create-payment-method.js
'use strict';
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('payment_methods', {
    payment_method_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    customer_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    payment_type_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'payment_types',
        key: 'payment_type_id',
      },
    },
    is_default: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
  });
  await queryInterface.addIndex('payment_methods', ['customer_id']);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('payment_methods');
}
