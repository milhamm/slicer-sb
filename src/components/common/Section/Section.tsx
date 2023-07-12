import { cn } from "@/lib/styles";
import { Title } from "../ui";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="w-full">
      <Title className={cn("mb-4 font-semibold text-2xl")}>{title}</Title>
      {children}
    </section>
  );
};

export { Section };
