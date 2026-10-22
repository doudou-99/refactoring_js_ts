import path from 'path';

module.exports = {
    resolveSnapshotPath: (testPath: string, snapshotExtension: string) => {
      return testPath
        .replace(`${path.sep}tests${path.sep}`, `${path.sep}legacy${path.sep}expected${path.sep}`)
        .replace('goldenMaster.test.ts', 'report.txt');
    },
    
    resolveTestPath: (snapshotFilePath: string, snapshotExtension: string) => {
      return snapshotFilePath
        .replace(`${path.sep}legacy${path.sep}expected${path.sep}`, `${path.sep}tests${path.sep}`)
        .replace('report.txt', 'goldenMaster.test.ts');
    },
  
    testPathForConsistencyCheck: 'tests/goldenMaster.test.ts',
};