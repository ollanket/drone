/** Types generated for queries found in "src/queries/organization/organization.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindAllOrganizations' parameters type */
export type IFindAllOrganizationsParams = void;

/** 'FindAllOrganizations' return type */
export interface IFindAllOrganizationsResult {
  address: string;
  id: number;
  name: string;
}

/** 'FindAllOrganizations' query type */
export interface IFindAllOrganizationsQuery {
  params: IFindAllOrganizationsParams;
  result: IFindAllOrganizationsResult;
}

const findAllOrganizationsIR: any = {"name":"FindAllOrganizations","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM organization","loc":{"a":33,"b":58,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM organization
 * ```
 */
export const findAllOrganizations = new PreparedQuery<IFindAllOrganizationsParams,IFindAllOrganizationsResult>(findAllOrganizationsIR);


/** 'FindOrganizationById' parameters type */
export interface IFindOrganizationByIdParams {
  organizationId: number | null | void;
}

/** 'FindOrganizationById' return type */
export interface IFindOrganizationByIdResult {
  address: string;
  id: number;
  name: string;
}

/** 'FindOrganizationById' query type */
export interface IFindOrganizationByIdQuery {
  params: IFindOrganizationByIdParams;
  result: IFindOrganizationByIdResult;
}

const findOrganizationByIdIR: any = {"name":"FindOrganizationById","params":[{"name":"organizationId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":134,"b":147,"line":5,"col":39}]}}],"usedParamSet":{"organizationId":true},"statement":{"body":"SELECT * FROM organization WHERE id = :organizationId","loc":{"a":95,"b":147,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM organization WHERE id = :organizationId
 * ```
 */
export const findOrganizationById = new PreparedQuery<IFindOrganizationByIdParams,IFindOrganizationByIdResult>(findOrganizationByIdIR);


/** 'CreateOrganization' parameters type */
export interface ICreateOrganizationParams {
  organization: {
    name: string | null | void,
    address: string | null | void
  };
}

/** 'CreateOrganization' return type */
export interface ICreateOrganizationResult {
  address: string;
  id: number;
  name: string;
}

/** 'CreateOrganization' query type */
export interface ICreateOrganizationQuery {
  params: ICreateOrganizationParams;
  result: ICreateOrganizationResult;
}

const createOrganizationIR: any = {"name":"CreateOrganization","params":[{"name":"organization","codeRefs":{"defined":{"a":190,"b":201,"line":9,"col":9},"used":[{"a":275,"b":286,"line":12,"col":8}]},"transform":{"type":"pick_tuple","keys":[{"name":"name","required":false},{"name":"address","required":false}]},"required":false}],"usedParamSet":{"organization":true},"statement":{"body":"INSERT INTO organization (name, address)\nVALUES :organization\nRETURNING id, name, address","loc":{"a":226,"b":314,"line":11,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO organization (name, address)
 * VALUES :organization
 * RETURNING id, name, address
 * ```
 */
export const createOrganization = new PreparedQuery<ICreateOrganizationParams,ICreateOrganizationResult>(createOrganizationIR);


