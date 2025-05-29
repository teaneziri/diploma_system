const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = require('./user')(sequelize); 

  const TemaDiplomes = sequelize.define('TemaDiplomes', {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' }
    },
    professor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: 'id' }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    submitted_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deadline: DataTypes.DATEONLY
  }, {
    tableName: 'tema_diplomes',
    timestamps: false
  });

  // Lidhjet midis modele
  TemaDiplomes.belongsTo(User, { as: 'student', foreignKey: 'student_id' });
  TemaDiplomes.belongsTo(User, { as: 'professor', foreignKey: 'professor_id' });

  return TemaDiplomes;
};
