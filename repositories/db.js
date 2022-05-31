import pg from "pg";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://qqmkucbg:p_aW7rchV1FRyL731dfMZwh0y0P3nHQI@castor.db.elephantsql.com/qqmkucbg"
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}