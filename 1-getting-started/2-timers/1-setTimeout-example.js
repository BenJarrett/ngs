setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);

// Uses setTimeout to delay the printing of this greeting message by 4 seconds //
// The first arg to setTimeout is the function whose execution will be delayed. Note that this first arg to setTimeout is just a function reference. //
// It does not have to be an inline function like this. See Ex. 2 to see the difference //
// The second arg to setTimeout is the delay in milliseconds. This is why we are multiplying 4 by 1,000 to make it into 4 seconds //
// If we execute this script normally with the node command, node will pause for 4 seconds and then print the greeting and exit after that //
