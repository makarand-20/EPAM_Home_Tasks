function createFunctions(n) {
    const callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(() => i);
    }
    
    return callbacks;
  }