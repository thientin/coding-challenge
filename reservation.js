

export default function reservation(arrivals, departures, numOfRooms) {
  for (let i = 0 ; i < arrivals.length - 1; i++) {
    numOfRooms -= 1;
    if (departures[i] <= arrivals[i+1]) {
      numOfRooms += 1
    }
    if(numOfRooms < 0) {
      return false
    }
  }
  return true
}
