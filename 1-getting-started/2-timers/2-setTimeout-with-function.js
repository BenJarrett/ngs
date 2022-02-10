const func = () => {
  console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);

// This code does the same job as the inline function in ex 1 //
// The difference is that is used a functoin defined before setTimeout //
// Note that if the function we pass to setTimeout receives arg like For: func(arg1, arg2, arg3, ...), then we can use the remaining args in setTimeout to pass these arguments to the delayed function once it's executed with setTimeout //

// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)
// See ex. 3 for this //
