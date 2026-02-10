/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

test('red and green colors test', () => {
  const data = {
    name: 'Alice',
    age: 25,
    city: 'Boston',
  };

  expect(data).toMatchInlineSnapshot(`
    {
      "age": 30,
      "city": "New York",
      "name": "Bob",
    }
  `);
});
