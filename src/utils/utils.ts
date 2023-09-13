import { Product } from '../types/types'

export const resultModel = ({ message, success, data }: { message?: string, success: boolean, data?: Product }) => {
  if (!success) {
    return {
      success,
      error: {
        message
      }
    }
  }

  return {
    success,
    data
  }
}
