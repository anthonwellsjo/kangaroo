interface PageContextData {
  showKangarooBackdrop: boolean,
  loginAlreadyRegisteredUser: boolean,
  user: firebase.User | null,
  showFocusOnRegisterBackdrop: boolean,
  refreshDashboardView: boolean
}

interface UserContextData {
  showNewChildModal: boolean
}