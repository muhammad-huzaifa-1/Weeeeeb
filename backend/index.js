// These are the imported Modules
const express = require('express');
const app = express();
const cors = require('cors')
const AddProduct = require('./Controller/AddProductController');
const upload = require('./middleware/multer');
const connectCloudinary = require('./connection/cloudinary');
// mongoConnection module exporter
const Connection = require('./connection/mongodbConnect');
Connection;
connectCloudinary();

// This is for Schemas Importer
const ProductModel = require('./schemas/ProductSchemas');
const UserModel = require('./schemas/User');

// These are the middle-wares
app.use(express.json());
//these are cores
app.use(cors());


// From here all are the API Routes
app.post('/addProduct',upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]),AddProduct);

app.get('/fetchProduct', async(req, res)=>{
    try {

        const getProduct = ProductModel;
        const result = await getProduct.find();
        res.send(result);

    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/getbyId/:id', async(req, res)=>{
    try {

        const Product = ProductModel;
        const getProductById = await Product.findOne({_id:req.params.id});
        res.send(getProductById);

    } catch (error) {
        res.status(400).send("Item not found");
    }
});

app.get('/relatedProducts', async(req, res)=>{
    try {

        const Product = ProductModel;
        const productCategory = await Product.find(req.query)
        res.send(productCategory);
        
    } catch (error) {
        res.status(400).send("Item not found");
    }
});

app.get('/filterProducts', async(req,res)=>{
    try {
        const Product = ProductModel;
        const result = await Product.find(req.query);
        res.send(result)
    } catch (error) {
        res.status(400).send("no item found")
    }
});

app.get('/searchProduct/:key',async(req,res)=>{
    try {
        const product = ProductModel;
        const result = await product.find({
            $or : [{name:{$regex:req.params.key}}]
        });
        res.send(result);
    } catch (error) {
        res.status(400).send({result:"No item"})
    }
})

app.delete('/deleteProducts/:_id',async(req,res)=>{
    try {
        
        const Product = ProductModel;
        const deleteProduct = await Product.deleteOne(req.params);
        res.send(deleteProduct);

    } catch (error) {
        res.status(400).send({result:"Something happend"})
    }
});


// These are the user Login Routes

app.post('/register', async(req,res)=>{
    try {
        
        if (req.body.name && req.body.email && req.body.password) {
            const useremail =await UserModel.findOne({email:req.body.email});
            const username = await UserModel.findOne({name:req.body.name});
            if(!useremail && !username){
                let User = UserModel;
                let result = new User(req.body);
                result = await result.save();
                result = result.toObject();
                delete result.password
                res.send(result);
            }else if(useremail && username){
                res.status(401).send({result:"Username and Email already taken"})
            }
            else if(useremail){
                res.status(401).send({result:"Email already taken"})
            }else if(username){
                res.status(401).send({result:"Username already taken"})
            }
        } else {
            res.status(401).send({result:"Please fill all the fields"})
        }

    } catch (error) {
      res.status(400).send(error);
    }
});

app.post('/login',async(req,res)=>{
    try {
        const User = UserModel;
        if(req.body.email && req.body.password){
            const result = await User.findOne(req.body).select('-password');
            if(result){
                res.send(result);
            }else{
                res.send({result:"Incorrect Information"})
            }
        }else{
            res.send({result:"Please Fill all the Fields"})
        }
    } catch (error) {
        res.send(error);
    }
})

// Server listener port
app.listen(5000);