import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Highlights } from "@/components/Highlights";
import { MenuPreview } from "@/components/MenuPreview";
import { EventsPreview } from "@/components/EventsPreview";
import { Gallery } from "@/components/Gallery";
import { LocationHours } from "@/components/LocationHours";
import { ReservationForm } from "@/components/ReservationForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Marquee />
        <Highlights />
        <MenuPreview />
        <EventsPreview />
        <LocationHours />
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}
