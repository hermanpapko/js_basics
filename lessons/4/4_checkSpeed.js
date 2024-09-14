function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  let points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (speed <= speedLimit || points === 0) {
    return "Ok";
  } else if (points >= 12) {
    return "License suspended";
  } else {
    return `Points:  ${points}`;
  }
}
console.log(checkSpeed(72));
