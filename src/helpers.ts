export async function fetcher(
  endpoint: string,
  queryParams?: Record<string, string>
) {
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
