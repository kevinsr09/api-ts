export interface DuplicateKeyError extends Error {
  code: number
  errmsg: string
  keyPattern: { [key: string]: number }
  keyValue: { [key: string]: string }
}
