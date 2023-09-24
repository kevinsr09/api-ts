import z from 'zod'

const UserValidatorSchema = z.object({
  id: z.string().uuid(),
  userName: z.string().min(5).max(100),
  email: z.string().email(),
  password: z.string().min(7).max(50),
  avatar: z.string().url().optional()
})

export const userValidator = (input: any) => {
  const resultValidate = UserValidatorSchema.safeParse(input)
  return resultValidate
}
