export async function strapi<T>(resource: string) {
  const response = await fetch(
    `${process.env.STRAPI_URL_BASE}/api/${resource}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

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
