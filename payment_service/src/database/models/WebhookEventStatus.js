// models/webhookEventStatus.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class WebhookEventStatus extends Model {
    static associate(models) {
      WebhookEventStatus.hasMany(models.WebhookEvent, { foreignKey: 'webhookEventStatusId' });
    }
  }
  WebhookEventStatus.init({
    webhookEventStatusId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    statusName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'WebhookEventStatus',
    tableName: 'webhookEventStatusId',
    underscored: true,
  });
  return WebhookEventStatus;
};