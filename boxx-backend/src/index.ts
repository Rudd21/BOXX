import express from 'express';
import { schema } from './graphql/index.js';
import { createYoga } from 'graphql-yoga';
import { db } from './drizzle/index.js';

const app = express();
const PORT = 4000;

const yoga = createYoga({
    schema,
    graphqlEndpoint: '/graphql',
    context: () => ({
        db
    })
})

app.use(yoga.graphqlEndpoint, yoga);

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}/graphql`)
})