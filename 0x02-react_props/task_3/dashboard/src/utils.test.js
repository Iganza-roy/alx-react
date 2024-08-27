import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions test', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy returns the correct string when true is passed', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when false is passed', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct string', () => {
  const outputString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(outputString);
});
