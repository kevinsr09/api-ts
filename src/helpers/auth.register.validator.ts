import z from 'zod'

const AuthRegisterValidatorSchema = z.object({
  id: z.string().uuid(),
  userName: z.string().min(5).max(100),
  email: z.string().email(),
  password: z.string().min(7).max(50),
  avatar: z.string().url().optional()
})

export const authRegisterValidator = (input: any) => {
  const resultValidate = AuthRegisterValidatorSchema.safeParse(input)
  return resultValidate
}
