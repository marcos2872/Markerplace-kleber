 
DROP database IF EXISTS EcommerceKleber ;
CREATE database IF NOT EXISTS EcommerceKleber;

CREATE TABLE IF NOT EXISTS EcommerceKleber.users (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  number VARCHAR(20) NOT NULL,
  password VARCHAR(100) NOT NULL)
ENGINE = InnoDB;

 INSERT INTO EcommerceKleber.users (id, name, email. number, password)
  VALUES
   ('de2d41f3-3fb2-4370-aa4d-fb4ccbb8a8e9', 'marcos souza', 'njsu5@hotmail.com', '(31) 9 89683477', '$2b$10$20QdZIeLgZJLGyL0yQ57DOYYENXsjAP4rP2/T9DFIqNTladUJZum.');
