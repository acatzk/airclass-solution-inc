import gql from 'graphql-tag'

export const GET_STUDENT_SUBSCRIPTION = gql`
    subscription studentFullnameSubscription($firebase_id: String!) {
        students(where: {firebase_id: {_eq: $firebase_id}}) {
            id
            firstname
            lastname
            profile_url
        }
    }
`