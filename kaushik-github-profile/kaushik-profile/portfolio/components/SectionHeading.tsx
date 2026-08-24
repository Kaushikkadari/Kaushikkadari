type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-sm text-mist sm:text-base">{description}</p>}
    </div>
  );
}
