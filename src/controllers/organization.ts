import { Organization } from '../models/organization'
import { OrganizationsService } from '../services/organization'
import { Controller, Get, Path, Route } from 'tsoa'

@Route('organization')
export class OrganizationsController extends Controller {
  @Get()
  public async getOrganizations(): Promise<Array<Organization>> {
    return new OrganizationsService().findMany()
  }

  @Get('{organizationId}')
  public async getOrganization(
    @Path() organizationId: number
  ): Promise<Organization> {
    return new OrganizationsService().find(organizationId)
  }
}
