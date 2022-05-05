export class ApiError extends Error {
  public statusCode: number
  constructor(name: string, statusCode: number, message?: string) {
    super(message)
    this.name = name
    this.statusCode = statusCode
  }
}

export interface ApiErrorType {
  name: string
  statusCode: number
  message?: string
}

export interface ValidateErrorJSON {
  message: 'Validation failed'
  details: { [name: string]: unknown }
}
