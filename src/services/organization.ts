import { Pool } from 'pg'
import { Organization } from '../models/organization'
import {
  createOrganization,
  findAllOrganizations,
  findOrganizationById
} from '../queries/organization/organization.queries'
import { ApiError } from '../utils/ApiError'

export interface OrganizationCreationParams {
  name: string
  address: string
}

export class OrganizationsService {
  public constructor(private readonly client: Pool) {
    this.client = client
  }

  public async find(id: number): Promise<Organization> {
    try {
      const organization = await findOrganizationById.run(
        { organizationId: id },
        this.client
      )
      if (!organization[0]) {
        throw new ApiError(
          'Not Found',
          404,
          `No organization with id: ${id} was found.`
        )
      }
      return organization[0]
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      throw new ApiError(
        'Internal server errror',
        500,
        'Something went wrong when executing query'
      )
    }
  }
  public async findMany(): Promise<Array<Organization>> {
    try {
      const organizations = await findAllOrganizations.run(void 0, this.client)
      return organizations
    } catch (error) {
      throw new ApiError(
        'Internal server errror',
        500,
        'Something went wrong when executing query'
      )
    }
  }
  public async create(
    organization: OrganizationCreationParams
  ): Promise<Organization> {
    try {
      const response = await createOrganization.run(
        { organization },
        this.client
      )
      return response[0]
    } catch (error) {
      throw new ApiError(
        'Internal server errror',
        500,
        'Something went wrong when executing query'
      )
    }
  }
}
