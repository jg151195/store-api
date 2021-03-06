import saleRepository from '../repositories/sale.repository.js'
import clientRepository from '../repositories/client.repository.js'
import productRepository from '../repositories/product.repository.js'

async function createSale(sale){
    const product = await productRepository.getProduct(sale.productId);
    if(!await clientRepository.getClient(sale.clientId) || !product){
        throw new Error("O client_id ou product_id informado não existe")
    }

    if(product.stock > 0){
       sale = await saleRepository.insertSale(sale);
       product.stock--;
       await productRepository.updateProduct(product)
       return sale;
    } else{
        throw new Error("Produto informado não possui estoque.")
    }
}

async function getSales(productId, supplierId){
    if(productId){
        return await saleRepository.getSalesByProductId(productId);
    }
    if(supplierId){
        return await saleRepository.getSalesBySupplierId(supplierId)
    }
    return await saleRepository.getSales();
}

async function getSale(id){
    return await saleRepository.getSale(id);
}
async function deleteSale(id){
    const sale = await saleRepository.getSale(id);
    if(sale){
        const product = await productRepository.getProduct(sale.productId);
        await saleRepository.deleteSale(id);
        product.stock++
        await productRepository.updateProduct(product);
    } else{
        throw new Error("O id da sale informado não existe")
    }
    return 
}
async function updateSale(sale){
    if(!await clientRepository.getClient(sale.clientId) || !productRepository.getProduct(sale.productId)){
        throw new Error("O client_id ou product_id informado não existe")
    }
    return await saleRepository.updateSale(sale);
}

export default {
    createSale,
    getSale,
    deleteSale,
    updateSale,
    getSales
}