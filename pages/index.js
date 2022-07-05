async function getInitialProps({ res }) {
  const targetURL = "https://airtable.com/shrxHyOMVTodZ1oaD"; // 🦩
  if (res) {
    // On the server, we'll use an HTTP response to
    // redirect with the status code of our choice.
    // 307 is for temporary redirects.
    res.writeHead(307, { Location: targetURL });
    res.end();
  } else {
    // We'll redirect to the external page using
    // `window.location`.
    window.location = targetURL;
    // While the page is loading, code execution will
    // continue, so we'll await a never-resolving
    // promise to make sure our page never
    // gets rendered.
    await new Promise((resolve) => {});
  }
  return {};
}
function NewsletterPage() {
  return <p>This should never get rendered</p>;
}

NewsletterPage.getInitialProps = getInitialProps;
export default NewsletterPage;
