import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! 🚧</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <p style={{ color: "gray" }}>{error.statusText || error.message}</p>
      <a href="/" style={{ color: "#ff6f61" }}>
        Go back to Home
      </a>
    </div>
  );
}

export default ErrorPage;
