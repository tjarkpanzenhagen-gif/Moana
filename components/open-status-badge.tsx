import { getOpenStatus } from "@/lib/open-status";
import { cn } from "@/lib/utils";

interface Props {
  compact?: boolean;
}

export default function OpenStatusBadge({ compact }: Props) {
  const status = getOpenStatus();

  if (compact) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 label-sm",
          status.isOpen ? "text-sage" : "text-charcoal-muted"
        )}
      >
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            status.isOpen ? "bg-sage animate-pulse" : "bg-charcoal-muted"
          )}
        />
        {status.isOpen
          ? `Geöffnet bis ${status.closesAt}`
          : `Öffnet ${status.nextOpenDay} ${status.opensAt}`}
      </span>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-sm label-sm",
        status.isOpen
          ? "bg-sage-pale text-sage"
          : "bg-cream-dark text-charcoal-muted"
      )}
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          status.isOpen ? "bg-sage animate-pulse" : "bg-charcoal-muted"
        )}
      />
      {status.isOpen
        ? `Heute geöffnet bis ${status.closesAt}`
        : status.nextOpenDay
        ? `Nächste Öffnung: ${status.nextOpenDay} ab ${status.opensAt}`
        : "Aktuell geschlossen"}
    </div>
  );
}
