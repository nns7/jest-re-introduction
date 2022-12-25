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
});
