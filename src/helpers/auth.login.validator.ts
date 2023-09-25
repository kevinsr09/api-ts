import z from 'zod'

const AuthLoginValidatorSchema = z.object({
  email: z.string().email(),
  password: z.string().min(7).max(50)
})

export const authLoginValidator = (input: any) => {
  const resultValidate = AuthLoginValidatorSchema.safeParse(input)
  return resultValidate
}
