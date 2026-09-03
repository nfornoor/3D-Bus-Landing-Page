import React, { useEffect, useRef } from 'react';
import { mountLetsScroll } from '../lib/scrub-engine';

export const LetsScrollWorld = ({ config }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Mount scrub engine and receive cleanup callback
    const cleanup = mountLetsScroll(containerRef.current, config);

    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, [config]);

  return (
    <div 
      ref={containerRef} 
      id="world" 
      className="relative w-full min-h-screen"
    />
  );
};
