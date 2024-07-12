import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import EventPage from "../pages/event";
import { GET_EVENTS_BY_ID } from "../utils/queries";
import { mockEventsData } from "./__mocks__/mock-data";

const eventId = "1";

const mocks = [
  {
    request: {
      query: GET_EVENTS_BY_ID,
      variables: { id: eventId },
    },
    result: {
      data: {
        eventsById: mockEventsData.allEvents.find(
          (event) => event.id === eventId
        ),
      },
    },
  },
];

const routerConfig = [
  {
    path: "/event/:id",
    element: <EventPage />,
  },
];

const router = createMemoryRouter(routerConfig, {
  initialEntries: [`/event/${eventId}`],
});

describe("Single Event page", () => {
  it("renders title when data is available", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterProvider router={router} />
      </MockedProvider>
    );

    const titleElement = await screen.findByText(/Mock Event 1/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders 'Buy Tickets' button", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterProvider router={router} />
      </MockedProvider>
    );

    const buttonElement = await screen.findByTestId("tickets-btn");
    expect(buttonElement).toBeInTheDocument();
  });
});
