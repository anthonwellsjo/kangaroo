import React, { useEffect, useState } from 'react';

interface props {
  show: boolean,
  close: () => void
}

const UPPGIFTmodal = ({ show, close }: props) => {
  const [valueToSave, setValueToSave] = useState("");
  const [localValue, setLocalValue] = useState("");
  const [lastSave, setLastSave] = useState("");

  const saveToLocalStorageEventHandler = () => {
    localStorage.setItem("nyckel", valueToSave);
    setLastSave(Date().toString());
    console.log(Date().toString());
  }

  useEffect(() => {
    const item = localStorage.getItem("nyckel");
    if (item) setLocalValue(item);
  }, [lastSave])


  if (!show) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "80%",
      height: "80%",
      background: "green",
      zIndex: 10
    }}>
      <h1>Den här modal:en startas av en flagga som aktiveras i useEffect (lifecycle-hook)
        i LandingView-komponenten</h1>
      <form>
        <input type="text" placeholder="value" onChange={(e) => setValueToSave(e.target.value)} />
        <p>{valueToSave}</p>
      </form>
      <button onClick={saveToLocalStorageEventHandler}>Spara i localstorage</button>



      <h2>Texten nedan visar vad du redan har sparat i localstorage</h2>
      <p>{localValue}</p>

      <button onClick={close}>Stäng av modal</button>
    </div>
  )
}

export default UPPGIFTmodal;