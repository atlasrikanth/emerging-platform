export interface ContentAnalysis {
  toxic: boolean;
  severity: number;
  categories: string[];
  timestamp: Date;
}

export interface Post {
  id: string;
  content: string;
  timestamp: Date;
  analysis?: ContentAnalysis;
  status: 'pending' | 'approved' | 'rejected';
}