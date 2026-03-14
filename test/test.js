import fs from 'fs'

import { runCrawler } from '../src/orchestrator.js'
import { createArtifact } from '../src/artifacts.js'
import { startServer } from './helpers/server.js'
import { INITIAL_LINK, RUN_DIR } from '../src/constants.js'

const server = await startServer()

const PORT = server.address().port

const BASE_URL = `http://localhost:${PORT}`

fs.mkdirSync(RUN_DIR, { recursive: true })

const data = await runCrawler(BASE_URL, INITIAL_LINK)

createArtifact(data)

server.close()
