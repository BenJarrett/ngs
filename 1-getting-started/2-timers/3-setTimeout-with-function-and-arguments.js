const rocks = who => {
  console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Pluralsight');
// The rocks func, which is delayed by 2 seconds, accepts a who argument, and out setTimeout call relays the value of 'Pluralsight' as the who arg
//
// Thise code will log 'Pluralsight rocks' after 2 seconds //