import z from 'zod'

import { ProductSchema } from '../base_broduct'

export const SwitchSchema = ProductSchema.extend({
  position: z.enum(['FL', 'FR', 'RR', 'RL', 'CENTER']),
  numberSwichs: z.number().int().positive(),
  pinOut: z.string(),
  model: z.array(z.string().nonempty()).min(1),
  modelYear: z.array(z.number().int().min(1990).max(2026)).min(1),
  genuine: z.enum(['true', 'false'])
})

export const validateSwitch = (input: any) => {
  const resultValidate = SwitchSchema.safeParse(input)
  return resultValidate
}
