import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

// default response
app.get('/', (req, res) => {
    res.send("GraphQL is amazing");
});

const root = {
    friend: () => {
        return {
            "id": 554546464,
            "firstName": "Julian",
            "lastName": "Pickard",
            "gender": "Male",
            "email": "me@me.com"
        }
    }
};

// show the graphiql query environmnt
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log("Running on server port localhost:8080/graphql"));
