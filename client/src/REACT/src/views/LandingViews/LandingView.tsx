import React from 'react';
import Rectangle from '../../components/Composition/Rectangle';
import CSS from 'csstype';
import useCompositionColor from '../../hooks/useCompositionColor';
import Greeting from './components/greeting/Greeting';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';

const greyStroke: CSS.Properties = {
  position: "relative",
  top: "-1px",
  width: "534px",
  height: "0px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  transform: "rotate(90deg)",
  transformOrigin: "left"
}
const pinkStroke: CSS.Properties = {
  position: "relative",
  top: "-1px",
  width: "334px",
  height: "0px",
  border: `1px solid ${useCompositionColor("pink")}`,
  transform: "rotate(90deg)",
  transformOrigin: "left"
}
const blueStroke: CSS.Properties = {
  position: "absolute",
  width: "334px",
  height: "0px",
  border: `1px solid ${useCompositionColor("blue")}`,
  transform: "rotate(90deg)",
  transformOrigin: "right",
  right: 0,
  bottom: "-2px"
}

const LandingView: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", display: "flex" }}>
      <div style={{ position: "relative", left: "5%", width: "35%", height: "100%" }}>
        <Centralizer>
          <div style={{ position: "absolute", top: "20%", width: "350px" }}>
            <Greeting />
          </div>
        </Centralizer>

      </div>
      <div style={{ position: "relative", left: "5%", width: "25%", height: "100%" }}>
        <div style={greyStroke} />
        <div style={{ position: "relative", top: "400px", left: "-5px" }}>
          <Rectangle color="grey" height="55px" width="5px" />
        </div>
      </div>
      <div style={{ position: "relative", left: "5%", width: "25%", height: "100%" }}>
        <div style={pinkStroke} />
        <div style={{ position: "relative", top: "150px", left: "-8px" }}>
          <Rectangle color="pink" height="55px" width="8px" />
        </div>
        <div style={blueStroke} />
        <div style={{ position: "absolute", bottom: "50px", right: "0" }}>
          <Rectangle color="blue" height="45px" width="6px" />
        </div>

      </div>
    </div>
  )
}

export default LandingView;