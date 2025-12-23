import { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResultCardProps {
  title: string;
  description: string;
  type: 'ngo' | 'campaign' | 'volunteer' | 'action';
  link?: string;
  metadata?: {
    label: string;
    value: string;
  }[];
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  icon?: ReactNode;
}

const typeStyles = {
  ngo: 'border-l-4 border-l-primary',
  campaign: 'border-l-4 border-l-destructive',
  volunteer: 'border-l-4 border-l-accent-foreground',
  action: 'border-l-4 border-l-secondary',
};

const ResultCard = ({ title, description, type, link, metadata, badge, icon }: ResultCardProps) => {
  return (
    <Card className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${typeStyles[type]}`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 rounded-lg bg-accent">
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              {badge && (
                <Badge variant={badge.variant || 'default'} className="mt-1">
                  {badge.text}
                </Badge>
              )}
            </div>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-3 line-clamp-2">
          {description}
        </CardDescription>
        {metadata && metadata.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {metadata.map((item, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-muted/30 text-muted-foreground">
                <span className="font-medium">{item.label}:</span> {item.value}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
