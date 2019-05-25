import { Model, DataTypes, Sequelize } from "sequelize";
export class Series extends Model {
  public id: number;
  public name: string;
}

export default (sequelize: Sequelize) => {
  Series.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: new DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: "gcd_series"
    }
  );
  Series.removeAttribute("createdAt");
  Series.removeAttribute("updatedAt");
};
