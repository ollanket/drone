/** Types generated for queries found in "src/queries/drone/drone.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindDroneById' parameters type */
export interface IFindDroneByIdParams {
  droneId: number | null | void;
}

/** 'FindDroneById' return type */
export interface IFindDroneByIdResult {
  brand: string;
  id: number;
  info: string | null;
  maintainer_org: number;
  model: string;
  name: string;
  user_id: number | null;
}

/** 'FindDroneById' query type */
export interface IFindDroneByIdQuery {
  params: IFindDroneByIdParams;
  result: IFindDroneByIdResult;
}

const findDroneByIdIR: any = {"name":"FindDroneById","params":[{"name":"droneId","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":58,"b":64,"line":2,"col":32}]}}],"usedParamSet":{"droneId":true},"statement":{"body":"SELECT * FROM drone WHERE id = :droneId","loc":{"a":26,"b":64,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM drone WHERE id = :droneId
 * ```
 */
export const findDroneById = new PreparedQuery<IFindDroneByIdParams,IFindDroneByIdResult>(findDroneByIdIR);


/** 'FindAllDrones' parameters type */
export type IFindAllDronesParams = void;

/** 'FindAllDrones' return type */
export interface IFindAllDronesResult {
  brand: string;
  id: number;
  info: string | null;
  maintainer_org: number;
  model: string;
  name: string;
  user_id: number | null;
}

/** 'FindAllDrones' query type */
export interface IFindAllDronesQuery {
  params: IFindAllDronesParams;
  result: IFindAllDronesResult;
}

const findAllDronesIR: any = {"name":"FindAllDrones","params":[],"usedParamSet":{},"statement":{"body":"SELECT * FROM drone","loc":{"a":94,"b":112,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM drone
 * ```
 */
export const findAllDrones = new PreparedQuery<IFindAllDronesParams,IFindAllDronesResult>(findAllDronesIR);


