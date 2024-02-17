const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Student {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }
    type Query {
        hello: String
        students: [Student]
    }
    type Mutation {
        createStudent(firstName: String!, lastName: String!, email: String!): Student
        createNewStudent(input: StudentInput): Student

    }

    input StudentInput {
        firstName: String!
        lastName: String!
        email: String!
    }

    fragment StudentFragment on Student {
        firstName
        lastName
        email
    }
`;
module.exports = typeDefs;