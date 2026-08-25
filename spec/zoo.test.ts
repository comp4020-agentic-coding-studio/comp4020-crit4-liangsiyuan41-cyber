import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// This week's spec: an instrument shaped like a zoo. These tests cover the
// layout contract only — sound and interaction land in a later pass.
const EXPECTED_ANIMALS = [
  "chick",
  "rabbit",
  "cat",
  "dog",
  "sheep",
  "lion",
  "elephant",
  "giraffe",
];

const doc = new JSDOM(readFileSync(resolve("dist/index.html"), "utf8")).window.document;

describe("musical zoo layout", () => {
  it("has a ZOO heading", () => {
    const heading = doc.querySelector("h1");
    expect(heading?.textContent?.trim()).toBe("ZOO");
  });

  it("shows all eight animals, shortest to tallest", () => {
    const animals = [...doc.querySelectorAll(".animal-row .animal")].map((el) => {
      const match = [...el.classList].find((c) => c.startsWith("animal--"));
      return match?.replace("animal--", "");
    });
    expect(animals).toEqual(EXPECTED_ANIMALS);
  });
});
