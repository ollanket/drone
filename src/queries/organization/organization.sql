/* @name FindAllOrganizations */
SELECT * FROM organization;

/* @name FindOrganizationById */
SELECT * FROM organization WHERE id = :organizationId;

/*
  @name CreateOrganization
  @param organization -> (name, address)
 */
INSERT INTO organization (name, address)
VALUES :organization
RETURNING id, name, address;

/*
  @name DeleteOrganization
*/
DELETE FROM organization
WHERE id = :organizationId
RETURNING id, name, address;

/*
  @name UpdateOrganization
*/
UPDATE organization SET
  name = COALESCE(:name, name),
  address = COALESCE(:address, address)
WHERE id = :organization_id!
AND (:name :: TEXT IS NOT NULL AND :name IS DISTINCT FROM name OR
     :address :: TEXT IS NOT NULL AND :address IS DISTINCT FROM address)
RETURNING *;