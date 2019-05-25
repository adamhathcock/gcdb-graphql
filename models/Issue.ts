import { Model, DataTypes, Sequelize, HasOne } from "sequelize";
import { Series } from "./Series";

export class Issue extends Model {
  public id: number;
  public number: string;
  public title: string;
  public volume: string;
  public series_id: number;
  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  public readonly series?: Series; // Note this is optional since it's only populated when explicitly requested in code
  public static Series: HasOne<Issue, Series>;
}

export default (sequelize: Sequelize) => {
  Issue.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
        autoIncrement: true,
        primaryKey: true
      },
      number: {
        type: new DataTypes.STRING(50),
        allowNull: false
      },
      title: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      series_id: {
        type: DataTypes.INTEGER.UNSIGNED // you can omit the `new` but this is discouraged
      }
    },
    {
      sequelize,
      tableName: "gcd_issue"
    }
  );
  Issue.removeAttribute("createdAt");
  Issue.removeAttribute("updatedAt");

  Issue.Series = Issue.hasOne(Series, {
    sourceKey: "series_id",
    foreignKey: "id",
    as: "series" // this determines the name in `associations`!
  });
};
