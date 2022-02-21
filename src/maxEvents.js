function maxEvents(arrival, duration) {
  const eventTimes = [];
  const maxEvents = [];
  //O(n)
  for (let i = 0; i < arrival.length; i++) {
    const endingTime = arrival[i] + duration[i];
    const startTime = arrival[i];
    eventTimes.push({ start: startTime, end: endingTime });
  }
  //O(n)log(n)
  eventTimes.sort((a, b) => a.end - b.end);
  maxEvents.push(eventTimes[0]);

  let currentMeetingEndTime = [eventTimes[0].end];
  //O(n)
  for (let time of eventTimes) {
    if (currentMeetingEndTime <= time.start) {
      maxEvents.push(time);
      currentMeetingEndTime = time.end;
    }
  }
  return maxEvents.length;
}
