export type BoleanString = 'true' | 'false'

export interface ResponseProducts {
  products: Product[]
  success: BoleanString
}

export type ProductID = `${string}-${string}-${string}-${string}-${string}`

export interface Product {
  id: ProductID
  name: string
  position: PositionSwich
  numberSwichs: number
  partNumber: string[]
  url: string
  store: string
  idStore: string
  genuine: tBoleanString
  category: string
  pinOut: string
  tag?: string[] | undefined
  description: string
  model: string[]
  modelYear: number[]
  price: number
  quantity: number
  imgs: string[]
}
