import './loadEnv.js'

import fs from 'fs'

import { runCrawler } from './orchestrator.js'
import { createArtifact } from './artifacts.js'
import { BASE_URL, START_PATH, RUN_DIR } from './constants.js'

fs.mkdirSync(RUN_DIR, { recursive: true })

try {
  const data = await runCrawler(BASE_URL, START_PATH)

  createArtifact(data)
} catch (err) {
  console.log(err)
}
