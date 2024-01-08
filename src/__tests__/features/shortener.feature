Feature: It returns a string cut after some length
  It returns a string cut after some length

Scenario: Reduce length of provided string
  Given A series of strings as follows:
  | Sentence                    | Length |
  | foo                         |        |
  | This is a long string       |        |
  | This is a very long string  | 20     |
  | This is a very long string  | 4      |
  When run function with above data:
  | Sentence                    | Length |
  | foo                         |        |
  | This is a long string       |        |
  | This is a very long string  | 20     |
  | This is a very long string  | 4      |
  Then I should get following results
  | Results                 |
  | foo                     |
  | This is a ...           |
  | This is a very long ... |
  | This...                 |