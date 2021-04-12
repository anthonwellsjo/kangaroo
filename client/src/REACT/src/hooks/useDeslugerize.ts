import React from 'react';

const useDeslugerize = (resource: string): string => {
  return resource.toLowerCase().split('').map(l => {
    switch (l) {
      case "1": return "å";
      case "2": return "ä";
      case "3": return "ö";
      default: return l;
    }
  }).join('');
}

export default useDeslugerize;