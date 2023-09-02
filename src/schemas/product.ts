import z from 'zod'

export const ProductSchema = z.object({
  name: z.string().min(5).max(100),
  referencePart: z.array(z.string().nonempty()).min(1),
  urlStore: z.string().url(),
  nameStore: z.string().nonempty().max(50),
  idStore: z.string().nonempty().max(50),
  genuine: z.enum(['true', 'false']),
  category: z.string(),
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
