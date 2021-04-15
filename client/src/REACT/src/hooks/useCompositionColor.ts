import React from 'react';

const useCompositionColor = (color: CompositionColor, opacity: string = "") => {

  if (color == "orange") return `#D16A1D${opacity}`
  if (color == "blue") return `#DFE7F2${opacity}`
  if (color == "pink") return `#F0C7B1${opacity}`
  if (color == "grey") return `#C4C4C4${opacity}`
  if (color == "registerButton") return `#81B29A${opacity}`
}

export default useCompositionColor;