import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "./bigCalendar.css";

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
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week", "day"]}
        startAccessor="start"
        endAccessor="end"
        min={dayjs("2025-01-01T07:00:00").toDate()}
        max={dayjs("2025-01-01T18:00:00").toDate()}
        style={{ flex: 1 }}
      />
    </div>
  );
};

export default Bigcalendar;
