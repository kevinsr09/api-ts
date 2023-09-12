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
  referencePart: string[]
  urlStore: string
  nameStore: string
  idStore: string
  genuine: BooleanString
  category: string
  tag?: string[] | undefined
  description: string
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
