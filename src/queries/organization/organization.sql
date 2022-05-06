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
  @param organization -> (name, address)
*/
UPDATE organization
SET (name, address) = :organization
WHERE id = :organization_id
RETURNING *;