import EntryCard from "./EntryCard";
import { useEntry } from "../context/EntryContext";

const EntryOverview = () => {
    const {entries } = useEntry();
 
    // sorting Entries by date (newest first) rather than newest entry in general
    const sortedEntries = [...entries].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

   return (
        <div className="flex flex-wrap gap-6 p-4 justify-start">
            {sortedEntries.map((entry) => (
                <EntryCard key={entry.date} {...entry} />
            ))}
            
        </div>
    );
};

export default EntryOverview;

