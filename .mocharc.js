'use strict';

/**
 * By default, Mocha will search for a config file if --config is not specified
 * @see https://mochajs.org/#configuring-mocha-nodejs
 *
 * Mocha will search for — and use — only one. The priority is:
 * .mocharc.js
 * .mocharc.yaml
 * .mocharc.yml
 * .mocharc.jsonc
 * .mocharc.json
 */
module.exports = {
  diff: true,
  extension: ['ts'],
  opts: false,
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  ui: 'bdd',
  exit: true,
  recursive: true,
  timeout: 15000,
  spec: ['./tests/**'],
  require: ['ts-node/register', 'source-map-support/register']
};