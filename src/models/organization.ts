/**
 * Organization objects hold information about an organization.
 * Organization id can be used to find organizations members and
 * the drones they are responsible for.
 */
export interface Organization {
  address: string
  id: number
  name: string
}
