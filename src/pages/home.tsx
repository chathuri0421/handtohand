import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="content">
        <h1>Welcome to handA</h1>
        <p>Your trusted platform for hand-to-hand services</p>
      </main>
    </div>
  );
}
