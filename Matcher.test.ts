test("expected.toBe", () => {
  // 以下はチェックOK
  expect("foo").toBe("foo");
  expect(1).toBe(1);
  expect(true).toBe(true);

  // 参照先の異なるオブジェクト同士の等価条件は判定できない
  const foo = { foo: "bar" };
  expect(foo).not.toBe({ foo: "bar" });
  expect(foo).toBe(foo); // 同じインスタンスはOK
});

test("expect.toEqual/toStrictEqual", () => {
  expect({ foo: "bar" }).toEqual({ foo: "bar" });
  expect({ foo: "bar" }).toStrictEqual({ foo: "bar" });
  expect([1, 2, 3]).toEqual([1, 2, 3]);
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
});

test("toEqual/toStrictEqual違い", () => {
  class ClassA {
    foo = "bar";
  }

  // toEqual
  expect({ foo: undefined }).toEqual({});
  expect([, 1]).toEqual([undefined, 1]);
  expect(new ClassA()).toEqual({ foo: "bar" });
  // toStrictEqual
  expect({ foo: undefined }).not.toStrictEqual({});
  expect([, 1]).not.toStrictEqual([undefined, 1]);
  expect(new ClassA()).not.toStrictEqual({ foo: "bar" });
});

test("expectマッチャーユーティリティ利用", () => {
  const obj = {
    foo: "Bar",
    count: 10,
    id: "123-456",
    nested: { hoge: true, fuga: false },
    array: [1, 2, 3],
  };
  expect(obj).toEqual({
    foo: expect.any(String), // String
    count: expect.anything(), // 値はなんでもOK
    id: expect.stringMatching(/\d{3}-\d{3}/), // 正規表現
    nested: expect.objectContaining({ hoge: true }), // 指定したkey-valueが含まれていること
    array: expect.arrayContaining([1, 2]), // 配列に要素が含まれていること
  });
});

test("toBeTruthy/toBeFalsy", () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();

  expect("foo").toBeTruthy(); // 空文字以外はtruthy
  expect(1).toBeTruthy(); // 空文字以外はtruthy
  expect({}).toBeTruthy(); // オブジェクトはtruthy
  expect([]).toBeTruthy(); // 配列はtruthy
  expect(undefined).toBeFalsy(); // undefined/nullはfalsy
  expect(0).toBeFalsy(); // 0はfalsy
  expect("").toBeFalsy(); // 空文字はfalsy
});

test("toBeUndefined/toBeNull/toBeDefined", () => {
  expect(undefined).toBeUndefined();
  expect("foo").toBeDefined();
  expect(null).toBeDefined(); // nullはundefinedではない

  expect(null).toBeNull();
  expect("foo").not.toBeNull();
  expect(undefined).not.toBeNull(); // undefinedはnullではない
});

test("toHaveLength", () => {
  expect("foo").toHaveLength(3);
  expect([1, 2, 3]).toHaveLength(3);
});

test("toMatch", () => {
  expect("foo12345").toMatch(/foo\d{5}/); // 正規表現・部分一致
  expect("foo12345").toMatch(/^foo\d{5}$/); // 正規表現・完全一致
  expect("foo12345").toMatch("foo"); // 部分一致
});

test("toContain/toContainEqual", () => {
  expect(["foo", "bar"]).toContain("foo");
  expect([{ foo: "bar" }, { foo: "hoge" }]).toContainEqual({ foo: "bar" });
});
