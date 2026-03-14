import './loadEnv.js'

import fs from 'fs'

import { runCrawler } from './orchestrator.js'
import { createArtifact } from './artifacts.js'
import { BASE_URL, INITIAL_LINK, RUN_DIR } from './constants.js'

fs.mkdirSync(RUN_DIR, { recursive: true })

try {
  const data = await runCrawler(BASE_URL, INITIAL_LINK)

  createArtifact(data)
} catch (err) {
  console.log(err)
}
