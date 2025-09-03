export function Alert({ text }) {
    return (
        <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Oops!</h4>
            <p>{text}</p>
        </div>
    );
}