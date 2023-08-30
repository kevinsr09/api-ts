import z from 'zod'

const SwichtSchema = z.object({
  name: z.string().min(5).max(40),
  position: z.enum(['fl', 'fr', 'rr', 'rl', 'center']),
  numberSwichs: z.number().int().positive(),
  partNumber: z.array(z.string()),
  url: z.string().url(),
  store: z.string().max(50),
  idStore: z.string(),
  genuine: z.enum(['true', 'false']),
  category: z.string(),
  pinOut: z.string(),
  tag: z.array(z.string()).optional(),
  description: z.string().max(200),
  model: z.array(z.string()).min(1),
  modelYear: z.array(z.string()).min(1),
  price: z.number().int().positive(),
  quantity: z.number().int().positive(),
  imgs: z.array(z.string()).min(1)
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const validateSwich = (input: any) => {
  const resultValidate = SwichtSchema.safeParse(input)
  return resultValidate
}
