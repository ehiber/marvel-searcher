import { published } from '../utils/published.js';

test('The date of 2008-12-17T00:00:00-0500 is Dec 17,2008', () => {
    expect(published("2008-12-17T00:00:00-0500")).toBe("Dec 17,2008");
  });