const mergeRanges = (meetings) => {
  //make copy of meetings
  let meetingsCopy = JSON.parse(JSON.stringify(meetings));
  //sort meetings by start time 
  let sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime
  });
  //create merged meetings variable and set first object as last merged
  let mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    let lastMerged = mergedMeetings[mergedMeetings.length - 1];
    if (sortedMeetings[i].startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(sortedMeetings[i].endTime, lastMerged.endTime);
    } else {
      mergedMeetings.push(sortedMeetings[i]);
    };
  };
  return mergedMeetings;
};

module.exports = { mergeRanges };