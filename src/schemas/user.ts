import z from 'zod'

export const UserValidatorSchema = z.object({
  userName: z.string().min(5).max(100),
  email: z.string().email(),
  password: z.string().min(7).max(50)
})

export const UserValidator = (input: any) => {
  const resultValidate = UserValidatorSchema.safeParse(input)
  return resultValidate
}
