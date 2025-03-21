import "server-only"

import "dotenv/config"
import { neon } from "@neondatabase/serverless"

const token = process.env.NEONDB_TOKEN
const sql = neon(token)

export default sql