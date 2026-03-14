import fs from 'fs'

export function writeJSON(path, obj) {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2), 'utf-8')
}
