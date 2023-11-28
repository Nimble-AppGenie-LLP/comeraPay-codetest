import { Model } from "sequelize";

export default interface ModelI {
  model: Model<any, any>;
}