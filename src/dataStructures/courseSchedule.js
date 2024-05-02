function canFinish(numCourses, prerequisites) {
  const coursesAndPrereqs = new Map();
  for (let i = 0; i < numCourses; i++) {
    coursesAndPrereqs.set(i, []);
  }

  for (const [course, prereq] of prerequisites) {
    coursesAndPrereqs.set(course, [...coursesAndPrereqs.get(course), prereq]);
  }

  const visiting = new Set();
  const visited = new Set();

  function dfs(course) {
    if (visiting.has(course)) return false;
    if (visited.has(course)) return true;
    if (coursesAndPrereqs.get(course).length === 0) return true;

    visiting.add(course);

    for (const prereq of coursesAndPrereqs.get(course)) {
      if (!dfs(prereq)) return false;
    }

    visiting.delete(course);
    visited.add(course);

    return true;
  }

  for (const course of coursesAndPrereqs.keys()) {
    if (!dfs(course)) return false;
  }

  return true;
}

function canFinish(numCourses, prerequisites) {
  const coursesAndPrereqs = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    coursesAndPrereqs[i] = [];
  }

  for (const [course, prereq] of prerequisites) {
    coursesAndPrereqs[course].push(prereq);
  }

  const visiting = new Set();
  const visited = new Set();

  function dfs(course) {
    if (visiting.has(course)) return false;
    if (visited.has(course)) return true;

    if (!coursesAndPrereqs[course].length) return true;

    visiting.add(course);

    for (const prereq of coursesAndPrereqs[course]) {
      if (!dfs(prereq)) return false;
    }

    visiting.delete(course);
    visited.add(course);
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false;
  }

  return true;
}
