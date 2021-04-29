import React, { useContext } from 'react';
import CSS from 'csstype';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import { PageContext } from '../../../../contexts/pageContext';

const h11: CSS.Properties = {
  fontSize: "3.5em",
  fontWeight: 100,
  marginBottom: "-45px"
}
const h12: CSS.Properties = {
  fontSize: "2.4em",
  fontWeight: 900,
  marginBottom: "-40px"
}

const p: CSS.Properties = {
  fontSize: ".9em",
  color: "grey",
  marginTop: "50px",
  fontWeight: 100
}

const Greeting: React.FC = () => {

  const [page, setPage] = useContext(PageContext);
  return (
    <div>
      <h1 style={h11}>Allting</h1>
      <h1 style={h12}>på en plattform</h1>
      <p style={p}>
        Bli en bättre förälder tillsammans med oss på <span
          onClick={() => setPage(prev => ({ ...prev, showKangarooBackdrop: true }))}
          className="link"
          style={{
            ...p,
            fontWeight: 700,
            color: useCompositionColor("orange"),
            cursor: "pointer",
            position:"relative",
            zIndex: 1
          }}>
          kangaroo</span>. Prova gratis i 30 dagar.
      </p>
    </div>
  )
}

export default Greeting;