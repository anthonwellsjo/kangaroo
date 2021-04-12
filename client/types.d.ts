const enum PageName {
  main,
  business,
  project,
  contact
}

interface HTMLLinkButton extends HTMLButtonElement {
  pageName: PageName
}

type CompositionColor = "orange" | "blue" | "pink" | "grey" | "registerButton";

type StrokeStyle = "blue" | "pink" | "grey";

