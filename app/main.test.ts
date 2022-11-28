import {number} from '@org/lib'

import {main} from './main'

test("should print the answer to everything", () => {
  const log = jest.spyOn(console, "log").mockImplementation(() => {});
  main();
  expect(log).toBeCalledWith({ number });
});
