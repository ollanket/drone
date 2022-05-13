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


/** 'DeleteOrganization' parameters type */
export interface IDeleteOrganizationParams {
  organizationId: number | null | void;
}

/** 'DeleteOrganization' return type */
export interface IDeleteOrganizationResult {
  address: string;
  id: number;
  name: string;
}

/** 'DeleteOrganization' query type */
export interface IDeleteOrganizationQuery {
  params: IDeleteOrganizationParams;
  result: IDeleteOrganizationResult;
}

const deleteOrganizationIR: any = {"name":"DeleteOrganization","params":[{"name":"organizationId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":388,"b":401,"line":19,"col":12}]}}],"usedParamSet":{"organizationId":true},"statement":{"body":"DELETE FROM organization\nWHERE id = :organizationId\nRETURNING id, name, address","loc":{"a":351,"b":429,"line":18,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM organization
 * WHERE id = :organizationId
 * RETURNING id, name, address
 * ```
 */
export const deleteOrganization = new PreparedQuery<IDeleteOrganizationParams,IDeleteOrganizationResult>(deleteOrganizationIR);


/** 'UpdateOrganization' parameters type */
export interface IUpdateOrganizationParams {
  address: string | null | void;
  name: string | null | void;
  organization_id: number;
}

/** 'UpdateOrganization' return type */
export interface IUpdateOrganizationResult {
  address: string;
  id: number;
  name: string;
}

/** 'UpdateOrganization' query type */
export interface IUpdateOrganizationQuery {
  params: IUpdateOrganizationParams;
  result: IUpdateOrganizationResult;
}

const updateOrganizationIR: any = {"name":"UpdateOrganization","params":[{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":509,"b":512,"line":26,"col":19},{"a":597,"b":600,"line":29,"col":6},{"a":627,"b":630,"line":29,"col":36}]}},{"name":"address","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":544,"b":550,"line":27,"col":22},{"a":663,"b":669,"line":30,"col":6},{"a":696,"b":702,"line":30,"col":39}]}},{"name":"organization_id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":574,"b":589,"line":28,"col":12}]}}],"usedParamSet":{"name":true,"address":true,"organization_id":true},"statement":{"body":"UPDATE organization SET\n  name = COALESCE(:name, name),\n  address = COALESCE(:address, address)\nWHERE id = :organization_id!\nAND (:name :: TEXT IS NOT NULL AND :name IS DISTINCT FROM name OR\n     :address :: TEXT IS NOT NULL AND :address IS DISTINCT FROM address)\nRETURNING *","loc":{"a":466,"b":740,"line":25,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE organization SET
 *   name = COALESCE(:name, name),
 *   address = COALESCE(:address, address)
 * WHERE id = :organization_id!
 * AND (:name :: TEXT IS NOT NULL AND :name IS DISTINCT FROM name OR
 *      :address :: TEXT IS NOT NULL AND :address IS DISTINCT FROM address)
 * RETURNING *
 * ```
 */
export const updateOrganization = new PreparedQuery<IUpdateOrganizationParams,IUpdateOrganizationResult>(updateOrganizationIR);


