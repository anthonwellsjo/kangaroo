import React from 'react';
import CSS from 'csstype';
import useCompositionColor from '../../hooks/useCompositionColor';

interface props {
  height: string,
  width: string,
  color: CompositionColor
}

const Rectangle = ({ height, width, color }: props) => {

  const style: CSS.Properties = {
    height: height,
    width: width,
    backgroundColor: useCompositionColor(color)
  }

  return (
    <div style={style}></div>
  )
}

export default Rectangle;