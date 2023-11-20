import Product from "../models/productModel.js";


const addProduct = async (req, res) => {
    const { nameofproduct } = req.body;

    const productExists = await Product.findOne({ nameofproduct });

    if (productExists) {
        return res.status(400).json({ message: 'This product is already registered' });
    }
    else{
        const product = await Product.create({
            nameofproduct
         
        });

        if (product) {
            return res.status(201).json({
                _id: product._id,
                nameofproduct: product.nameofproduct,
                
            });
        } else {
            return res.status(400).json({ message: 'Invalid product' });
        }
    }
        
};

const getCustomers = async (req, res) =>{

    const allProducts = await Product.find({});
    res.status(200).json(allProducts);
     
 }

 
const getProductById = async (req, res) =>{

    const productbyId = await Product.findById(req.params.id);
    if(productbyId){
      res.status(200).json(productbyId);
    }
    else{
      res.status(400).json('Product not found');
    }
      
  }

  const deleteProduct = async (req, res) =>{

    const delprod = await Product.findById(req.params.id);
    if(delprod){
    
     await Product.deleteOne({_id: delprod._id});
     res.status(200).json({message: 'Product deleted successfully'});
    }
    else{
     res.status(400).json('Product not found');
    }
     
 } 


 const udpateProduct = async (req, res) =>{

    const updateProd = await Product.findById(req.params.id);
    if(updateProd){
        updateProd.nameofproduct = req.body.nameofproduct || updateProd.nameofproduct;
      
      const updatepro = await updateProd.save();
      res.status(200).json({
          _id: updatepro._id,
          nameofproduct: updatepro.nameofproduct,
          
      })
    }
    else{
      res.status(400).json('Product not found');
    }
      
  }


export {addProduct,getCustomers,getProductById,deleteProduct,udpateProduct}