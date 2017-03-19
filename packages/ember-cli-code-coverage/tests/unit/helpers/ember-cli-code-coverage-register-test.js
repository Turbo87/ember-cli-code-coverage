import { emberCliCodeCoverageRegister } from 'dummy/helpers/ember-cli-code-coverage-register';
import { module, test } from 'qunit';

const ORIGINAL_COVERAGE = window.__coverage__;

module('Unit | Helper | ember cli code coverage register', function (hooks) {
  hooks.beforeEach(function () {
    window.__coverage__ = {};
    this.fileData = {
      path: 'app/templates/foo',
      s: {
        '1': 0,
        '2': 0,
      },
      b: {
        '1': [0, 0],
        '2': [0, 0],
      },
      f: {},
      fnMap: {},
      statementMap: {},
      branchMap: {},
      code: [],
    };
  });

  hooks.afterEach(function () {
    window.__coverage__ = ORIGINAL_COVERAGE;
  });

  test('registers the given JSON data for the path', function (assert) {
    emberCliCodeCoverageRegister([JSON.stringify(this.fileData)]);

    assert.deepEqual(window.__coverage__[this.fileData.path], this.fileData);
  });
});
