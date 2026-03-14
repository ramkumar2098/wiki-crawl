import { load } from 'cheerio'

import { isValidLink } from './linkFilters.js'
import { MAX_LINKS_PER_PAGE } from './constants.js'

export async function crawlPage(baseURL, path) {
  const res = await fetch(baseURL + path)

  const html = await res.text()

  const $ = load(html)

  const links = []

  $('a').each((i, elem) => {
    const href = $(elem).attr('href')

    if (
      links.length < MAX_LINKS_PER_PAGE &&
      !links.includes(href) &&
      path != href &&
      isValidLink(href)
    ) {
      links.push(href)
    }
  })

  return links
}
