export default function HomePage() {
  return (
    <div>
      {[...Array(1000)].map((_, i) => (
        <p key={i}>This is line {i + 1}</p>
      ))}
    </div>
  );
}
