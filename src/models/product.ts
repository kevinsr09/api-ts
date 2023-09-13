import { Product, ResponseProducts } from '../types/types'
import { randomUUID } from 'node:crypto'
import { resultModel } from '../utils/utils'

const data: ResponseProducts = require('../mocks/products.json')
const allProducts: ResponseProducts = require('../mocks/base_products.json')
const { products } = data
const { products: productsof } = allProducts

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ProductModel {
  static async create (dataProduct: Omit<Product, 'id'>) {
    const isStore = products.findIndex(product => product.name === dataProduct.name)

    if (!(isStore < 0)) return resultModel({ success: false, message: 'the store exist' })

    const newProduct = {
      id: randomUUID(),
      ...dataProduct
    }

    productsof.push({
      id: randomUUID(),
      name: newProduct.name,
      productID: newProduct.id,
      purchaseLink: newProduct.purchaseLink,
      nameStore: newProduct.nameStore,
      category: newProduct.category,
      description: newProduct.description,
      price: newProduct.price,
      stock: newProduct.stock,
      imgs: newProduct.imgs
    })
    products.push(newProduct)

    console.log({
      data: productsof,
      allProducts: products
    })
    return resultModel({ success: true, data: newProduct })
  }
}
