import SubProd from "../models/subProductsModel.js";

const addSubProducts = async (req, res) => {
    const { product,subimage,subprodname,subproddesc } = req.body;

    const subprodExist = await SubProd.findOne({ subprodname });

    if (subprodExist) {
        return res.status(400).json({ message: 'This category product is already registered' });
    }
    else{
        const addsub = await SubProd.create({
            product,
            subimage,
            subprodname,
            subproddesc
        });

        if (addsub) {
            return res.status(201).json({
                _id: addsub._id,
                product: addsub.product, 
                subimage: addsub.subimage, 
                subprodname: addsub.subprodname,
                subproddesc: addsub.subproddesc,
                
            });
        } else {
            return res.status(400).json({ message: 'Invalid  sub product' });
        }
    }
        
};

const getsubproducts = async (req,res) =>{

    const getallsubproducts = await SubProd.find({});
    res.status(200).json(getallsubproducts);
};

const getsubProductById = async (req, res) =>{

    const subproductbyId = await SubProd.findById(req.params.id);
    if(subproductbyId){
      res.status(200).json(subproductbyId);
    }
    else{
      res.status(400).json('Sub Product not found');
    }
      
  }


const deletesubProduct = async (req, res) =>{

    const delsubprod = await SubProd.findById(req.params.id);
    if(delsubprod){
    
     await SubProd.deleteOne({_id: delsubprod._id});
     res.status(200).json({message: 'Sub Product deleted successfully'});
    }
    else{
     res.status(400).json('Sub Product not found');
    }
     
 };


 const udpatesubProduct = async (req, res) =>{

    const updatesubProd = await SubProd.findById(req.params.id);
    if(updatesubProd){
        updatesubProd.subimage = req.body.subimage || updatesubProd.subimage;
        updatesubProd.subprodname = req.body.subprodname || updatesubProd.subprodname;
        updatesubProd.subproddesc = req.body.subproddesc || updatesubProd.subproddesc;
      

  
      const updatesubpro = await updatesubProd.save();
      res.status(200).json({
          _id: updatesubpro._id,
          subimage: updatesubpro.subimage,
          subprodname: updatesubpro.subprodname,
          subproddesc: updatesubpro.subproddesc
          
      })
    }
    else{
      res.status(400).json('Sub Product not found');
    }
      
  }

export {addSubProducts,getsubproducts,deletesubProduct,getsubProductById,udpatesubProduct}