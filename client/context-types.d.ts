interface PageContextData {
  showKangarooBackdrop: boolean,
  loginAlreadyRegisteredUser: boolean,
  databaseUser: firebase.User | null,
  showFocusOnRegisterBackdrop: boolean,
  refreshDashboardView: boolean,
  showArticleModal: boolean,
  currentArticle: Article | undefined
}

interface UserContextData {
  showNewChildModal: boolean,
  loggedInUser: databaseUser.Parent | null
}

