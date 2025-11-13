
export default function AboutHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section data-name="about-hero" className="w-full rounded overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl phone:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-base phone:text-lg text-black/80">{subtitle}</p>
        </div>

      </div>
    </section>
  );
}
