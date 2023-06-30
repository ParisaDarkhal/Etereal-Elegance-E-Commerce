import { gql } from "@apollo/client";

export const USER_BY_USERNAME = gql`
  query userByUsername($username: String!, $password: String!) {
    userByUsername(username: $username, password: $password) {
      id
      first_name
    }
  }
`;
