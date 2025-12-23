import { ReactNode } from 'react';

interface CategorySectionProps {
  title: string;
  description: string;
  icon: ReactNode;
  count: number;
  children: ReactNode;
}

const CategorySection = ({ title, description, icon, count, children }: CategorySectionProps) => {
  if (count === 0) return null;

  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            {title}
            <span className="text-sm font-normal text-muted-foreground">({count})</span>
          </h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;
