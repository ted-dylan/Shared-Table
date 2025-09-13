import { Product } from '../types';
export const products: Product[] = [
  { id: 'p-001', name: 'Premium Seasoned Seaweed', vendorId: 'v-001', price: 12.99, currency: 'USD', category: 'Seasoned Seaweed', tags: ['HACCP','ISO 22000'], thumbnail: '/images/seaweed.jpg', createdAt: '2025-09-01' },
  { id: 'p-002', name: 'Instant Korean Ramen', vendorId: 'v-002', price: 8.5, currency: 'USD', category: 'Ramen', tags: ['FDA','HACCP'], thumbnail: '/images/ramen.jpg', createdAt: '2025-09-02' },
  { id: 'p-003', name: 'Traditional Korean Meal Set', vendorId: 'v-003', price: 24.99, currency: 'USD', category: 'Meal Kit', tags: ['Organic','HACCP'], thumbnail: '/images/mealkit.jpg', createdAt: '2025-09-02' },
  { id: 'p-004', name: 'Organic Brown Rice Cakes', vendorId: 'v-004', price: 15.99, currency: 'USD', category: 'Rice Products', tags: ['Organic','Non-GMO'], thumbnail: '/images/ricecakes.jpg', createdAt: '2025-09-03' },
  { id: 'p-005', name: 'Premium Kimchi', vendorId: 'v-005', price: 6.99, currency: 'USD', category: 'Kimchi', tags: ['HACCP'], thumbnail: '/images/kimchi.jpg', createdAt: '2025-09-03' },
  { id: 'p-006', name: 'Handmade Dumplings', vendorId: 'v-006', price: 10.99, currency: 'USD', category: 'Dumplings', tags: ['HACCP'], thumbnail: '/images/dumplings.jpg', createdAt: '2025-09-04' },
  { id: 'p-007', name: 'Korean Barley Tea', vendorId: 'v-007', price: 4.5, currency: 'USD', category: 'Beverages', tags: ['Non-GMO'], thumbnail: '/images/barleytea.jpg', createdAt: '2025-09-04' }
];
