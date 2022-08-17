const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')
const { authMiddleware } = require('./utils/auth')

const PORT = process.env.PORT || 3001
const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: authMiddleware,
  // These two lines below enable the playground when deployed to heroku. You can remove them if you don't want this functionality
  introspection: true,
  playground: true,
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({
    app,
    cors: {
      origin: ['https://studio.apollographql.com'],
      credentials: true,
    },
  })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      )
    })
  })
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers)
