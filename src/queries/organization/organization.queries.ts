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
  organizationId: number;
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

const findOrganizationByIdIR: any = {"name":"FindOrganizationById","params":[{"name":"organizationId","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":134,"b":148,"line":5,"col":39}]}}],"usedParamSet":{"organizationId":true},"statement":{"body":"SELECT * FROM organization WHERE id = :organizationId!","loc":{"a":95,"b":148,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM organization WHERE id = :organizationId!
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

const createOrganizationIR: any = {"name":"CreateOrganization","params":[{"name":"organization","codeRefs":{"defined":{"a":191,"b":202,"line":9,"col":9},"used":[{"a":276,"b":288,"line":12,"col":8}]},"transform":{"type":"pick_tuple","keys":[{"name":"name","required":false},{"name":"address","required":false}]},"required":true}],"usedParamSet":{"organization":true},"statement":{"body":"INSERT INTO organization (name, address)\nVALUES :organization!\nRETURNING id, name, address","loc":{"a":227,"b":316,"line":11,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO organization (name, address)
 * VALUES :organization!
 * RETURNING id, name, address
 * ```
 */
export const createOrganization = new PreparedQuery<ICreateOrganizationParams,ICreateOrganizationResult>(createOrganizationIR);


/** 'DeleteOrganization' parameters type */
export interface IDeleteOrganizationParams {
  organizationId: number;
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

const deleteOrganizationIR: any = {"name":"DeleteOrganization","params":[{"name":"organizationId","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":390,"b":404,"line":19,"col":12}]}}],"usedParamSet":{"organizationId":true},"statement":{"body":"DELETE FROM organization\nWHERE id = :organizationId!\nRETURNING id, name, address","loc":{"a":353,"b":432,"line":18,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM organization
 * WHERE id = :organizationId!
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

const updateOrganizationIR: any = {"name":"UpdateOrganization","params":[{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":512,"b":515,"line":26,"col":19},{"a":600,"b":603,"line":29,"col":6},{"a":630,"b":633,"line":29,"col":36}]}},{"name":"address","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":547,"b":553,"line":27,"col":22},{"a":666,"b":672,"line":30,"col":6},{"a":699,"b":705,"line":30,"col":39}]}},{"name":"organization_id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":577,"b":592,"line":28,"col":12}]}}],"usedParamSet":{"name":true,"address":true,"organization_id":true},"statement":{"body":"UPDATE organization SET\n  name = COALESCE(:name, name),\n  address = COALESCE(:address, address)\nWHERE id = :organization_id!\nAND (:name :: TEXT IS NOT NULL AND :name IS DISTINCT FROM name OR\n     :address :: TEXT IS NOT NULL AND :address IS DISTINCT FROM address)\nRETURNING *","loc":{"a":469,"b":743,"line":25,"col":0}}};

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


