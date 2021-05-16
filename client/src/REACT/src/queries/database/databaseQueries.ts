import { gql } from "@apollo/client";

export const GET_USER_WITH_EMAIL = gql`
query getUserWithEmail ($email: String!) {
  getUserWithEmail (email: $email) {
    name
    id
    children {
      name
      birthDate
      parentId
      id
    }
  }
}
`;

export const CREATE_CHILD = gql`
  mutation CreateChild ($child: CreateChildInput!){
    addChild(child: $child) {
      name
      birthDate
      parentId
    }
  }
`;

export const DELETE_CHILD = gql`
  mutation DeleteChild($id: Int!){
      removeChild(id: $id) {
        name
        id
        birthDate
        createdAt
        parentId
      }
  }
`;

export const GET_ALL_USERS = gql`
query getUsers {
  getAllUsers{name}
}
`;
