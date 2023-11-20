import mongoose from 'mongoose';
import subprod from './subProductsModel.js'

const Product = new mongoose.Schema({

nameofproduct:{
    type: String,
    unique: true,
    required: true,  
}

},{
    timestamps: true, 
});



const product = mongoose.model("product", Product); 
export default product; 

