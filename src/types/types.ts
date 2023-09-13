import { POSITION_SWITCH } from '../utils/constants'

export type BooleanString = 'true' | 'false'

export interface ResponseProducts {
  products: Product[]
  success: BooleanString
}
export interface ResponseProduct {
  products: ProductSwitch
  success: BooleanString
}

export type ProductID = `${string}-${string}-${string}-${string}-${string}`

export interface Product {
  id: ProductID
  name: string
  productID: string
  purchaseLink: string
  nameStore: string
  category: string
  tag?: string[] | undefined
  description: string
  price: number
  stock: number
  imgs: string[]
}

export interface ProductSwitch extends Product {
  position: POSITION_SWITCH
  numberSwichs: number
  pinOut: string
  model: string[]
  modelYear: number[]
}
