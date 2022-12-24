describe("Foo", () => {
  beforeAll(() => {
    console.log(">>> Foo:beforeAll");
  });
  afterAll(() => {
    console.log("<<< Foo:afterAll");
  });

  beforeEach(() => {
    console.log("> Foo:beforeEach");
  });
  afterEach(() => {
    console.log("< Foo:afterEach");
  });

  test("Foo:テスト1", () => {
    console.log("- Foo:テスト1");
  });
  test("Foo:テスト2", () => {
    console.log("- Foo:テスト2");
  });

  describe("Bar", () => {
    beforeAll(() => {
      console.log(">>> Bar:beforeAll");
    });
    afterAll(() => {
      console.log("<<< Bar:afterAll");
    });

    beforeEach(() => {
      console.log("> Bar:beforeEach");
    });
    afterEach(() => {
      console.log("< Bar:afterEach");
    });

    test("Bar:テスト1", () => {
      console.log("- Bar:テスト1");
    });
    test("Bar:テスト2", () => {
      console.log("- Bar:テスト2");
    });
  });
});
