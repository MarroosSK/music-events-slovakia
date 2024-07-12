import { useQuery } from "@apollo/client";
import { Clock, Globe, Loader2, MapPin, Ticket } from "lucide-react";
import { useParams } from "react-router";
import { Button } from "../components/ui/button";
import { GET_EVENTS_BY_ID } from "../utils/queries";

const EventPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENTS_BY_ID, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="py-10 px-3 sm:px-10 md:px-20 min-h-screen inline-flex flex-col gap-y-6 mx-auto ">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  const event = data?.eventsById;

  if (!event) return <div>No event found</div>;

  return (
    <div className="py-10 px-3 sm:px-10 md:px-20 min-h-screen flex flex-col items-center gap-y-6 mx-auto ">
      <div className="flex flex-col gap-y-3">
        <h3 className="font-bold text-4xl text-[#156b2c]">{event.title}</h3>
        <p className="font-semibold text-xl">{event.place}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center   gap-7">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-[250px] w-[250px] sm:h-[400px] sm:w-[400px]"
        />
        <div
          key={event.id}
          className="w-full flex flex-col  items-start justify-between "
        >
          <div className="w-full flex flex-col items-center gap-y-1 border  p-5">
            <div className="flex items-center">
              <p className="text-lg  font-bold">{event.startDate}</p> -{" "}
              <p className="text-lg  font-bold">{event.endDate}</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-1  p-5">
            <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
              <Clock />
              <div className="flex items-center">
                <p className="text-lg  font-bold">{event.startTime}</p> -{" "}
                <p className="text-lg  font-bold">{event.endTime}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-1  p-5">
            <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
              <MapPin /> {event.place}
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-1  p-5">
            <p className="text-lg  font-bold">{event.region}</p>
            <div className="flex items-center gap-x-1 text-sm text-[#156b2c] font-semibold">
              <Globe /> {event.typeOfEvent}
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-y-1  p-5">
            <Button
              className="flex items-center gap-x-2 bg-[#31ff38] hover:bg-[#156b2c]"
              data-testid="tickets-btn"
            >
              {" "}
              <Ticket /> TICKETS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
