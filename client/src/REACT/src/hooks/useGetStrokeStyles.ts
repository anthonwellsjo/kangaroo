import React from 'react';
import CSS from 'csstype';
import useCompositionColor from './useCompositionColor';


const useGetStrokeStyles = (style: StrokeStyle) => {

  let styling: CSS.Properties = {}

  switch (style) {
    case "blue": {
      styling = {
        position: "absolute",
        width: "334px",
        height: "0px",
        border: `1px solid ${useCompositionColor("blue")}`,
        transform: "rotate(90deg)",
        transformOrigin: "right",
        right: 0,
        bottom: "-2px"
      }
      break;
    }
    case "grey": {
      styling = {
        position: "fixed",
        top: "-1px",
        width: "534px",
        height: "0px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        transform: "rotate(90deg)",
        transformOrigin: "left"
      }
      break;
    }
    case "pink": {
      styling = {
        position: "relative",
        top: "-1px",
        width: "334px",
        height: "0px",
        border: `1px solid ${useCompositionColor("pink")}`,
        transform: "rotate(90deg)",
        transformOrigin: "left"
      }
      break;
    }
  }

  return styling;
}

export default useGetStrokeStyles;