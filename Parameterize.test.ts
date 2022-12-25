describe("配列ベースのパラメタライズドテスト", () => {
  test.each([
    [100, 1, 100],
    [150, 2, 300],
    [200, 0, 0],
  ])("料金計算v1:%p * %p = %p", (unitPrice, quantity, expedcted) => {
    expect(unitPrice * quantity).toBe(expedcted);
  });
  test.each([
    { unitPrice: 100, quantity: 1, expected: 100 },
    { unitPrice: 150, quantity: 2, expected: 300 },
    { unitPrice: 200, quantity: 0, expected: 0 },
  ])(
    "料金計算v2:$unitPrice * $quantity = $expected",
    ({ unitPrice, quantity, expected }) => {
      expect(unitPrice * quantity).toBe(expected);
    }
  );
});

describe("テンプレートリテラルでテーブル形式にしたパラメタライズドテスト", () => {
  test.each`
    unitPrice | quantity | expected
    ${100}    | ${1}     | ${100}
    ${150}    | ${2}     | ${300}
    ${200}    | ${0}     | ${0}
  `(
    "料金計算:$unitPrice * $quantity = $expected",
    ({ unitPrice, quantity, expected }) => {
      expect(unitPrice * quantity).toBe(expected);
    }
  );
});
