import { Product, ResponseProducts } from '../types'
import { randomUUID } from 'node:crypto'

const resultModel = ({ message, success, data }: { message?: string, success: boolean, data?: Product }) => {
  if (!success) {
    return {
      success,
      error: {
        message
      }
    }
  }

  return {
    success,
    data
  }
}

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
      id: newProduct.id,
      name: newProduct.name,
      referencePart: newProduct.referencePart,
      urlStore: newProduct.urlStore,
      nameStore: newProduct.nameStore,
      idStore: newProduct.idStore,
      genuine: newProduct.genuine,
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
