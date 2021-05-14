declare module databaseUser {

  export interface Child {
    birthDate: string;
    name: string;
  }

  export interface Parent {
    children: [Child];
    email: string;
    name: string;
  }

  export interface GetUserWithEmailData {
    getUserWithEmail: Parent
  }

}