interface PageContextData {
  showKangarooBackdrop: boolean,
  loginAlreadyRegisteredUser: boolean,
  databaseUser: firebase.User | null,
  showFocusOnRegisterBackdrop: boolean,
  refreshDashboardView: boolean
}

interface UserContextData {
  showNewChildModal: boolean,
  loggedInUser: databaseUser.Parent | null
}

