module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('subscription_features', {
    enabled: {
      type: DataTypes.BOOLEAN,
    },
    enabled_at: {
      type: DataTypes.DATE,
    },
    disabled_at: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'subscription_features',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.subscriptions);
    Model.belongsTo(models.features);
  };

  return Model;
};

