import { gql } from "@apollo/client";

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    allEvents {
      id
      title
      place
      imageUrl
      region
      town
      startDate
      endDate
      startTime
      endTime
      typeOfEvent
      createdAt
    }
  }
`;

export const GET_EVENTS_BY_ID = gql`
  query EventsById($id: String!) {
    eventsById(id: $id) {
      id
      title
      place
      imageUrl
      region
      town
      startDate
      endDate
      startTime
      endTime
      typeOfEvent
      createdAt
    }
  }
`;

export const GET_EVENTS_BY_REGION = gql`
  query EventsByRegion($regions: [String!]!) {
    eventsByRegion(regions: $regions) {
      id
      title
      place
      imageUrl
      region
      town
      startDate
      endDate
      startTime
      endTime
      typeOfEvent
      createdAt
    }
  }
`;

export const GET_SEARCH_EVENTS = gql`
  query SearchEvents($query: String, $regions: [String!]) {
    searchEvents(query: $query, regions: $regions) {
      id
      title
      place
      imageUrl
      region
      town
      startDate
      endDate
      startTime
      endTime
      typeOfEvent
      createdAt
    }
  }
`;
