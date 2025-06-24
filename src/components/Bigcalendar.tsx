import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);

const events = [
  {
    title: "Evento 1",
    start: dayjs("2025-06-24T12:00:00").toDate(),
    end: dayjs("2025-06-24T13:00:00").toDate(),
  },
  {
    title: "Evento 2",
    start: dayjs("2025-06-25T12:00:00").toDate(),
    end: dayjs("2025-06-25T13:00:00").toDate(),
  },
];

const Bigcalendar = () => {
  console.log(events); // validación útil
  return (
    <div style={{ height: "95vh", width: "80vw", margin: "auto" }}>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week", "day"]}
        startAccessor="start"
        endAccessor="end"
        min={dayjs("2025-01-01T07:00:00").toDate()}
        max={dayjs("2025-01-01T18:00:00").toDate()}
      />
    </div>
  );
};

export default Bigcalendar;
