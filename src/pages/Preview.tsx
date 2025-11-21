export default function Preview() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h1>QETHING Preview Area</h1>
      <p>
        This is the private preview area for publishers. Later you can add:
      </p>
      <ul>
        <li>Game trailers</li>
        <li>Pitch deck</li>
        <li>Press kit</li>
        <li>Downloadable builds</li>
        <li>Exclusive content</li>
      </ul>
      <p>
        This page will soon be protected using Cloudflare Access so only invited
        publishers can view it.
      </p>
    </div>
  );
}
