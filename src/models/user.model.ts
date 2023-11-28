import { injectable, singleton } from "tsyringe";
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../database";
import { UserAttributes } from "../interfaces/user.interface";

@singleton()
@injectable()
class UserModel extends Model<UserAttributes> {
  static initModel(sequelize: Sequelize): void {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        timestamps: true,
      }
    );
  }

  static associate(models: Record<string, Model>): void {
    // Define associations here if needed
  }
}

export default UserModel;
