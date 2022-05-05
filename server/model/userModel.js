const { DataTypes } = require("sequelize");
const { db } = require("../utils/databases");

//Users

const User = db.define("user", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  accountNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,    
    allowNull: false,
  },

  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1000,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { User }

