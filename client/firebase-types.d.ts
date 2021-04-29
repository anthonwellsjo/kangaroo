declare module firebaseUser {

  export interface Child {
      birthDate: string;
      name: string;
  }

  export interface Parent {
      children: Child[];
      email: string;
      name: string;
  }

}