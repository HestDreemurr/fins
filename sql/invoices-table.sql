CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE invoices (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  userID UUID NOT NULL,
  customerID UUID NOT NULL,
  amount FLOAT NOT NULL,
  createdOn DATE NOT NULL,
  paid BOOLEAN NOT NULL
);