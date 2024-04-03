import { ServiceCard } from "~/components/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <main className="min-h-screen container mx-auto">
      <h1 className="text-4xl text-center py-8 font-semibold">Planes 📻</h1>

      <section className="w-full flex gap-4 md:p-4 flex-wrap">
        <ServiceCard price={200} name="Basico - Promoción" />

        <ServiceCard black price={200} name="Intermedio" />

        <ServiceCard name="Personalizado" />
      </section>
    </main>
  );
}
