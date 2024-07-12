import { useQuery } from "@apollo/client";
import {
  GET_ALL_EVENTS,
  GET_EVENTS_BY_REGION,
  GET_SEARCH_EVENTS,
} from "../../utils/queries";
import { Button } from "../ui/button";
import { Calendar, Clock, Globe, Loader2, MapPin, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MusicEventI } from "../../types/types";

const EventsSection = ({
  selectedRegions,
  query,
}: {
  selectedRegions: string[] | null;
  query: string;
}) => {
  const { loading, error, data } = useQuery(GET_EVENTS_BY_REGION, {
    variables: { regions: selectedRegions ?? [] },
    skip: (selectedRegions?.length ?? 0) === 0 && query.length === 0,
  });

  const {
    loading: allLoading,
    error: allError,
    data: eventsData,
  } = useQuery(GET_ALL_EVENTS, {
    skip: (selectedRegions?.length ?? 0) > 0 || query.length > 0,
  });

  const {
    loading: searchLoading,
    error: searchError,
    data: searchData,
  } = useQuery(GET_SEARCH_EVENTS, {
    variables: { query: query, regions: selectedRegions ?? [] },
    skip: query.length === 0,
  });

  if (loading || allLoading || searchLoading)
    return (
      <div className="bg-slate-500 bg-opacity-5 flex items-center justify-center mx-auto h-[400px] w-full">
        <Loader2 className="animate-spin" />
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;
  if (allError) return <p>Error: {allError.message}</p>;
  if (searchError) return <p>Error: {searchError.message}</p>;

  const events = query
    ? searchData?.searchEvents
    : (selectedRegions?.length ?? 0) > 0
    ? data?.eventsByRegion
    : eventsData?.allEvents;

  return (
    <div className="container flex flex-col items-center gap-y-4">
      {events?.length === 0 && <p>No events found</p>}
      {events &&
        events.map((event: MusicEventI) => (
          <div
            key={event.id}
            className="w-full flex flex-col sm:flex-row items-start justify-between hover:bg-green-500/25 p-2"
          >
            <div className="w-full flex flex-col items-center gap-y-1 border p-5">
              <div className="flex items-center">
                <p className="text-lg font-bold">{event.startDate}</p> -{" "}
                <p className="text-lg font-bold">{event.endDate}</p>
              </div>
              <Calendar className="text-sm text-[#156b2c] font-semibold" />
            </div>
            <div className="w-full flex flex-col items-center gap-y-1 p-5">
              <NavLink to={`/event/${event.id}`} target="_blank">
                <p className="text-lg font-bold">{event.title}</p>
              </NavLink>
              <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
                <Clock />
                <div className="flex items-center">
                  <p className="text-lg font-bold">{event.startTime}</p> -{" "}
                  <p className="text-lg font-bold">{event.endTime}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-y-1 p-5">
              <p className="text-lg font-bold">{event.town}</p>
              <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
                <MapPin /> {event.place}
              </div>
            </div>
            <div className="w-full hidden md:flex flex-col items-center gap-y-1 p-5">
              <p className="text-lg font-bold">{event.region}</p>
              <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
                <Globe /> {event.typeOfEvent}
              </div>
            </div>
            <div className="w-full hidden md:flex flex-col items-center gap-y-1 p-5">
              <Button
                className="flex items-center gap-x-2 bg-[#31ff38] hover:bg-[#156b2c]"
                data-testid="tickets-btn"
              >
                {" "}
                <Ticket /> TICKETS
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventsSection;
