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

const data: ResponseProducts = require('../mocks/data.json')
const { products } = data

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ProductModel {
  static async create (dataProduct: Omit<Product, 'id'>) {
    const isStore = products.findIndex(product => product.name === dataProduct.name)

    if (!(isStore < 0)) return resultModel({ success: false, message: 'the store exist' })

    const newProduct = {
      id: randomUUID(),
      ...dataProduct
    }

    products.push(newProduct)
    return resultModel({ success: true, data: newProduct })
  }
}
