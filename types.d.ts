const enum PageName{
  main,
  business,
  project,
  contact
}

interface HTMLLinkButton extends HTMLButtonElement{
  pageName: PageName
}