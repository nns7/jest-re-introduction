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
