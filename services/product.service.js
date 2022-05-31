import productRepository from '../repositories/product.repository.js'
import supplierRepository from '../repositories/supplier.repository.js'

async function createProduct(product){
    if(await supplierRepository.getSupplier(product.supplier_id)){
        return await productRepository.insertProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

async function getProducts(){
    return await productRepository.getProducts();
}

async function getProduct(id){
    return await productRepository.getProduct(id);
}
async function deleteProduct(id){
    return await productRepository.deleteProduct(id);
}
async function updateProduct(product){
    if(await supplierRepository.getSupplier(product.supplier_id)){
        return await productRepository.updateProduct(product);
    }
    throw new Error("O supplier_id informado não existe.")
}

export default {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    getProducts
}