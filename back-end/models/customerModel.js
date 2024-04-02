import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    factoryname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    contact: {
      type: String,
    },
    cnic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Cust = mongoose.model("Customer-Users", customerSchema);
export default Cust;
