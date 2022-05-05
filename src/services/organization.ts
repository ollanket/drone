import client from '../client'
import { Organization } from '../models/organization'
import {
  findAllOrganizations,
  findOrganizationById
} from '../queries/organization/organization.queries'
import { ApiError } from '../utils/ApiError'

export class OrganizationsService {
  public async find(id: number): Promise<Organization> {
    try {
      const organization = await findOrganizationById.run(
        { organizationId: id },
        client
      )
      return organization[0]
    } catch (error) {
      throw new ApiError(
        'Internal server errror',
        500,
        'Something went wrong when executing query'
      )
    }
  }
  public async findMany(): Promise<Array<Organization>> {
    try {
      const organizations = await findAllOrganizations.run(void 0, client)
      return organizations
    } catch (error) {
      throw new ApiError(
        'Internal server errror',
        500,
        'Something went wrong when executing query'
      )
    }
  }
}
