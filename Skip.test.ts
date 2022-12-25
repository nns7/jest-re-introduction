describe.skip("describeテストスキップ", () => {
  test("(describe.skip)実行されない", () => {
    fail();
  });
  test("(describe.skip)これも実行されない", () => {
    fail();
  });
});

xdescribe("describeテストスキップ", () => {
  test("(xdescribe)実行されない", () => {
    fail();
  });
  test("(xdescribe)これも実行されない", () => {
    fail();
  });
});

test.skip("(test.skip)実行されない", () => {
  fail();
});
xtest("(xtest)実行されない", () => {
  fail();
});
