require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_NAME
} = process.env;


//------------------------------------//
//--------database connection---------//
//------------------------------------//
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
//------------------------------------//
//---connection check with database---//
//------------------------------------//
sequelize.authenticate()
.then(()=>{console.log('success connection check with database  (db.js)')})
.catch((e)=>{console.log(e)});



// constants to import database models
const basename = path.basename(__filename);
const modelDefiners = [];

// We read all the files from the Models folder, require them and add them to the modelDefiners array
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// We inject the connection (sequelize) to all models
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
//We capitalize the names of the ie models: product => Product
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// In sequelize.models are all imported models as properties
// To relate them we do a destructuring
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Type, Operation } = sequelize.models;



//------------------------------------//
//------Relations between Models------//
//------------------------------------// //, { foreignKey: 'clubId' }
Type.hasMany(Operation, { onDelete: 'CASCADE' }); 
Operation.belongsTo(Type, { onDelete: 'CASCADE' });




module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  };
