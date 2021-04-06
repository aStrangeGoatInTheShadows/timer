let arryOfTimers = process.argv.splice(2, process.argv.length);

// arry is an array of numbers to multiply by 1000 to represent seconds
const timer = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > 0 && !isNaN(arry[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, arry[i] * 1000);
    }
  }
};

if (arryOfTimers) {
  timer(arryOfTimers);
}

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.