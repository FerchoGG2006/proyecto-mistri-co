export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  category: string;
  readTime: number;
  views: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: number; // en minutos
  category: string;
  tags: string[];
  publishedAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published' | 'archived';
  views: number;
  featured: boolean;
}

export interface Charla {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerBio: string;
  speakerImage?: string;
  date: Date;
  time: string;
  duration: number; // en minutos
  location: string;
  isVirtual: boolean;
  virtualLink?: string;
  maxAttendees?: number;
  currentAttendees: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  registrationOpen: boolean;
  price: number;
  currency: 'ARS' | 'USD';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  lastLogin: Date;
  createdAt: Date;
}

export interface AdminStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalVideos: number;
  publishedVideos: number;
  totalCharlas: number;
  upcomingCharlas: number;
  totalViews: number;
  monthlyViews: number;
}
