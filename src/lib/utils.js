const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args));

const pipe = (...fns) => fns.reduce(_pipe);

export { partial, pipe };
