import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: true,
    },
    customerName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    factoryName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    contactNum: {
        type: String,
        required: true,
    },
    cnic: {
        type: Number,
        required: true,
        unique: true,
        min: 1000000000000,
        max: 9999999999999,
    },
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255,
    },
    squareFoot: {
        type: Boolean,
        default: false,
    },
    runningFoot: {
        type: Boolean,
        default: false,
    },
    productWidth: {
        type: Number,
        required: true,
        min: 0,
    },
    productLength: {
        type: Number,
        required: true,
        min: 0,
    },
    calculatedSquareft: {
        type: Number,
        required: true,
        min: 0,
    },
    calculatedRunningft: {
        type: Number,
        required: true,
        min: 0,
    },
    productQuantity: {
        type: Number,
        required: true,
        min: 0,
    },
    productThickness: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    productRate: {
        type: Number,
        required: true,
        min: 0,
    },
    topPolish: {
        type: Boolean,
        default: false,
    },
    topPolishRate: {
        type: Number,
        required: true,
        min: 0,
    },
    topPolishCalculate: {
        type: Number,
        required: true,
        min: 0,
    },
    topPolishAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    edgePolish: {
        type: Boolean,
        default: false,
    },
    edgePolishRate: {
        type: Number,
        required: true,
        min: 0,
    },
    edgePolishAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    edgePolishCalculate: {
        type: Number,
        required: true,
        min: 0,
    },
    paidAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    balance: {
        type: Number,
        required: true,
        min: 0,
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true,
});

const Bill = mongoose.model('bills', billSchema);
export default Bill;
