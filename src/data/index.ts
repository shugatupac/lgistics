import { Service, Product, Testimonial, TeamMember, ContactInfo, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Customs Clearance',
    description: 'Expert handling of all documentation and procedures for smooth customs clearance of your imports and exports.',
    icon: 'PackageCheck',
  },
  {
    id: 2,
    title: 'Freight Forwarding',
    description: 'Efficient transportation solutions for your cargo by air, sea, or land to destinations worldwide.',
    icon: 'Ship',
  },
  {
    id: 3,
    title: 'Warehousing',
    description: 'Secure storage facilities with inventory management systems to keep your goods safe and organized.',
    icon: 'Warehouse',
  },
  {
    id: 4,
    title: 'Supply Chain Solutions',
    description: 'End-to-end supply chain management services tailored to optimize your logistics operations.',
    icon: 'GitBranch',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'PlayStation 5',
    description: 'Next-gen gaming console with ultra-high-speed SSD and ray tracing support.',
    category: 'Gaming',
    price: 499.99,
    imageUrl: 'https://images.pexels.com/photos/12719133/pexels-photo-12719133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip and advanced camera system.',
    category: 'Phones',
    price: 999.99,
    imageUrl: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'ROG Gaming Laptop',
    description: 'High-performance gaming laptop with RTX 4080 and 240Hz display.',
    category: 'Laptops',
    price: 1999.99,
    imageUrl: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Custom Gaming PC',
    description: 'Premium gaming desktop with RTX 4090 and Intel i9 processor.',
    category: 'Desktops',
    price: 2999.99,
    imageUrl: 'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Xbox Series X',
    description: 'Powerful gaming console with 4K gaming and Quick Resume.',
    category: 'Gaming',
    price: 499.99,
    imageUrl: 'https://images.pexels.com/photos/12719089/pexels-photo-12719089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'MacBook Pro 16"',
    description: 'Professional laptop with M2 Max chip and Mini-LED display.',
    category: 'Laptops',
    price: 2499.99,
    imageUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Operations Director',
    company: 'Global Imports Ltd',
    content: 'Aviance has transformed our import process. Their customs clearance expertise has reduced our processing time by 40% and saved us from countless regulatory headaches.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Supply Chain Manager',
    company: 'Tech Solutions Inc',
    content: 'We\'ve partnered with Aviance for over 5 years and they consistently deliver outstanding service. Their attention to detail and proactive communication makes them an invaluable partner.',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    position: 'CEO',
    company: 'Fusion Exports',
    content: 'Switching to Aviance was the best decision for our logistics needs. Their team has extensive knowledge of international trade regulations and always finds the most efficient solutions.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'David Morris',
    position: 'CEO & Founder',
    bio: 'With over 20 years in logistics and customs operations, David founded Aviance to provide client-focused clearing services that prioritize efficiency and compliance.',
    imageUrl: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Rebecca Wong',
    position: 'Operations Director',
    bio: 'Rebecca oversees all clearing operations, ensuring seamless processing of client shipments through customs and regulatory channels.',
    imageUrl: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Thomas Okello',
    position: 'Compliance Manager',
    bio: 'Thomas brings his extensive knowledge of international trade regulations to ensure all clearances meet legal requirements and avoid unnecessary delays.',
    imageUrl: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Sophia Patel',
    position: 'Client Relations Manager',
    bio: 'Sophia works directly with clients to understand their specific needs and coordinate tailored clearing solutions that exceed expectations.',
    imageUrl: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const contactInfo: ContactInfo = {
  address: '123 Logistics Way, Harbor District, Lagos',
  phone: '+234 123 456 7890',
  email: 'info@aviance-clearing.com',
  hours: 'Monday - Friday: 8am - 6pm',
};