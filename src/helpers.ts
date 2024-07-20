export function randomlyInsertIntoArray<T>(array: T[], item: T): T[] {
  const length = array.length;
  const randomIndex = Math.floor(Math.random() * (length + 1)); // generate random index including the end of the array

  const newArray = [...array];
  newArray.splice(randomIndex, 0, item);
  return newArray;
}

export function calculateScore(
  correctAnswers: { type: 'boolean' | 'multiple'; answer: string }[],
  givenAnswers: (string | null)[]
): number {
  let score = 0;

  correctAnswers.forEach((answer, index) => {
    if (answer.answer === givenAnswers[index]) {
      score += answer.type === 'boolean' ? 5 : 10;
    }
  });

  return score;
}
