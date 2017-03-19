import { helper } from '@ember/component/helper';

export default helper(([rawData]) => {
  let coverageData = JSON.parse(rawData);
  window.__coverage__[coverageData.path] = coverageData;
});
