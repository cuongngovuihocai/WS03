export interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string[];
  avatarUrl: string;
  credentials: string[];
}

export interface WorkshopStage {
  id: number;
  title: string;
  duration: string;
  equipment: string;
  description: string;
  activities: string[];
  apps?: AppDemo[];
  links?: { label: string; url: string; secondary?: boolean }[];
  references?: { label: string; url: string }[];
  note?: string;
}

export interface AppDemo {
  name: string;
  url: string;
  category: string;
  hasApiLimit: boolean;
  qrCodeUrl?: string;
  isMain?: boolean;
  isRemix?: boolean;
}

export interface DesignPrinciple {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface PreparationItem {
  id: string;
  title: string;
  description: string;
  guideUrl?: string;
  required: boolean;
}
