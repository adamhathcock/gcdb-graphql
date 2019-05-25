import issue from "./Issue";
import series from "./Series";
import { Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  series(sequelize);
  issue(sequelize);
};
