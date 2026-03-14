function isValidLink(link) {
  return (
    link &&
    !link.startsWith('#') &&
    !link.startsWith('http://') &&
    !link.startsWith('https://') &&
    !link.startsWith('//') &&
    !link.startsWith('/w/index.php') &&
    !link.startsWith('/wiki/File:') &&
    !link.startsWith('/wiki/Category:') &&
    !link.startsWith('/wiki/Wikipedia:') &&
    !link.startsWith('/wiki/Special:') &&
    !link.startsWith('/wiki/Portal:') &&
    !link.startsWith('/wiki/Help:') &&
    !link.startsWith('/wiki/Talk:') &&
    !link.startsWith('/wiki/Template:') &&
    !link.startsWith('/wiki/Template_talk:') &&
    !link.endsWith('(disambiguation)') &&
    !link.endsWith('(identifier)') &&
    link != '/wiki/Main_Page' &&
    link != '/' &&
    !link.includes('#')
  )
}

export { isValidLink }
