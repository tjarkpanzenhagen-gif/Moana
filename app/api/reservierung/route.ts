import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.datum || !data.uhrzeit) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 });
    }

    // DEMO MODE: Log the reservation to console
    // In production: integrate with Resend, Nodemailer, or Supabase
    console.log("Neue Reservierungsanfrage:", {
      datum: data.datum,
      uhrzeit: data.uhrzeit,
      personen: data.personen,
      name: data.name,
      telefon: data.telefon,
      email: data.email,
      nachricht: data.nachricht || "–",
      eingegangen: new Date().toISOString(),
    });

    // TODO Production integration:
    // Option A – Resend (Email):
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({ from, to, subject, html })
    //
    // Option B – Supabase:
    //   import { createClient } from '@supabase/supabase-js'
    //   await supabase.from('reservierungen').insert([data])

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Reservierungs-API Fehler:", error);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
