import { gql } from "@apollo/client";

export const GET_USER_WITH_EMAIL = gql`
query getUserWithEmail ($email: String!) {
  getUserWithEmail (email: $email) {
    name
    children {
      name
      birthDate
    }
  }
}
`;
export const GET_ALL_USERS = gql`
query getUsers {
  getAllUsers{name}
}
`;
