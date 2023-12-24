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
      required: true,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
      unique: true,
    },
    cnic: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const cust = mongoose.model("customers", customerSchema);
export default cust;
