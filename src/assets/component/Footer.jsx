export const Footer = (props) => 
{
    return (
    <footer className="bg-dark ">
    <span className="text-light d-flex justify-content-center p-3">copy with &copy {props.name} {props.hero}</span>
    </footer>
    );
}

