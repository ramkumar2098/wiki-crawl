import { crawlPage } from './crawler.js'
import Graph from './graph/Graph.js'
import { createArtifact } from './artifacts.js'
import { MAX_CRAWL_PAGES } from './constants.js'

export async function runCrawler(baseURL, startPath) {
  const graph = new Graph()

  process.once('SIGINT', () => {
    createArtifact(graph.adjacencyList)
    process.exit(0)
  })

  let crawedPages = 0

  try {
    async function crawl(path) {
      if (++crawedPages > MAX_CRAWL_PAGES) throw null
      console.log(crawedPages, path)

      const links = await crawlPage(baseURL, path)

      graph.attachVertices(path, links)
    }

    await graph.bfsIterative(startPath, crawl)
  } catch (err) {
    err && console.log(err)
  }

  return graph.adjacencyList
}
