import productModel from "../models/productModel.js";

export async function GetAllProducts(req, res) {
    try {
        const products = await products.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export async function GetProductById(req, res) {
    try {
        const product = await productModel.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}