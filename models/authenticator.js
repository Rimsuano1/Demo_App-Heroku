var pg_conn = require("./pg_config");
async function authen(user, pass)
{
    var authenticated = false;
    const auth_query =
    {
        text:'SELECT * FROM users WHERE user_name = $1 AND user_pwd = $2',
        values: [user, pass]
    };
    var query_data = await pg_conn.query(auth_query);
    if(query_data.rows.lenght == 1){
        authenticated=true;
    }
    console.log(authenticated);
    return authenticated;
}
module.exports=authen;