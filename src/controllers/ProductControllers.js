const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
    async index(req,res){
        const products = await Product.find();

        return res.json(products);
    },

    async store(req,res){
        //criar novo registro
        const product = await Product.create(req.body);

        return res.json(product);

    },

    async show(req,res){
        //mostrar um unico item

        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req,res){
        //definindo o new como true o valor atualizado será atribuido a variacavel 'products'
        // se esse valor não for setado, o valor antes da atualização será atribuido a products

        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true,useFindAndModify:false});

        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id,{useFindAndModify:false});

        return res.send();
    }
};