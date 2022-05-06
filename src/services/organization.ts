import { Client, Pool } from 'pg'
import { Organization } from '../models/organization'
import {
  createOrganization,
  deleteOrganization,
  findAllOrganizations,
  findOrganizationById
} from '../queries/organization/organization.queries'
import { ApiError } from '../utils/ApiError'

export interface OrganizationCreationParams {
  name: string
  address: string
}

export class OrganizationsService {
  public constructor(private readonly client: Pool | Client) {
    this.client = client
  }

  public async find(id: number): Promise<Organization> {
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
  }
  public async findMany(): Promise<Array<Organization>> {
    const organizations = await findAllOrganizations.run(void 0, this.client)
    return organizations
  }
  public async create(
    organization: OrganizationCreationParams
  ): Promise<Organization> {
    const response = await createOrganization.run({ organization }, this.client)
    return response[0]
  }

  public async delete(id: number): Promise<Organization> {
    const response = await deleteOrganization.run(
      { organizationId: id },
      this.client
    )
    if (!response[0]) {
      throw new ApiError(
        'Not Found',
        404,
        `No organization with id: ${id} was found.`
      )
    }
    return response[0]
  }
}
