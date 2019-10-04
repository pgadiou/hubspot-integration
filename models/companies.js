module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('companies', {
    description: {
      type: DataTypes.STRING,
    },
    industry: {
      type: DataTypes.STRING,
    },
    headquarters: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['lead', 'customer','churn']
    },
    name: {
      type: DataTypes.STRING,
    },
    crm_id: {
      type: DataTypes.BIGINT,
    },
  }, {
    tableName: 'companies',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.hasMany(models.users);
    Model.hasOne(models.subscriptions)
  };

  return Model;
};

