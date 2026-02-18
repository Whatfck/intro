export default function Card() {
  return (
    <div className="card">
      <img
        src="/example.jpg"
        alt="Ejemplo"
        className="card-image"
      />
      <div className="card-content">
        <h2>Título del Card</h2>
        <p>Este es un texto descriptivo dentro del card. Puedes poner lo que quieras.</p>
      </div>
    </div>
  );
}
