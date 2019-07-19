const express = require( 'express')
const bodyparser = require( 'body-parser')
const app = express()
const cors = require('cors')
require('dotenv/config')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

console.log(process.env.CORS_ORIGIN)
var allowedOrigins = process.env.CORS_ORIGIN;

app.use(cors({origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('error on cors access'), false);
    }
    return callback(null, true);
  }
}));


app.use(require('./src/routes'))
const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, ()=>console.log(`Server listen on: ${port}`));
