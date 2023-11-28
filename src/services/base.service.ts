import { Model, Op } from "sequelize";
import { autoInjectable } from "tsyringe";
import sequelize from "../database";
import ModelI from "../interfaces/mode.interface";

export default class BaseService<T> {
  model: Model<any, any>;

  constructor(model: ModelI) {
    this.model = model.model;
  }

  post = async (data: T) => {
    return await this.model.create(data);
  };

  get = async (filters = {}): Promise<T[]> => {
    return await this.model.findAll({ where: filters });
  };

  getById = async (id: string): Promise<T | null> => {
    return await this.model.findByPk(id);
  };

  delete = async (id: string): Promise<void> => {
    await this.model.destroy({ where: { id } });
  };
}
