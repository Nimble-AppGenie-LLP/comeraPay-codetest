import { Model } from "sequelize";
// import { PostI } from "./post.interface";

export interface UserI {
  name: string;
  email: string;
  password?: string;
//   posts?: PostI[];
}

export interface UserAttributes extends UserI {}

export default interface UserSI extends UserAttributes, Model {}