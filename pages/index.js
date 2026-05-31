export async function getServerSideProps() {
  return { props: { renderedAt: new Date().toISOString() } };
}
export default function Home({ renderedAt }) {
  return (
    <main style={{ fontFamily: "system-ui", maxWidth: "40rem", margin: "4rem auto" }}>
      <h1>Next.js SSR on Layero</h1>
      <p>Server-rendered at <code>{renderedAt}</code> (changes every request → proves SSR).</p>
    </main>
  );
}
