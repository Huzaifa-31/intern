export default function about({ params }) {
    return (
        <div>
            <h1>About page</h1>
            <p> id: {params.id}</p>
        </div>
    );
}