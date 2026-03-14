import path from 'path'

const outputDir = process.env.OUTPUT_DIR ?? 'output'

const maxLinksPerPage = Number(process.env.MAX_LINKS_PER_PAGE ?? 5)

const maxCrawlPages = Number(process.env.MAX_CRAWL_PAGES ?? 50)

export const BASE_URL = 'https://en.wikipedia.org'

export const MAX_LINKS_PER_PAGE =
  Number.isInteger(maxLinksPerPage) && maxLinksPerPage > 0 ? maxLinksPerPage : 5

export const MAX_CRAWL_PAGES =
  Number.isInteger(maxCrawlPages) && maxCrawlPages > 0 ? maxCrawlPages : 50

export const INITIAL_LINK =
  process.argv[2] ?? process.env.INITIAL_LINK ?? '/wiki/Barack_Obama'

const runId = new Date()
  .toISOString()
  .replace(/\.\d{3}Z$/, '')
  .replace(/[:.]/g, '-')
  .replace('T', '_')

const runName = INITIAL_LINK.split('/').at(-1)

export const RUN_DIR = path.join(outputDir, `run-${runId}__${runName}`)

export const JSON_FILE = path.join(RUN_DIR, 'graph.json')
