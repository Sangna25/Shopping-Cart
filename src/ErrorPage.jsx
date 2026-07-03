import { useNavigate, useRouteError } from "react-router-dom";


export function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();

    console.error(error);

    const isNotFound = error?.status === 404;

    return (
        <div className="error-page">
            <div className="error-card">
                <p className="error-code">{isNotFound ? "404" : "Oops"}</p>
                <h1 className="error-title">
                    {isNotFound ? "Page not found" : "Something went wrong"}
                </h1>
                <p className="error-message">
                    {isNotFound
                        ? "The page you're looking for doesn't exist or may have been moved."
                        : "We hit an unexpected error. Try going back or heading home."}
                </p>
                <div className="error-actions">
                    <button className="error-btn-secondary" onClick={() => navigate(-1)}>
                        Go back
                    </button>
                    <button className="error-btn-primary" onClick={() => navigate("/")}>
                        Back to home
                    </button>
                </div>
            </div>
        </div>
    );
}
