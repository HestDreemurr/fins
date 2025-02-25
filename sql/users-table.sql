CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT(255) NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)