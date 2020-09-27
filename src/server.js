const express = require('express')
const mongose = require("mongoose")
const requireDir = require('require-dir')
const cors = require('cors');


//iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true,useUnifiedTopology:true});

//require('../src/models/Product')
requireDir('../src/models')


// const Product = mongose.model('Product')

app.use('/api', require('./routes'));

//ROTAS
app.listen(3001);