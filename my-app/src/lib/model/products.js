import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
});

export const Product = mongoose.models.Product || mongoose.model("Product", productModel);