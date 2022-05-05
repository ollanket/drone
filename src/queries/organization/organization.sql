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