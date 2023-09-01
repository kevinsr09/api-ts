export type BoleanString = 'true' | 'false'

export interface ResponseProducts {
  products: Product[]
  success: BoleanString
}
export interface ResponseProduct {
  products: ProductSwitch
  success: BoleanString
}

export type ProductID = `${string}-${string}-${string}-${string}-${string}`

export interface Product {
  id: ProductID
  name: string
  position: PositionSwich
  numberSwichs: number
  referencePart: string[]
  urlStore: string
  nameStore: string
  idStore: string
  genuine: BoleanString
  category: string
  pinOut: string
  tag?: string[] | undefined
  description: string
  model: string[]
  modelYear: number[]
  price: number
  stock: number
  imgs: string[]
}

export interface ProductSwitch extends Product {
  position: PositionSwich
  numberSwichs: number
  pinOut: string
  model: string[]
  modelYear: number[]
}
