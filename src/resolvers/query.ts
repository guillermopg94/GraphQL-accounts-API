import { database } from './../data/data.store';
import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query:{
        persons(): any{
            return database.person;
        },
        accounts(): any{
            return database.accounts;
        },
        operations(): any{
            return database.operations;
        },
        promos(): any{
            return database.promos;
        },
    }
}

export default query;