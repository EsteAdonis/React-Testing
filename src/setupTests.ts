// MUST be at the absolute top - setup polyfills before anything else
const { webcrypto } = require('crypto');
const { TextEncoder, TextDecoder } = require('util');

Object.defineProperty(global, 'TextEncoder', {
  value: TextEncoder,
  writable: true,
  configurable: true,
});

Object.defineProperty(global, 'TextDecoder', {
  value: TextDecoder,
  writable: true,
  configurable: true,
});

Object.defineProperty(global, 'crypto', {
  value: webcrypto,
  writable: true,
  configurable: true,
});
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { server } from './mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

