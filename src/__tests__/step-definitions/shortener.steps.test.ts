import { defineFeature, loadFeature } from "jest-cucumber";
import { Shortener } from "../../index";

const feature = loadFeature("./src/__tests__/features/shortener.feature");

defineFeature(feature, (test) => {
  test("Reduce length of provided string", ({ given, when, then }) => {
    let result: string[];
    given("A series of strings as follows:", () => {});

    when("run function with above data:", (table) => {
      result = table.map((row: any) =>
        Shortener(row.Sentence, row.Length !== "" ? row.Length : undefined)
      );
    });

    then("I should get following results", (table) => {
      table.forEach((row: any, index: number) => {
        expect(row.Results).toStrictEqual(result[index]);
      });
    });
  });
});
