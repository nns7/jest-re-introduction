import { random, randomFunc } from "./random";
import RandomService from "./RandomService";

export function calculate(): number {
  return random.randomModule();
}

export function calculate2(): number {
  return randomFunc();
}

export function calculate3(): number {
  return new RandomService().random();
}
