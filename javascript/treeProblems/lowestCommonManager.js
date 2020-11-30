function getLowestCommonManager(topManager, reportOne, reportTwo) {
  const { lowestCommonManager } = getOrgInfo(topManager, reportOne, reportTwo);
  return lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
  let numImportantReports = 0;

  if (manager === reportOne || manager === reportTwo) numImportantReports += 1;

  for (const directReport of manager.directReports) {
    let orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
    if (orgInfo.lowestCommonManager) return orgInfo;
    numImportantReports += orgInfo.numImportantReports;
  }

  const lowestCommonManager = numImportantReports === 2 ? manager : null;
  return new OrgInfo(lowestCommonManager, numImportantReports);
}

class OrgInfo {
  constructor(lowestCommonManager, numImportantReports) {
    this.lowestCommonManager = lowestCommonManager;
    this.numImportantReports = numImportantReports;
  }
}

class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
