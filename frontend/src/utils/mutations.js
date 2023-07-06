import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($input: UserInput) {
    addUser(input: $input) {
      id
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation loginMutation($username: String!, $password: String!) {
    loginMutation(username: $username, password: $password) {
      id
      first_name
      last_name
      username
    }
  }
`;
