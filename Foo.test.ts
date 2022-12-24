describe("Foo.ts", () => {
  test("AがBに変換されること", () => {
    // ...テスト本文
  });
  test("Cを渡すとエラーが送出されること", () => {
    // ...テスト本文
  });

  test("Promiseベースのテスト", async () => {
    const actual = await something();
    expect(actual).toBe("...");
  });

  test("コールバックのテスト", (done) => {
    function callback(success: string, error?: Error) {
      if (error) {
        done(error); // テスト失敗
        return;
      }
      try {
        expect(success).toBe("...");
        done(); // テスト終了
      } catch (e) {
        done(e); // テスト失敗内容を出力して、テスト失敗
      }
    }
    something(callback);
  });
});
