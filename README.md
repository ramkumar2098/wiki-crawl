# Wiki Crawl

Crawl Wikipedia with BFS graph traversal and visualize.

## Requirements

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Start Crawling

Use the default start page from `.env`:

```bash
npm run crawl
```

Use a specific start page:

```bash
npm run crawl /wiki/Barack_Obama
```

Stop early anytime with `Ctrl+C`. A partial artifact is still written.

## Configuration

Set values in `.env` (or copy from `.env.example`):

- `OUTPUT_DIR` (default: `output`)
- `MAX_LINKS_PER_PAGE` (default: `5`)
- `MAX_CRAWL_PAGES` (default: `50`)
- `START_PATH` (default: `/wiki/Barack_Obama`)

CLI start-link argument (`npm run crawl <path>`) overrides `START_PATH`.

## Output

Each crawl creates a run folder:

```text
output/run-<timestamp>__<start-page>/
```

Inside each run folder:

- `graph.json` (adjacency list)
- `index.html` (visualizer)

## Visualize Graph

Serve a specific run folder:

```bash
npm run preview output/run-<timestamp>__<start-page>
```

Then open the local URL printed by `serve` (typically `http://localhost:3000`).

## Test Crawl

```bash
npm test
```

This starts a temporary local fixture server (`test/fixtures`), runs the crawler, and writes an
artifact to `output/`.

## Credits

Frontend vibes by Claude: https://claude.ai/
