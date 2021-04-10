import React from 'react';
import Rectangle from '../../components/Composition/Rectangle';
import CSS from 'csstype';
import useCompositionColor from '../../hooks/useCompositionColor';
import Greeting from './components/greeting/Greeting';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ColumnStroke from '../../components/Composition/ColumnStroke';

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
    <ViewLayoutWrapper>
      <ViewColumn widthInPercent={35}>
        <Centralizer>
          <div style={{ position: "absolute", top: "60px", width: "350px" }}>
            <Greeting />
            <div style={{ marginTop: "80px" }}>
              <img src="https://picsum.photos/320/250" alt="temp photo" />
            </div>
          </div>
        </Centralizer>
      </ViewColumn>
      <ViewColumn widthInPercent={25}>
        <ColumnStroke style="grey" />

      </ViewColumn>
      <ViewColumn widthInPercent={25}>
        <ColumnStroke style="pink" />

        <ColumnStroke style="blue" />
      </ViewColumn>
    </ViewLayoutWrapper>
  )
}

export default LandingView;