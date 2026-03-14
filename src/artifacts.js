import fs from 'fs'
import path from 'path'

import { JSON_FILE, RUN_DIR } from './constants.js'
import { writeJSON } from './persistence.js'

export function createArtifact(data) {
  writeJSON(JSON_FILE, data)

  fs.copyFileSync('public/visualize.html', path.join(RUN_DIR, 'index.html'))

  console.log('artifact created at', RUN_DIR)
}
