import fs from 'fs'
import dotenv from 'dotenv'

const envPath = fs.existsSync('.env') ? '.env' : '.env.example'

dotenv.config({ path: envPath, quiet: true })
