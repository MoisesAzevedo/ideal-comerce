export interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
  maxItems?: number;
  showHome?: boolean;
  homeLabel?: string;
  homeHref?: string;
}