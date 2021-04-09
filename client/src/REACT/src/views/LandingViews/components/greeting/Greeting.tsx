import React from 'react';
import CSS from 'csstype';

const h11: CSS.Properties = {
  fontSize: "3em",
  fontWeight: 100,
  marginBottom: "-45px"
}
const h12: CSS.Properties = {
  fontSize: "2.4em",
  fontWeight: 900,
  marginBottom: "-40px"
}

const Greeting: React.FC = () => {
  return (
    <div>
      <h1 style={h11}>Testa oss</h1>
      <h1 style={h12}>Bli medlem idag</h1>
      <p style={{fontSize: ".8em", color: "grey", marginTop: "50px", fontWeight:100}}>
        Uppdatera dig alltid om
        de bästa sätten att vara förälder genom att använda kangaroo.
      </p>
    </div>
  )
}

export default Greeting;