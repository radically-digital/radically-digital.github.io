# Get Functional - Map and Reduce

[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), and [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function (except in the case of every and some which return boolean values).

They simplify code as they are declarative, as opposed to imperative which is more difficult to understand and reason about.

- figuring out the return and argument types is the first challenge

```ts
type Person = {
  name: string;
  surname: string;
};

const makeDisplayName = (person: Person): string => {
  return `${person.name} ${person.surname}`;
};

// 👎 Note how we're mutating a variable in the scope of another function - this habbit means we need to ba aware of all places listOfNames is being called.
//   Also are we sure it's iterating through all names without a breakout? Would we realise if the index started at 1 or stopped short of one list item?
const listOfNames = [];

for (let i = 0; i < listOfPeople.length; i++) {
  listOfNames.push(makeDisplayName(listOfPeople[i]));
}

// 👍 Map is doing exactly as expected - we dont have to question if anything else is happening inside the applied iterator as it's declared what it does - `makeDisplayName`
const listOfNames = listOfPeople.map(makeDisplayName);
```

```ts
// 👎 Fully Imperative
const isEveryNeedleInHaystack = (needles, haystack) => {
  for (let i = 0; i < needles.length; i++) {
    if (haystack.indexOf(needles[i]) === -1) {
      return false;
    }
  }

  return true;
};

// 👍 Fully Declarative
const isEveryNeedleInHaystack = (needles, haystack) =>
  needles.every((needle) => haystack.includes(needle));
```

Example of filtering a list of books with conditions.

```ts
type Book = {
  title: string;
  author;
  genre: string[];
};

// 👎 Imperative
let listOfBooks: Book[] = library;

if (isOver18) {
  listOfBooks = [...listOfBooks, ...restrictedBooks]; // mutates listOfBooks
}

if (genreSelected) {
  const filteredBooks = []; // remember this - but only if `genreSelected` is true

  for (const book of listOfBooks) {
    if (book.genre.indexOf(genreSelected) > -1) {
      filteredBooks.push(book);
    }
  }

  listOfBooks = filteredBooks;
}

setDisplayBooks(listOfBooks);

// 👍 Declarative
const hasGenre = (book: Book, genreSelected: string): boolean =>
  genreSelected ? book.includes(genreSelected) : true; // pure function that is descriptive and easy to reason about

const listOfBooks = isOver18 ? [...library, ...restrictedBooks] : library;
const filteredBooks = listOfBooks.filter((book) =>
  hasGenre(book, genreSelected)
);

setDisplayBooks(filteredBooks);
```

The following example takes a list of tasks and displays the duration grouped by `dueWeek` and `priority`. Functional methods allow us to break out of control flow with the use of `return` - something which is not allowed in imperative for-loops. We need to continue reading and understanding the code in case something is mutated later on.

```ts
type Priority = "low" | "med" | "high";
type Task = {
  name: string;
  priority: Priority;
  durationMinutes: number;
  weekDue: number;
};

type TimeEstimation = { weekDue: number } & Partial<Record<Priority, number>>; // { weekdue, low?, med?, high? }

const getIndex = (timeEstimations: TimeEstimation[], task: Task) =>
  timeEstimations.findIndex(
    (timeEstimation) => timeEstimation.weekDue === task.weekDue
  );

// 👎 Imperative
const weeklyEstimations = (tasks: Task[]): TimeEstimation[] => {
  const timeEstimations: TimeEstimation[] = [];

  for (const task of tasks) {
    const existingIndex = getIndex(timeEstimations, task);
    const existing = timeEstimations[existingIndex];

    if (existing) {
      const existingDuration = existing[task.priority];

      if (existingDuration) {
        existing[task.priority] += task.durationMinutes;
      } else {
        existing[task.priority] = task.durationMinutes;
      }
    } else {
      timeEstimations.push({
        weekDue: task.weekDue,
        [task.priority]: task.durationMinutes,
      });
    }
  }

  return timeEstimations;
};

// 👍 Declarative
const replaceAt = <T>(index: number, data: T, arr: T[]): T[] => {
  arr.splice(index, 1, data);
  return arr;
};

const weeklyEstimations = (tasks: Task[]): TimeEstimation[] =>
  tasks.reduce<TimeEstimation[]>((timeEstimations, task) => {
    const existingIndex = getIndex(timeEstimations, task);
    const existing = timeEstimations[existingIndex];

    if (existing) {
      const durationMinutes = existing[task.priority] || 0;

      return replaceAt(
        existingIndex,
        {
          ...existing,
          [task.priority]: durationMinutes + task.durationMinutes,
        },
        timeEstimations
      );
    }

    return [
      ...timeEstimations,
      { weekDue: task.weekDue, [task.priority]: task.durationMinutes },
    ];
  }, []);
```
