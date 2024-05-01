"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import NextEventsMap from "./NextEventsMap";
import Button from "../Button";

const todayDate = new Date();
const newDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;

export default function EventSection() {
  const [eventsList, setEventsList] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("eventsList")
        .select("*")
        .gt("display_until_date", newDate)
        .order("start_date", { ascending: true })
        .limit(2);

      if (error) {
        console.error("Error:", error.message);
        return;
      }
      
      if (data) {
        setEventsList(data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="px-4">
      <div className="text-center text-3xl ">
        <h1 className="my-3 text-4xl md:text-5xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Upcoming Events
        </h1>

        {/* orange box container */}
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-auto mb-5">
          {eventsList.length === 0 ? (
            <h3 className="text-4xl text-black dark:text-white my-10">
              No events scheduled at the moment, please check back soon!
            </h3>
          ) : (
            eventsList.map?.((nextEvents) => (
              <NextEventsMap key={nextEvents.id} data={nextEvents} />
            ))
          )}
        </div>
      </div>
      <div className="w-full flex justify-end mb-16 mt-10">
        <Button text={"More Events"} location={"/events"} />
      </div>
    </section>
  );
}
