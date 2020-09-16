import gql from 'graphql-tag'

export const GET_STUDENT_QUERY = gql`
    query studentFullnameQuery($firebase_id: String!) {
        students(where: {firebase_id: {_eq: $firebase_id}}) {
            id
            firstname
            lastname
            profile_url
        }
    }
`