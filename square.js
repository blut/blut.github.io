let square;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('square.wasm')
  .then(instance => {
    square = instance.exports._Z7squareri;
    console.log('Finished compiling! Ready when you are...');
  });
