const cloudinary = require('cloudinary').v2;
const ProductModel = require('../schemas/ProductSchemas');
// Add product function

const AddProduct = async(req, res)=>{
    try {
        
        const {name,price, discription, category} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async(item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            price,
            discription,
            category,
            image:imagesUrl,
            date: Date.now()
        }

        const product = new ProductModel(productData);
        await product.save();
        res.json({success:true, message:"Product Added"})

    } catch (error) {
      res.json(error)
    }
}


module.exports = AddProduct;