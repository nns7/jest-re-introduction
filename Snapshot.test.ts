import { v4 as uuidv4 } from "uuid";

describe("Snapshot Testing", () => {
  test("toMatchSnapshot - 基本", () => {
    const html = `
    <div class="container">
      <article>
        <p class="title">UI生成結果<p>
      </article>
    </div>
    `;
    expect(html).toMatchSnapshot();
  });

  test("toMatchSnapshot - インライン", () => {
    const html = `
    <div class="container">
      <article>
        <p>UI生成結果<p>
      </article>
    </div>
    `;
    expect(html).toMatchInlineSnapshot(`
"
    <div class="container">
      <article>
        <p>UI生成結果<p>
      </article>
    </div>
    "
`);
  });

  test("toMatchSnapshot - Property Matchers", () => {
    const obj = {
      id: uuidv4(),
      created: new Date().getTime(),
      type: "jest",
    };
    expect(obj).toMatchSnapshot({
      id: expect.stringMatching(
        /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/
      ),
      created: expect.any(Number),
    });
  });
});
