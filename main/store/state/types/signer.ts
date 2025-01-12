import { z } from 'zod'

const HotSignerValues = ['ring', 'seed'] as const
const HardwareSignerValues = ['trezor', 'ledger', 'lattice'] as const

const HotSignerTypes = z.enum(HotSignerValues)
const HardwareSignerTypes = z.enum(HardwareSignerValues)
export const SignerTypes = z.enum([...HotSignerValues, ...HardwareSignerValues])

export const SignerSchema = z.object({
  id: z.string(),
  name: z.string(),
  model: z.string(),
  type: SignerTypes,
  addresses: z.array(z.string()),
  status: z.string(),
  createdAt: z.number().default(0)
})

export type HotSignerType = z.infer<typeof HotSignerTypes>
export type HardwareSignerType = z.infer<typeof HardwareSignerTypes>
export type SignerType = z.infer<typeof SignerTypes>

export type Signer = z.infer<typeof SignerSchema>
