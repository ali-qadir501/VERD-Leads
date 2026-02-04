
export interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export type Page = 'home' | 'about' | 'services' | 'impact' | 'leaders' | 'contact';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  companyType: string;
  revenue: string;
  challenges: string;
  source: string;
}
