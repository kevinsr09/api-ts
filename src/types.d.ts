export type ProductBolean = 'true' | 'false'

export interface ResponseProducts {
  products: Product[]
  success: ProductBolean
}

export type ProductID = `${string}-${string}-${string}-${string}-${string}`

export enum PositionSwich {
  FL = 'FL',
  FR = 'FR',
  RR = 'RR',
  RL = 'RL',
  CENTER = 'CENTER'
}

export interface Product {
  id: ProductID
  name: string
  position: PositionSwich
  numberSwichs: string
  partNumber: string[]
  url: string
  store: string
  idStore: string
  genuine: ProductBolean
  category: string
  pinOut: string
  tag?: string[] | undefined
  description: string
  model: string[]
  modelYear: string[]
  price: string
  quantity: string
  img: string[]
}
