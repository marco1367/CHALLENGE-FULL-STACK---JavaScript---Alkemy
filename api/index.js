const server = require("./src/app")
const { conn } = require('./src/db.js');
const { Type, Operation } = require("./src/db");
const { data_types, data_operations } = require("./src/data/data");


// Syncing all the models at once.
conn.sync({ force: true })
.then( async () => {
    console.log('the database synchronizes (index.js) ')

    Type.bulkCreate(data_types).then( console.log( "correct data_type load" ) );
    Operation.bulkCreate(data_operations).then( console.log( "correct data_operations load" ) );


    server.listen( 3001, ()=>{
        console.log('%s listening at 3001  (index.js)'); 
    } );
})


