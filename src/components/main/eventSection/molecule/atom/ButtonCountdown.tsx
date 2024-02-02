import type { Event, EventCountdowns } from "@/app/page";
export default function ButtonCountdown({
  eventCountdowns,
  event,
}: {
  eventCountdowns: EventCountdowns;
  event: Event;
}) {
  return (
    <button className="bg-secondary text-primary w-max rounded-[20px] px-6 py-2 text-sm font-semibold lg:mr-4">
      {`${eventCountdowns[event.slug]?.days}d ${
        eventCountdowns[event.slug]?.hours
      }h ${eventCountdowns[event.slug]?.minutes}m ${
        eventCountdowns[event.slug]?.seconds
      }s`}
    </button>
  );
}
