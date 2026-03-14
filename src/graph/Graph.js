class Graph {
  constructor(adjacencyList = {}) {
    this.adjacencyList = adjacencyList
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }

    return this
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
  }

  attachVertices(vertex, adjacentVertices) {
    this.addVertex(vertex)

    for (const adjacentVertex of adjacentVertices) {
      this.addVertex(adjacentVertex)
      this.addEdge(vertex, adjacentVertex)
    }
  }

  async bfsIterative(startVertex, pullVertices) {
    const queue = []

    const visited = {}

    const path = []

    queue.push(startVertex)

    visited[startVertex] = true

    while (queue.length > 0) {
      const vertex = queue.shift()

      path.push(vertex)

      await pullVertices(vertex)

      const adjacentVertices = this.adjacencyList[vertex]

      for (const adjacentVertex of adjacentVertices) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true
          queue.push(adjacentVertex)
        }
      }
    }

    return path
  }
}

export default Graph
