import Cust from '../models/customerModel.js';


const registerUser = async (req, res) => {
    const { firstname, lastname, factoryname, email, contact, cnic } = req.body;

    // Validate if CNIC is a number
    if (isNaN(cnic)) {
        return res.status(400).json({ message: 'CNIC must be a number.' });
    }

    // Validate if contact is a number
    else if (isNaN(contact)) {
        return res.status(400).json({ message: 'Contact must be a number.' });
    } else {
        // Check if the email already exists
        const emailExists = await Cust.findOne({ email });

        if (emailExists) {
            return res.status(400).json({ message: 'This email is already registered!' });
        }

        // Check if the CNIC already exists
        const cnicExists = await Cust.findOne({ cnic });

        if (cnicExists) {
            return res.status(400).json({ message: 'This CNIC is already registered!' });
        } else {
            // Create the customer
            const customer = await Cust.create({
                firstname,
                lastname,
                factoryname,
                email,
                contact,
                cnic,
            });

            if (customer) {
                return res.status(201).json({
                    _id: customer._id,
                    firstname: customer.firstname,
                    lastname: customer.lastname,
                    factoryname: customer.factoryname,
                    email: customer.email,
                    contact: customer.contact,
                    cnic: customer.cnic,
                });
            } else {
                return res.status(400).json({ message: 'Invalid customer data' });
            }
        }
    }
};



const deleteCustomer = async (req, res) =>{  

    const customer = await Cust.findById(req.params.id);
    if(customer){
     
     await Cust.deleteOne({_id: customer._id});
     res.status(200).json({message: 'customer deleted successfully'});
    }
    else{
     res.status(400).json('Customer not found');
    }
     
 }  

 const updateCustomer = async (req, res) =>{

    const customer = await Cust.findById(req.params.id);
    if(customer){
        customer.firstname= req.body.firstname || customer.firstname;
        customer.lastname= req.body.lastname || customer.lastname;
        customer.factoryname= req.body.factoryname || customer.factoryname;
        customer.email= req.body.email || customer.email;
        customer.contact= req.body.contact || customer.contact;
        customer.cnic= req.body.cnic || customer.cnic;
      const updatedCustomer = await customer.save();
  
      res.status(200).json({
        message: 'Customer updated successfully',
        _id: updatedCustomer._id,
        firstname: updatedCustomer.firstname,
        lastname: updatedCustomer.lastname,
        factoryname: updatedCustomer.factoryname,
        email: updatedCustomer.email,
        contact: updatedCustomer.contact,
        cnic: updatedCustomer.cnic,
      });
    }
    else{
      console.error('error');
      res.status(400).json('customer not found');
    } 
       
  } 


  const getCustomers = async (req, res) =>{

    const customer = await Cust.find({});
    res.status(200).json(customer);
     
 }

 const getSingleCustomer = async (req,res)=>{
    const customer = await Cust.findById(req.params.id).select('-password');
    if(customer){
     
   
     res.status(200).json(customer);
    }
    else{
     res.status(400).json('Customer not found'); 
    }
 }

export {registerUser,deleteCustomer,updateCustomer,getCustomers,getSingleCustomer}