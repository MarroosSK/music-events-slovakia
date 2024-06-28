import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Layout } from "./layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import EventPage from "./pages/event.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/event/:id",
        element: <EventPage />,
      },
    ],
  },
]);

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
