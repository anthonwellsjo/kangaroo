import React from 'react';
const style = {
    backgroundColor: "white",
    height: "85%",
    width: "1200px"
};
const Frame = ({ children }) => {
    return (React.createElement("div", { style: style }, children));
};
export default Frame;
