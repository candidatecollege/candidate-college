import { Notification, Search } from "./svg";

export default function SearchNav() {
  return (
    <div className="border-r  flex gap-4 px-8 border-r-primary">
      <button className="rounded-full border border-gray p-4">
        <Search />
      </button>
      <button className="rounded-full border border-gray p-4">
        <Notification />
      </button>
    </div>
  );
}
