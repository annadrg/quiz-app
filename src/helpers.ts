export async function fetcher(
  endpoint: string,
  queryParams?: Record<string, string>
): Promise<unknown> {
  const url = endpoint + '?' + new URLSearchParams(queryParams).toString();
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw json;
  }

  return json;
}

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
