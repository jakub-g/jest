/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

test('shows snapshot diff colors', () => {
  const data = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'coding', 'gaming'],
    active: true,
    score: 95,
  };

  expect(data).toMatchInlineSnapshot(`
    {
      "active": false,
      "age": 25,
      "city": "Los Angeles",
      "hobbies": [
        "swimming",
        "hiking",
      ],
      "name": "Jane Smith",
      "score": 85,
    }
  `);
});
