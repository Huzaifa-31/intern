export default function block({ params }) {
  return (
    <div>
      <h1>Block page</h1>
      <p> name: {params.name}</p>
    </div>
  );
}