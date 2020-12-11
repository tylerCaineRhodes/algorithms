function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
  const flattenedCalendar = flattenCalendar(mergedCalendar);
  return getMatchingAvailabilities(flattenedCalendar, meetingDuration);
}

function updateCalendar(calendar, dailyBounds) {
  const updatedCalendar = [
    ['0:00', dailyBounds[0]],
    ...calendar.slice(),
    [dailyBounds[1], '23:59'],
  ];
  return updatedCalendar.map((meeting) =>
    meeting.map((time) => timeToMinutes(time))
  );
}

function timeToMinutes(time) {
  const [hours, mins] = time.split(':').map((val) => parseInt(val));
  return hours * 60 + mins;
}

function mergeCalendars(calendar1, calendar2) {
  const merged = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < calendar1.length && p2 < calendar2.length) {
    const meeting1 = calendar1[p1];
    const meeting2 = calendar2[p2];
    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1);
      p1++;
    } else {
      merged.push(meeting2);
      p2++;
    }
  }
  merged.push(...calendar1.slice(p1));
  merged.push(...calendar2.slice(p2));
  return merged;
}

function flattenCalendar(calendar) {
  const flattened = [calendar[0].slice()];
  for (let i = 1; i < calendar.length; i++) {
    const currentMeeting = calendar[i];
    const previousMeeting = flattened[flattened.length - 1];
    const [currentStart, currentEnd] = currentMeeting;
    const [previousStart, previousEnd] = previousMeeting;
    if (previousEnd >= currentStart) {
      const newPreviousMeeting = [
        previousStart,
        Math.max(previousEnd, currentEnd),
      ];
      flattened[flattened.length - 1] = newPreviousMeeting;
    } else {
      flattened.push(currentMeeting.slice());
    }
  }
  return flattened;
}

function getMatchingAvailabilities(calendar, meetingDuration) {
  const matchingAvailabilities = [];
  for (let i = 1; i < calendar.length; i++) {
    const start = calendar[i - 1][1];
    const end = calendar[i][0];
    const availabilityDuration = end - start;
    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end]);
    }
  }
  return matchingAvailabilities.map((meeting) =>
    meeting.map((time) => minutesToTime(time))
  );
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const hoursString = hours.toString();
  const minutesString = mins < 10 ? '0' + mins.toString() : mins.toString();
  return hoursString + ':' + minutesString;
}
