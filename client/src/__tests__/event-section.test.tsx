import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import EventsSection from "../components/sections/events-section";
import { GET_ALL_EVENTS } from "../utils/queries";
import { mockEventsData } from "./__mocks__/mock-data";

const mocks = [
  {
    request: {
      query: GET_ALL_EVENTS,
      variables: {},
    },
    result: {
      data: mockEventsData,
    },
  },
];

const emptyMocks = [
  {
    request: {
      query: GET_ALL_EVENTS,
      variables: {},
    },
    result: {
      data: {
        allEvents: [],
      },
    },
  },
];

describe("EventsSection Component", () => {
  it("renders fetched data of events", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <EventsSection selectedRegions={null} query="" />
        </MemoryRouter>
      </MockedProvider>
    );

    // Check if the mock event title is rendered
    expect(await screen.findByText(/Mock Event 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Event 2/i)).toBeInTheDocument();
  });

  it("renders 'No events found' when there are no events", async () => {
    render(
      <MockedProvider mocks={emptyMocks} addTypename={false}>
        <MemoryRouter>
          <EventsSection selectedRegions={null} query="" />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(await screen.findByText(/No events found/i)).toBeInTheDocument();
  });

  it("renders correct NavLink href for an event", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <EventsSection selectedRegions={null} query="" />
        </MemoryRouter>
      </MockedProvider>
    );

    // Check if the correct NavLink href is rendered
    const eventLink = await screen.findByText(/Mock Event 1/i);
    expect(eventLink.closest("a")).toHaveAttribute("href", "/event/1");
  });

  it("renders 'Buy Tickets' button for 1st event", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <EventsSection selectedRegions={null} query="" />
        </MemoryRouter>
      </MockedProvider>
    );
    const buttonElements = await screen.findAllByTestId("tickets-btn");
    expect(buttonElements[0]).toBeInTheDocument();
  });
});
