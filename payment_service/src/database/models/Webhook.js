// models/webhook.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Webhook extends Model {
    static associate(models) {
      Webhook.hasMany(models.WebhookEvent, { foreignKey: 'webhookId' });
    }
  }
  Webhook.init({
    webhookId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    stripeWebhookId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    merchantId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    endpointUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    secretKey: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    eventType: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Webhook',
    tableName: 'webhook',
    underscored: false,
  });
  return Webhook;
};
