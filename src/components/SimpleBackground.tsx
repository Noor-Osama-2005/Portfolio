import React from 'react';

export function SimpleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Simple animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 via-blue-100/20 to-indigo-100/30 dark:from-violet-900/20 dark:via-blue-900/10 dark:to-indigo-900/20 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-400/30 rounded-full animate-bounce" 
           style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce" 
           style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-indigo-400/35 rounded-full animate-bounce" 
           style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce" 
           style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
    </div>
  );
}