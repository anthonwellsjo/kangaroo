import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring'
import CSS from 'csstype';

const AlertStyles: CSS.Properties = {
  width: "400px",
  height: "130px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "1px 1px 15px grey",
  margin: "15px"
}

/*
Alert handler är intrument för att kommunicera viktiga meddelanden till användaren. Detta
görs med notiser som animeras på skärmen med hjälp av reactSpring. 

För att använda Alerthandler globalt krävs att komponenterna som vill använda sig av tjänsten 
wrappas med AlertProvider. Alert handler stödjer för tillfället bara function components.

AlertHandler tar följande props:
  items: AlertItem[],
  setter: React.Dispatch<React.SetStateAction<AlertItem[]>>,
  messageDelayMs: number

När tillståndet i "items" förändras så animeras dessa automatiskt på skärmen. Det
är viktigt att när man uppdaterar listan att inte ta bort eller ändra tillståndet i
andra AlertItem-objekt som ligger i listan. På så sätt lägger sig alla alerts i kö, 
och animeras efter förhållandet till andra element i listan.

Detta paket är beroende av react-spring för animeringarna och vissa event.
*/


interface alertProps {
  items: AlertItem[],
  setter: React.Dispatch<React.SetStateAction<AlertItem[]>>,
  messageDelayMs: number
}

const AlertHandler = ({ items, setter, messageDelayMs }: alertProps) => {
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateY(-100px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(100px)" },
    delay: 200,
    onRest: () => {
      setTimeout(
        () => { setter(prev => ([...prev.filter((p, i) => i != prev.filter.length - 1)])) }, messageDelayMs)
    },
  })


  return (
    <div style={{ display: 'flex', flexDirection: "column-reverse", alignItems: "center", position: "fixed", zIndex: 999, bottom: 0, left: 0, right: 0 }}>
      {transitions(({ opacity, transform }, item) => (
        <animated.div
          style={{
            ...AlertStyles,
            backgroundColor: item.color,
            opacity: opacity.to(y => y),
            transform: transform.to(z => z)
          }}>
          <div style={{ width: "100%", height: "30px", backgroundColor: item.color, borderRadius: "0 15px" }}>
            <p style={{ textAlign: "center", fontFamily: "Martel", fontWeight: 800, fontSize: "1.8em", marginTop: "2px" }}>{item.header}</p>
          </div>
          <div style={{ width: "100%", height: "100px", display: "flex", justifyContent: "center" }}>
            <p style={{ margin: "25px 10px 0 10px", textAlign: "justify", fontFamily: "Martel", fontSize: ".9em", lineHeight: "1.4em" }}>{item.text}</p>
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default AlertHandler;