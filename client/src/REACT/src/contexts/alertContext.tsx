import React, { createContext, useState } from 'react';

let alerts = [];
let setAlerts;

const AlertContext = createContext([alerts, setAlerts])

const AlertProvider: React.FC = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  return (
    <AlertContext.Provider value={[alerts, setAlerts]}>
      {children}
    </AlertContext.Provider>
  )
};

export { AlertContext };
export { AlertProvider };

