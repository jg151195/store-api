import productRepository from '../repositories/product.repository.js'
import supplierRepository from '../repositories/supplier.repository.js'
import saleRepository from '../repositories/sale.repository.js'
import productInfoRepository from '../repositories/productInfo.repository.js';

async function createProduct(product){
    if(await supplierRepository.getSupplier(product.supplierId)){
        return await productRepository.insertProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function getProducts(){
    return await productRepository.getProducts();
}

async function getProduct(id){
    const product = await productRepository.getProduct(id);
    product.info = await productInfoRepository.getProductInfo(parseInt(id));
    return product
}
async function deleteProduct(id){
    const sales = await saleRepository.getSalesByProductId(id);
    if (sales.length>0){
        throw new Error ("Não é possível excluir o produto pois ele tem vendas")
    }
    return await productRepository.deleteProduct(id);
}
async function updateProduct(product){
    if(await supplierRepository.getSupplier(product.supplier_id)){
        return await productRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function createProductInfo(productInfo){
    await productInfoRepository.createProductInfo(productInfo)
}
async function updateProductInfo(productInfo){
    await productInfoRepository.updateProductInfo(productInfo)
}
async function createReview(review,productId){
    await productInfoRepository.createReview(review,productId)
}

async function deleteReview(productId,index){
    await productInfoRepository.deleteReview(parseInt(productId),index)
}
async function getProductsInfo(){
    return await productInfoRepository.getProductsInfo()
}

async function deleteProductInfo(productId){
    await productInfoRepository.deleteProductInfo(parseInt(productId))
}

export default {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    getProducts,
    createProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    getProductsInfo,
    deleteProductInfo
}