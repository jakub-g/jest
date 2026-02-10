/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('Color test', () => {
  it('shows snapshot colors', () => {
    const data = {
      name: 'John Doe',
      age: 30,
      city: 'New York',
      hobbies: ['reading', 'coding', 'gaming'],
      active: true,
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
      }
    `);
  });
});
