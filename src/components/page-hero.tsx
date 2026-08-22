export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[58vh] min-h-[420px] items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        width={1600}
        height={1067}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="dark text-foreground relative z-10 mx-auto max-w-3xl px-5 pt-20 text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}
