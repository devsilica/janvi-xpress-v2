import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        center && "mx-auto text-center"
      )}
    >
      <h2 className="font-manrope text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}