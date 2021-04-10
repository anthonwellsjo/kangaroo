import React from 'react';

const useCompositionColor = (color: CompositionColor) => {
  if (color == "orange") return "#D16A1D"
  if (color == "blue") return "#DFE7F2"
  if (color == "pink") return "#F0C7B1"
  if (color == "grey") return "#C4C4C4"
}

export default useCompositionColor;