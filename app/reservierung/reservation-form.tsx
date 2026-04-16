"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00",
];

const PERSON_OPTIONS = Array.from({ length: 7 }, (_, i) => i + 1);

function isOpenDay(date: Date): boolean {
  const day = date.getDay();
  return day >= 2 && day <= 6; // Tue–Sat
}

function formatDateInput(date: Date): string {
  return date.toISOString().split("T")[0];
}

function getMinDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDateInput(tomorrow);
}

const schema = z.object({
  datum: z.string().min(1, "Bitte wählen Sie ein Datum"),
  uhrzeit: z.string().min(1, "Bitte wählen Sie eine Uhrzeit"),
  personen: z.number().min(1).max(7),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  telefon: z.string().min(6, "Bitte geben Sie eine Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  nachricht: z.string().optional(),
  datenschutz: z.boolean().refine((v) => v === true, "Bitte stimmen Sie der Datenschutzerklärung zu"),
});

type FormData = z.infer<typeof schema>;

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [dateError, setDateError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { personen: 2 },
  });

  const onSubmit = async (data: FormData) => {
    // Validate that the selected date is a valid open day
    const selectedDate = new Date(data.datum + "T12:00:00");
    if (!isOpenDay(selectedDate)) {
      setDateError("Wir sind nur Dienstag–Samstag geöffnet. Bitte wählen Sie einen anderen Tag.");
      return;
    }
    setDateError("");

    // In demo mode: send mailto or fetch to API route
    try {
      await fetch("/api/reservierung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // In demo: ignore errors, show success anyway
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-sage-pale flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl font-light text-charcoal mb-3">
          Danke für Ihre Anfrage!
        </h2>
        <p className="text-charcoal-muted leading-relaxed max-w-sm mx-auto">
          Wir melden uns innerhalb von 2 Stunden zur Bestätigung –
          per Telefon oder E-Mail.
        </p>
        <p className="mt-4 text-sm text-charcoal-muted">
          Wir freuen uns auf Ihren Besuch.
        </p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full px-4 py-3 bg-cream border rounded-sm text-charcoal text-sm",
      "placeholder:text-charcoal-muted focus:outline-none transition-colors duration-150",
      "font-sans",
      hasError
        ? "border-terracotta focus:border-terracotta"
        : "border-cream-border focus:border-charcoal-muted"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Datum + Uhrzeit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="datum" className="block label-sm text-charcoal mb-2">
            Datum <span className="text-terracotta">*</span>
          </label>
          <input
            id="datum"
            type="date"
            min={getMinDate()}
            {...register("datum")}
            className={inputClass(!!errors.datum || !!dateError)}
            aria-describedby={errors.datum ? "datum-error" : undefined}
          />
          {(errors.datum || dateError) && (
            <p id="datum-error" className="mt-1.5 text-xs text-terracotta">
              {errors.datum?.message || dateError}
            </p>
          )}
          <p className="mt-1 text-xs text-charcoal-muted">Nur Di – Sa möglich</p>
        </div>

        <div>
          <label htmlFor="uhrzeit" className="block label-sm text-charcoal mb-2">
            Uhrzeit <span className="text-terracotta">*</span>
          </label>
          <select
            id="uhrzeit"
            {...register("uhrzeit")}
            className={inputClass(!!errors.uhrzeit)}
            aria-describedby={errors.uhrzeit ? "uhrzeit-error" : undefined}
          >
            <option value="">Uhrzeit wählen</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot} Uhr
              </option>
            ))}
          </select>
          {errors.uhrzeit && (
            <p id="uhrzeit-error" className="mt-1.5 text-xs text-terracotta">
              {errors.uhrzeit.message}
            </p>
          )}
        </div>
      </div>

      {/* Personen */}
      <div>
        <label className="block label-sm text-charcoal mb-2">
          Personenzahl <span className="text-terracotta">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {PERSON_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setValue("personen", n, { shouldValidate: true })}
              className={cn(
                "w-10 h-10 text-sm font-medium rounded-sm border transition-all duration-150",
                watch("personen") === n
                  ? "bg-charcoal text-cream border-charcoal"
                  : "border-cream-border text-charcoal hover:border-charcoal-muted bg-cream"
              )}
              aria-pressed={watch("personen") === n}
              aria-label={`${n} Person${n === 1 ? "" : "en"}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            className="px-3 h-10 text-xs border border-dashed border-cream-border text-charcoal-muted rounded-sm"
            onClick={() => {
              window.location.href = "tel:+49TELEFONNUMMER";
            }}
            title="Für 8+ Personen bitte direkt anrufen"
          >
            8+
          </button>
        </div>
      </div>

      {/* Name + Telefon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block label-sm text-charcoal mb-2">
            Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Ihr vollständiger Name"
            {...register("name")}
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-terracotta">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="telefon" className="block label-sm text-charcoal mb-2">
            Telefon <span className="text-terracotta">*</span>
          </label>
          <input
            id="telefon"
            type="tel"
            autoComplete="tel"
            placeholder="+49 ..."
            {...register("telefon")}
            className={inputClass(!!errors.telefon)}
          />
          {errors.telefon && (
            <p className="mt-1.5 text-xs text-terracotta">{errors.telefon.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block label-sm text-charcoal mb-2">
          E-Mail <span className="text-terracotta">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="ihre@email.de"
          {...register("email")}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-terracotta">{errors.email.message}</p>
        )}
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" className="block label-sm text-charcoal mb-2">
          Nachricht{" "}
          <span className="text-charcoal-muted font-normal normal-case text-[11px]">
            (optional – Allergien, besondere Anlässe)
          </span>
        </label>
        <textarea
          id="nachricht"
          rows={3}
          placeholder="z.B. Glutenunverträglichkeit, Geburtstag, Hochzeitstag..."
          {...register("nachricht")}
          className={cn(inputClass(false), "resize-none")}
        />
      </div>

      {/* Datenschutz */}
      <div className="flex items-start gap-3">
        <input
          id="datenschutz"
          type="checkbox"
          {...register("datenschutz")}
          className="mt-0.5 w-4 h-4 accent-terracotta cursor-pointer"
        />
        <label htmlFor="datenschutz" className="text-sm text-charcoal-muted leading-snug cursor-pointer">
          Ich habe die{" "}
          <a href="/datenschutz" className="text-charcoal underline hover:text-terracotta transition-colors">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
          Reservierungsanfrage zu. <span className="text-terracotta">*</span>
        </label>
      </div>
      {errors.datenschutz && (
        <p className="-mt-4 text-xs text-terracotta">{errors.datenschutz.message}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full py-4 label-sm rounded-sm transition-all duration-200",
          "bg-charcoal text-cream hover:bg-charcoal-soft",
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Wird gesendet ..." : "Anfrage absenden"}
      </button>

      <p className="text-xs text-charcoal-muted text-center">
        * Pflichtfelder · Wir antworten innerhalb von 2 Stunden
      </p>
    </form>
  );
}
