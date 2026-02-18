## Topics covered

-React Router DOM
-createBrowserRouter : Define routes as an array of objects with path, element, and optional children/loader
-RouterProvider :Render <RouterProvider router={router} /> in your root
-Outlet : used to select children component based on path
-errorElement: create a Error compoent and add it in root path object
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

            export default function ErrorPage() {
            const error = useRouteError();
            if (isRouteErrorResponse(error)) {
                return (
                <div>
                    <h1>{error.status}</h1>
                    <p>{error.statusText}</p>
                </div>
                );
            }
            return <div>Something went wrong</div>;
            }

-Link: provided by react-router-dom used instead of <a> tag in react to link pages
