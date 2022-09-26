# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Following refactorings were done to the code along with their reason:
1. Refactor/rename input parameter "event" to "inputData" as it better represents that data the function computes on. (Due to the small size of test, it is unclear what the structure of the input "event" object is, so it is better to use a generic name for the input parameter)
2. Refactor/rename internal variable "candidate" to "partitionKey" as it improves readability of the function's code. Since the function computes a partition key and returns it, it is better to use this name instead of a vague word like "candidate".
3. Added 2 comments above difficult logic to ease understanding of the computation being performed. Having comments in code allows the reader to better understand what the programmer meant to do while writing the code statements. It also makes the code reading a faster experience. Finally comments can help track down bugs faster as a comment makes it clear what the programmer intented to do in their code and what they eventually did in the code.
4. Fixed spacing and unnecessarily nested if statements to increase readability and give proper formatting to the code.