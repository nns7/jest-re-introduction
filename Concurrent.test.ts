describe("配列ベースのパラメタライズドテストを並列に実行する", () => {
  const arr = [...Array(100).keys()];
  test.concurrent.each(arr)("concurrent:%p", async (num) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
    expect(num * num).toBe(num * num);
  });
});
