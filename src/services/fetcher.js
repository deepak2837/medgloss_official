import Api from "./Api";

export async function fetcher(url) {
  const response = await Api.get(url);

  return response.data;
}
