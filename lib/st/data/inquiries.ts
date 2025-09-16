export interface Inquiry {
  id: string;
  vendorId: string;
  vendorName: string;
  buyerName: string;
  buyerEmail: string;
  buyerCompany: string;
  message: string;
  moq: string;
  status: 'new' | 'read' | 'responded' | 'closed';
  createdAt: string;
  updatedAt: string;
}

// Mock inquiries data
export const inquiries: Inquiry[] = [
  {
    id: 'inq-001',
    vendorId: 'vendor-001',
    vendorName: 'Seoul Seaweed Co.',
    buyerName: 'John Smith',
    buyerEmail: 'john@globalfoods.com',
    buyerCompany: 'Global Foods Inc.',
    message: 'Interested in your premium seaweed products for our retail chain.',
    moq: '1000-5000',
    status: 'new',
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z'
  },
  {
    id: 'inq-002',
    vendorId: 'vendor-002',
    vendorName: 'K-Food Industries',
    buyerName: 'Maria Garcia',
    buyerEmail: 'maria@europeanimports.eu',
    buyerCompany: 'European Imports Ltd.',
    message: 'Looking for Korean ramen products with halal certification.',
    moq: '500-1000',
    status: 'read',
    createdAt: '2025-01-14T14:20:00Z',
    updatedAt: '2025-01-15T09:15:00Z'
  },
  {
    id: 'inq-003',
    vendorId: 'vendor-003',
    vendorName: 'Heritage Foods',
    buyerName: 'David Chen',
    buyerEmail: 'david@asianmarket.com',
    buyerCompany: 'Asian Market Co.',
    message: 'Need traditional Korean meal sets for restaurant supply.',
    moq: '100-500',
    status: 'responded',
    createdAt: '2025-01-13T16:45:00Z',
    updatedAt: '2025-01-15T11:30:00Z'
  }
];

// Helper functions
export function addInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Inquiry {
  const newInquiry: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  inquiries.push(newInquiry);
  return newInquiry;
}

export function updateInquiryStatus(id: string, status: Inquiry['status']): boolean {
  const inquiry = inquiries.find(i => i.id === id);
  if (inquiry) {
    inquiry.status = status;
    inquiry.updatedAt = new Date().toISOString();
    return true;
  }
  return false;
}

export function getInquiriesByVendor(vendorId: string): Inquiry[] {
  return inquiries.filter(i => i.vendorId === vendorId);
}
