import App from "./App.tsx";
import { Layout } from "./layout/layout.tsx";
import Contact from "./pages/contact.tsx";
import EventPage from "./pages/event.tsx";

const routerConfig = [
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
];

export default routerConfig;
