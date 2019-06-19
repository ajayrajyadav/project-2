require("dotenv").config();
exports.dbConfig = {
  development: {
    username: process.env.DEVELOPMENT_USERNAME,
    password: process.env.DEVELOPMENT_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: process.env.DEVELOPMENT_HOST,
    port: process.env.DEVELOPMENT_PORT,
    dialect: "mysql"
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.TEST_PASSWORD,
    port: process.env.TEST_PORT,
    dialect: "mysql"
  },
  production: {
    // "use_env_variable": "JAWSDB_URL",
    // "dialect": "mysql"
    // username: 'u44h3q2k9lqyvexo',
    // password: 'feis9tvse71veykb',
    // database: 'qmjmnm0yyv0xwcj2',
    // host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // port: '3306',
    // dialect: "mysql"

    //jswsdb2
    username: 'm3i0eiykjom2udcz',
    password: 'dcf2v7fxy29tbar8',
    database: 'pntsvlp03kajfjs1',
    host: 's54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    dialect: "mysql"

    	
  }
};