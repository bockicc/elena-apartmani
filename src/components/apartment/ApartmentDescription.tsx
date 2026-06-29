interface Props {
  description: string;
}

export default function ApartmentDescription({ description }: Props) {
  const firstLetter = description.charAt(0);
  const rest = description.slice(1);

  return (
    <div className="space-y-4">
      <p className="text-charcoal-muted leading-relaxed text-base md:text-lg">
        <span className="float-left text-5xl md:text-6xl font-serif text-oak leading-none mr-3 mt-1 select-none">
          {firstLetter}
        </span>
        {rest}
      </p>
    </div>
  );
}
