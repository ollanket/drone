-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.drone
(
    id serial NOT NULL,
    name character varying(200) NOT NULL,
    brand character varying(200) NOT NULL,
    model character varying(200) NOT NULL,
    info character varying(2000),
    user_id integer,
    maintainer_org integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.photo
(
    id serial NOT NULL,
    analysis character varying(2000),
    location point NOT NULL DEFAULT point(61,24),
    "timestamp" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    drone_id integer NOT NULL,
    user_id integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id serial NOT NULL,
    name character varying(250) NOT NULL,
    password character varying(60) NOT NULL,
    username character varying(250) NOT NULL,
    organization_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT user_username_key UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS public.organization
(
    id serial NOT NULL,
    name character varying(200) NOT NULL,
    address character varying(1000) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT organization_name_key UNIQUE (name)
);

ALTER TABLE IF EXISTS public.drone
    ADD CONSTRAINT user_drone_fkey FOREIGN KEY (user_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_user_drone_fkey
    ON public.drone(user_id);


ALTER TABLE IF EXISTS public.drone
    ADD CONSTRAINT organization_drone_fkey FOREIGN KEY (maintainer_org)
    REFERENCES public.organization (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_organization_drone_fkey
    ON public.drone(maintainer_org);


ALTER TABLE IF EXISTS public.photo
    ADD CONSTRAINT drone_photo_fkey FOREIGN KEY (drone_id)
    REFERENCES public.drone (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_drone_photo_fkey
    ON public.photo(drone_id);


ALTER TABLE IF EXISTS public.photo
    ADD FOREIGN KEY (user_id)
    REFERENCES public."user" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."user"
    ADD CONSTRAINT fk_organization_user FOREIGN KEY (organization_id)
    REFERENCES public.organization (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS fki_fk_organization_user
    ON public."user"(organization_id);

END;