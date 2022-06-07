import Sequelize from "sequelize"

const sequelize = new Sequelize(
    "postgres://qqmkucbg:p_aW7rchV1FRyL731dfMZwh0y0P3nHQI@castor.db.elephantsql.com/qqmkucbg",
    {
        dialect: "postgres",
        define:{
            timestamps: false
        }
    }
)

export default sequelize