import { Organization } from '../models/organization'
import {
  OrganizationCreationParams,
  OrganizationsService
} from '../services/organization'
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Response,
  Route,
  Tags
} from 'tsoa'
import {
  ApiErrorType,
  InternalError,
  ValidateErrorJSON
} from '../utils/ApiError'
import client from '../client'
import { IUpdateOrganizationParams } from '../queries/organization/organization.queries'

@Route('organization')
@Tags('Organization')
export class OrganizationsController extends Controller {
  /**
   * Retrieves all organizations in the database
   */
  @Response<InternalError>(500, 'Internal Server error')
  @Get()
  public async getOrganizations(): Promise<Array<Organization>> {
    return new OrganizationsService(client).findMany()
  }
  /**
   * Retrieves an organization by id
   * @param organizationId Id of the organization to retrieve
   */
  @Response<InternalError>(500, 'Internal Server error')
  @Response<ApiErrorType>(404, 'Not Found')
  @Get('{organizationId}')
  public async getOrganization(
    @Path() organizationId: number
  ): Promise<Organization> {
    const response = new OrganizationsService(client).find(organizationId)
    return response
  }

  /**
   * Creates a new organization
   * @param organization organization creation params
   */
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Response<InternalError>(500, 'Internal Server error')
  @Post()
  public async createOrganization(
    @Body() organization: OrganizationCreationParams
  ): Promise<Organization> {
    this.setStatus(201)
    return new OrganizationsService(client).create(organization)
  }

  /**
   * Deletes an organization with id
   * @param organizationId Id of the organization to delete
   */
  @Response<InternalError>(500, 'Internal Server error')
  @Response<ApiErrorType>(404, 'Not Found')
  @Delete('{organizationId}')
  public async deleteOrganization(
    @Path() organizationId: number
  ): Promise<Organization> {
    return new OrganizationsService(client).delete(organizationId)
  }

  /**
   * Updates an organization with id
   * @param organizationId Id of the organization to update
   * @param organization organization update params
   */
  @Response<InternalError>(500, 'Internal Server error')
  @Response<ApiErrorType>(404, 'Not Found')
  @Patch('{organizationId}')
  public async updateOrganization(
    @Path() organizationId: number,
    @Body()
    {
      name = null,
      address = null
    }: Partial<Omit<IUpdateOrganizationParams, 'organization_id'>>
  ): Promise<Organization> {
    return new OrganizationsService(client).update({
      organization_id: organizationId,
      name,
      address
    })
  }
}
