const enum PageName {
  main,
  business,
  project,
  contact
}

interface HTMLLinkButton extends HTMLButtonElement {
  pageName: PageName
}

type CompositionColor = "orange" | "blue" | "pink" | "grey" | "registerButton" | "yellow" | "red" | "green";

type StrokeStyle = "blue" | "pink" | "grey";


interface AlertItem {
  header: string,
  text: string,
  color: string
}
