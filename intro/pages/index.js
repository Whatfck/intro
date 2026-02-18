import Card from "../components/Card";
import "../components/Card.css";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
