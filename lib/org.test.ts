import { getData } from './org';

describe('getData', () => {
  it('should return data for a valid file path', async () => {
    const path = '__tests__/fixtures/sample.org';
    const data = await getData(path);
    expect(data).toBeDefined();

    expect(data).toContain("<div class=\"section\"><h1>foo</h1><div class=\"section\"><h2>bar</h2><p>Hello, world. </p><ul><li>first </li><li>second </li></ul></div></div>")
  });

  it('should throw an error for an invalid file path', async () => {
    const path = '../__test__/fixtures/not-found-sample.org';
    await expect(getData(path)).rejects.toThrow();
  });
});
