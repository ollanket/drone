import { Organization } from '../models/organization'
import {
  OrganizationCreationParams,
  OrganizationsService
} from '../services/organization'
import { Body, Controller, Get, Path, Post, Response, Route } from 'tsoa'
import { ApiErrorType, ValidateErrorJSON } from '../utils/ApiError'

@Route('organization')
export class OrganizationsController extends Controller {
  /**
   * Retrieves all organizations in the database
   */
  @Response<ApiErrorType>(500, 'Internal Server error')
  @Get()
  public async getOrganizations(): Promise<Array<Organization>> {
    return new OrganizationsService().findMany()
  }
  /**
   * Retrieves an organization by id
   * @param organizationId Id of the organization to retrieve
   */
  @Response<ApiErrorType>(500, 'Internal Server error')
  @Response<ApiErrorType>(404, 'Not Found')
  @Get('{organizationId}')
  public async getOrganization(
    @Path() organizationId: number
  ): Promise<Organization> {
    const response = new OrganizationsService().find(organizationId)
    return response
  }

  /**
   * Creates a new organization
   * @param organization organization creation params
   */
  @Response<ValidateErrorJSON>(422, 'Validation Failed')
  @Response<ApiErrorType>(500, 'Internal Server error')
  @Post()
  public async createOrganization(
    @Body() organization: OrganizationCreationParams
  ): Promise<Organization> {
    this.setStatus(201)
    return new OrganizationsService().create(organization)
  }
}
