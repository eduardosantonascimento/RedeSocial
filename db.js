async function connect(){
    if(global.connection && global.connection.state !== 'diconnected')
        return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/socialnetwork");
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection
}

connect();

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM user;');
    return rows;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO user(full_name, email, password, is_active) VALUES(?,?,?,?);';
    const values = [customer.full_name, customer.email, customer.password, customer.is_active];
    await conn.query(sql, values);
}


module.exports = {selectCustomers, insertCustomer}