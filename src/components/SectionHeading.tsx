interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, description, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-semibold ${light ? "text-cream" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-cream/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
