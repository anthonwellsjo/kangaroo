import React from 'react';
import CSS from 'csstype';
import useGetStrokeStyles from '../../hooks/useGetStrokeStyles';
import Rectangle from './Rectangle';


interface props {
  style: StrokeStyle
}



const ColumnStroke = ({ style }: props) => {
  let styling: CSS.Properties = useGetStrokeStyles(style);

  return (
    <>
      <div style={styling} />
      {style == "blue" && <div style={{ position: "absolute", bottom: "50px", right: "0" }}><Rectangle color="blue" height="45px" width="6px" />
      </div>}
      {style == "pink" && <div style={{ position: "relative", top: "150px", left: "-8px" }}>
        <Rectangle color="pink" height="55px" width="8px" />
      </div>}
      {style == "grey" && <div style={{ position: "absolute", top: "430px"}}>
        <Rectangle color="grey" height="55px" width="4px" />
      </div>}
    </>
  )
}

export default ColumnStroke;