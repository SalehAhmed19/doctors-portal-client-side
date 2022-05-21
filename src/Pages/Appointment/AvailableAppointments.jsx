import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:4000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-3">
      <h4 className="text-secondary text-xl text-center font-bold my-5">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          treatment={treatment}
          date={date}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
