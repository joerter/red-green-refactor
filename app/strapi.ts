export const strapiBaseUrl = () =>
  typeof window !== "undefined"
    ? (window as any).ENV.STRAPI_URL_BASE
    : process.env.STRAPI_URL_BASE;

export async function strapi<T>(resource: string) {
  const response = await fetch(`${strapiBaseUrl()}/api/${resource}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Response(null, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data = await response.json();

  if (data.error) {
    throw new Response(null, { status: 500 });
  }

  return data.data as T;
}
