import { random, randomFunc } from "./src/random";
import RandomService from "./src/RandomService";
import { calculate, calculate2, calculate3 } from "./src/sample-handler";
import { v4 as uuidv4 } from "uuid";
import fooBar from "./src/foo-bar";
jest.mock("./src/random");
jest.mock("./src/RandomService");

test("Objectとしてexportしたモジュールのモック化", () => {
  const mockModule = random as jest.Mocked<typeof random>;
  mockModule.randomModule.mockReturnValue(100);

  calculate(); // 100

  expect(mockModule.randomModule).toHaveBeenCalledTimes(1);
});

test("関数としてexportしたモジュールのモック化", () => {
  const mockFunc = randomFunc as jest.MockedFunction<typeof randomFunc>;
  mockFunc.mockReturnValue(100);

  calculate2(); // 100

  expect(randomFunc).toHaveBeenCalledTimes(1);
});

test("Classとしてexportしたモジュールをモック化 - メソッド", () => {
  const mockMethod = RandomService.prototype.random as jest.MockedFunction<
    typeof RandomService.prototype.random
  >;
  mockMethod.mockReturnValue(100);

  calculate3(); // 100

  expect(mockMethod).toHaveBeenCalledTimes(1);
});

test("マニュアルモック", () => {
  expect(uuidv4()).toBe("00000000-0000-0000-0000-000000000000");
});

test("部分モック", () => {
  const spy = jest.spyOn(fooBar, "foo").mockReturnValue("mock");
  expect(fooBar.foo()).toBe("mock");
  expect(fooBar.bar()).toBe("bar");
  expect(spy).toHaveBeenCalledTimes(1);
});
