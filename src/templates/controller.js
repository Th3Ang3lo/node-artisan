export default `
import { Request, Response } from 'express'

export class %controllerName%  {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {

      return response.status(200).send()
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}

`
