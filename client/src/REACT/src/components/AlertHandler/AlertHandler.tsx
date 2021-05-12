import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring'
import CSS from 'csstype';

const AlertStyles: CSS.Properties = {
  
  height: "100px",
}


const Color = {
  red: "red",
  yellow: "yellow",
  green: "green"
}

interface alertProps {
  items: AlertItem[],
  setter: React.Dispatch<React.SetStateAction<AlertItem[]>>,
  color: string
}

const AlertHandler = ({ items, setter, color }: alertProps) => {
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateY(0)" },
    enter: { opacity: 1, transform: "translateY(-100px)" },
    leave: { opacity: 0, transform: "translateY(0)" },
    delay: 200,
    onRest: () => {
      setTimeout(
        () => { setter(prev => ([...prev.filter((p, i) => i != prev.filter.length - 1)])) }, 1000)
    },
  })

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setter([])
      }, 4000)
    }
  }, [items])

  return (
    <div style={{ display: 'flex', flexDirection:"column-reverse", position:"fixed", zIndex: 999, bottom:0, left:0, right:0 }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            ...AlertStyles,
            backgroundColor: item.color,
            opacity: opacity.to(y => y),
            transform: opacity
              .to(y => `translateY(${y + 10}px)`)
          }}>
          {item.text}
        </animated.div>
      ))}
    </div>
  )
}

export default AlertHandler;