test("基本的な使い方", () => {
  const mockFn = jest.fn((a: number) => a * 10);
  mockFn(1);
  mockFn(2);

  expect(mockFn.mock.calls).toHaveLength(2);

  expect(mockFn.mock.calls[0][0]).toBe(1); // 1回目の呼出の引数
  expect(mockFn.mock.calls[1][0]).toBe(2); // 2回目の呼出の引数

  expect(mockFn.mock.results[0].value).toBe(10); // 1回目の呼出の戻り値
  expect(mockFn.mock.results[1].value).toBe(20); // 2回目の呼出の戻り値
});

test("戻り値を指定する", () => {
  const syncFunc1 = jest.fn().mockImplementation(() => 1);
  const syncFunc2 = jest.fn().mockReturnValue(1);

  syncFunc1(); // 1
  syncFunc2(); // 1
});

test("戻り値を指定する（Promise）", async () => {
  const asyncFunc1 = jest.fn().mockResolvedValue(1);
  const asyncFunc2 = jest.fn().mockRejectedValue(new Error("async error"));

  await asyncFunc1(); // 1
  await asyncFunc2(); // throw Error("async error")
});

test("呼出タイミングで戻り値を変更する", () => {
  const syncFunc = jest
    .fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValue(0);

  syncFunc(); // 1（1回目の呼出）
  syncFunc(); // 2（2回目の呼出）
  syncFunc(); // 0（デフォルト）
  syncFunc(); // 0（デフォルト）
});

test("モック用のマッチャー", () => {
  const mockFunc = jest.fn().mockReturnValue(100);

  // 2回呼出
  mockFunc(1);
  mockFunc(2);

  expect(mockFunc).toHaveBeenCalled();
  expect(mockFunc).toBeCalled(); // alias

  expect(mockFunc).toHaveBeenCalledTimes(2);
  expect(mockFunc).toBeCalledTimes(2); // alias

  expect(mockFunc).toHaveBeenNthCalledWith(1, 1); // 1回目の呼出の引数
  expect(mockFunc).toHaveBeenLastCalledWith(2); // 最後の呼出の引数

  expect(mockFunc).toHaveReturned();
  expect(mockFunc).toHaveReturnedTimes(2);
  expect(mockFunc).toHaveNthReturnedWith(1, 100); // 1回目の戻り値
  expect(mockFunc).toHaveLastReturnedWith(100); // 最後の呼出の戻り値

  expect(mockFunc).toMatchSnapshot(); // スナップショットテスト（モックの全呼び出しの引数・戻り値が前回実行時から変わっていないこと）
});
