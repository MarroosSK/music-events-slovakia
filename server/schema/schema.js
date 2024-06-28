import { PrismaClient } from "@prisma/client";
import { gql } from "graphql-tag";
const db = new PrismaClient();

// GraphQL Schema definition
const typeDefs = gql`
  type MusicEvent {
    id: String
    title: String
    place: String
    imageUrl: String
    region: String
    town: String
    startDate: String
    endDate: String
    startTime: String
    endTime: String
    typeOfEvent: String
    createdAt: String
  }

  type Query {
    allEvents: [MusicEvent]
    eventsById(id: String!): MusicEvent
    eventsByRegion(regions: [String!]!): [MusicEvent]
    searchEvents(query: String, regions: [String!]): [MusicEvent]
  }
`;

// Resolvers define the technique for fetching the types defined in the schema
const resolvers = {
  Query: {
    allEvents: async () => {
      return await db.musicEvent.findMany({
        orderBy: {
          createdAt: "asc",
        },
      });
    },
    eventsById: async (parent, { id }) => {
      return await db.musicEvent.findUnique({
        where: {
          id,
        },
      });
    },
    eventsByRegion: async (parent, { regions }) => {
      return await db.musicEvent.findMany({
        where: {
          region: {
            in: regions,
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      });
    },
    searchEvents: async (parent, { query, regions }) => {
      return await db.musicEvent.findMany({
        where: {
          AND: [
            {
              OR: [{ title: { contains: query, mode: "insensitive" } }],
            },
            {
              region:
                regions && regions.length > 0 ? { in: regions } : undefined,
            },
          ],
        },
        orderBy: {
          createdAt: "asc",
        },
      });
    },
  },
};

export { typeDefs, resolvers };
