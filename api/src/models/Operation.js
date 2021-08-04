const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('operation', {
    id_operation:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  }, { timestamps: false });

};