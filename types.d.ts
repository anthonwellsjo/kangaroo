const enum PageName{
  home,
  business,
  project,
  contact
}

interface HTMLLinkButton extends HTMLButtonElement{
  pageName: PageName
}