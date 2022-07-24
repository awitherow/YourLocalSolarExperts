// using fetch
export const notifyWebhook = async (url: string, body: any) =>
  await fetch(
    `${url}` +
      "?" +
      Object.keys(body)
        .map((key) => {
          return `${key}=${encodeURIComponent(body[key])}`;
        })
        .join("&")
  );
