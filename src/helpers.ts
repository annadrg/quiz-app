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
