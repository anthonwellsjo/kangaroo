declare module databaseUser {

  export interface Child {
    birthDate: string;
    name: string;
    id: string;
  }

  export interface AddChildData {
    addChild: {
      birthDate: string;
      name: string;
    }
  }

  export interface CreateChildInput {
    birthDate: string;
    name: string;
    parentId: number;
  }

  export interface Parent {
    children: [Child];
    email: string;
    name: string;
    id: string;
  }

  export interface GetUserWithEmailData {
    getUserWithEmail: Parent
  }

}