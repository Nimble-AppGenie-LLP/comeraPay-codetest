import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: "comera",
  logging: false, // Set to true to log SQL queries
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully Connected!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

export const disconnectDb = async () => {
  try {
    await sequelize.close();
    console.log("Connection closed.");
  } catch (error) {
    console.error("Error closing the connection:", error);
    throw error;
  }
};

export default sequelize;
