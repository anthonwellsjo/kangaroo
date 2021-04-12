import React from 'react';

const useSlugerize = (resource: string): string => {
  return resource.toLowerCase().split('').map(l => {
    switch (l) {
      case "å": return "1";
      case "ä": return "2";
      case "ö": return "3";
      default: return l;
    }
  }).join('');
}

export default useSlugerize;