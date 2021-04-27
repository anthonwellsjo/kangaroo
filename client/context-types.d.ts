interface PageContextData {
  showKangarooBackdrop: boolean,
  loginAlreadyRegisteredUser: boolean,
  user: firebase.User | null
}

interface UserContextData {
  showNewChildModal: boolean
}