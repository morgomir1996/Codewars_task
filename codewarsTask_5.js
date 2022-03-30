//   https://www.codewars.com/kata/541103f0a0e736c8e40011d5/train/javascript


function off(n) {
  let switchers = [];

  for (i = 0; i < n; i++) {
    switchers.push(1);
  }

  for (i = 0; i < n; i++) {
    if (i === 0) {
      for (j = 0; j < n; j++) {
        let switchNum = switchers[j];
        if (switchers[j] === 1) {
          switchers[j] = 0;
        } else {
          switchers[j] = 1;
        }
      }
    } else {
      for (j = i; j < n; j += i + 1) {
        let switchNum = switchers[j];
        if (switchers[j] === 1) {
          switchers[j] = 0;
        } else {
          switchers[j] = 1;
        }
      }
    }
  }

  const numOfSwitch = [];
  for (i = 0; i < n; i++) {
    if (switchers[i] === 0) {
      numOfSwitch.push(i + 1);
    }
  }

  return numOfSwitch;
}
