export default function ContactUs({ params }) {
        return (
            <div>   
                <h1>Contact Us: {params.id}</h1>
                <p>This is the contact page for ID: {params.id}</p>
            </div>
        );
    }   