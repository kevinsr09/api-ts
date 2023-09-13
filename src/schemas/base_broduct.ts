import z from 'zod'
import { CATEGORIES } from '../utils/constants'

export const ProductSchema = z.object({
  name: z.string().min(5).max(100),
  productID: z.string().nonempty().max(50),
  purchaseLink: z.string().url(),
  nameStore: z.string().nonempty().max(70),
  category: z.enum([CATEGORIES.CAR_PARTS, CATEGORIES.CLOTHES]),
  tag: z.array(z.string()).optional(),
  description: z.string().max(1000),
  price: z.number().positive(),
  stock: z.number().int().positive(),
  imgs: z.array(z.string().url()).min(1)
})

export const validateProduct = (input: any) => {
  const resultValidate = ProductSchema.safeParse(input)
  return resultValidate
}
