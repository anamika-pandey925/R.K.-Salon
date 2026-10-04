/**
 * R.K Salon — Central Configuration & Data File
 * ================================================
 * Edit this file to update all salon details across the website.
 * All phone numbers, addresses, social links, and content are
 * managed from here for easy maintenance.
 */

// ─── Contact & Business Info ─────────────────────────────────────
export const salonInfo = {
  name: 'R.K Salon',
  tagline: 'Your Beauty, Our Passion.',
  phone: '+91 XXXXX XXXXX',           // Replace with real phone
  whatsapp: '+91XXXXXXXXXX',           // Replace with real WhatsApp number (no spaces)
  email: 'info@rksalon.com',           // Replace with real email
  contact: {
    phone: '+91 XXXXX XXXXX',
    email: 'info@rksalon.com',
  },
  address: '123 Main Street, City Name, State, PIN Code', // Replace with real address
  mapEmbedUrl: '',                     // Paste Google Maps embed URL here
  openingHours: {
    days: 'Monday – Sunday',
    time: '10:00 AM – 8:00 PM',
  },
  socialLinks: {
    instagram: '#',                    // Replace with real Instagram URL
    facebook: '#',                     // Replace with real Facebook URL
    youtube: '#',                      // Replace with real YouTube URL
    twitter: '#',                      // Replace with real Twitter/X URL
  },
  copyright: `© ${new Date().getFullYear()} R.K Salon. All Rights Reserved.`,
};

// ─── Navigation Links ────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero Section ────────────────────────────────────────────────
export const heroData = {
  heading: 'Your Beauty, Our Passion.',
  subheading: 'Experience premium beauty and salon services designed to make you look and feel your best.',
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
  trustBadges: [
    { icon: 'Users', label: 'Professional Stylists' },
    { icon: 'Gem', label: 'Premium Products' },
    { icon: 'Heart', label: 'Personalized Service' },
  ],
};

// ─── About Section ───────────────────────────────────────────────
export const aboutData = {
  heading: 'Welcome to R.K Salon',
  description:
    'At R.K Salon, we believe that beauty is an experience, not just a service. Our team of skilled professionals is dedicated to providing exceptional beauty, hair, and grooming services in a comfortable and welcoming environment. We combine modern techniques with premium products to deliver results that exceed your expectations.',
  highlights: [
    { icon: 'Award', title: 'Experienced Professionals', text: 'Our team consists of trained and certified beauty experts.' },
    { icon: 'Sparkles', title: 'Quality Products', text: 'We use only premium, trusted beauty brands and products.' },
    { icon: 'Zap', title: 'Modern Techniques', text: 'Stay ahead with the latest trends and advanced beauty techniques.' },
    { icon: 'Heart', title: 'Personalized Attention', text: 'Every client receives customized care tailored to their needs.' },
    { icon: 'ShieldCheck', title: 'Hygienic Environment', text: 'We maintain the highest standards of cleanliness and hygiene.' },
  ],
  image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
};

// ─── Services Data ───────────────────────────────────────────────
export const serviceCategories = [
  {
    category: 'Hair',
    icon: 'Scissors',
    services: [
      { name: 'Haircut & Styling', description: 'Precision cuts and contemporary styling tailored to your personality.', image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80' },
      { name: 'Hair Spa', description: 'Deep conditioning treatments for nourished, silky-smooth hair.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80' },
      { name: 'Hair Coloring', description: 'From subtle highlights to bold transformations with premium colors.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
      { name: 'Hair Treatment', description: 'Restorative treatments for damaged, dry, or frizzy hair.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80' },
      { name: 'Blow Dry', description: 'Professional blow-dry for a flawless, salon-finished look.', image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80' },
    ],
  },
  {
    category: 'Skin & Beauty',
    icon: 'Flower2',
    services: [
      { name: 'Facial', description: 'Rejuvenating facials for glowing, healthy skin.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
      { name: 'Cleanup', description: 'Deep cleansing to remove impurities and refresh your skin.', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
      { name: 'Skin Care', description: 'Customized skincare routines for every skin type.', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80' },
      { name: 'Bleach', description: 'Safe and effective bleaching for a brighter complexion.', image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80' },
      { name: 'Threading', description: 'Precise threading for perfectly shaped brows and smooth skin.', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80' },
    ],
  },
  {
    category: 'Makeup',
    icon: 'Palette',
    services: [
      { name: 'Party Makeup', description: 'Glamorous looks for parties and special occasions.', image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80' },
      { name: 'Bridal Makeup', description: 'Stunning bridal looks to make your special day unforgettable.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80' },
      { name: 'Engagement Makeup', description: 'Elegant makeup for your engagement celebration.', image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80' },
      { name: 'Event Makeup', description: 'Professional makeup for any event or occasion.', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80' },
    ],
  },
  {
    category: 'Nails',
    icon: 'Paintbrush',
    services: [
      { name: 'Manicure', description: 'Luxurious hand care with expert nail shaping and polish.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
      { name: 'Pedicure', description: 'Relaxing pedicure for beautiful, healthy feet.', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80' },
      { name: 'Nail Art', description: 'Creative nail designs to express your unique style.', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80' },
    ],
  },
];

// ─── Special Offers ──────────────────────────────────────────────
export const specialOffers = [
  {
    title: 'Bridal Beauty Package',
    description: 'Complete bridal makeover including makeup, hairstyling, skin prep, and more for your special day.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    tag: 'Most Popular',
  },
  {
    title: 'Hair & Skin Combo',
    description: 'Comprehensive hair treatment paired with a rejuvenating facial for a complete refresh.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
    tag: 'Best Value',
  },
  {
    title: 'Couple Grooming Package',
    description: 'A premium grooming experience for couples — hair, skin, and relaxation together.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    tag: 'New',
  },
  {
    title: 'Festive Beauty Package',
    description: 'Get ready for celebrations with our head-to-toe festive beauty package.',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
    tag: 'Seasonal',
  },
];

// ─── Why Choose Us ───────────────────────────────────────────────
export const whyChooseUs = [
  { icon: 'Sparkles', title: 'Professional Experts', description: 'Our skilled team brings years of experience and passion to every service.' },
  { icon: 'Gem', title: 'Premium Products', description: 'We exclusively use high-quality, trusted beauty brands for the best results.' },
  { icon: 'Heart', title: 'Personalized Care', description: 'Every treatment is customized to suit your unique needs and preferences.' },
  { icon: 'ShieldCheck', title: 'Hygienic & Comfortable', description: 'A clean, sanitized, and relaxing environment for your peace of mind.' },
  { icon: 'CalendarCheck', title: 'Easy Appointment Booking', description: 'Book your visit effortlessly online or via phone at your convenience.' },
  { icon: 'Star', title: 'Customer Satisfaction', description: 'Hundreds of happy clients trust us for their beauty and grooming needs.' },
];

// ─── Gallery Images ──────────────────────────────────────────────
export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', alt: 'Salon interior', category: 'Salon' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', alt: 'Hair coloring', category: 'Hair' },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80', alt: 'Makeup session', category: 'Makeup' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', alt: 'Nail art', category: 'Nails' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Facial treatment', category: 'Beauty' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80', alt: 'Hair styling', category: 'Hair' },
  { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80', alt: 'Beauty treatment', category: 'Beauty' },
  { src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80', alt: 'Pedicure service', category: 'Nails' },
  { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80', alt: 'Hair treatment', category: 'Hair' },
  { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80', alt: 'Makeup look', category: 'Makeup' },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80', alt: 'Salon setup', category: 'Salon' },
  { src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80', alt: 'Nail design', category: 'Nails' },
];

// ─── Reviews (Sample — Replace with real reviews) ────────────────
export const reviews = [
  {
    name: 'Sample Client A',
    rating: 5,
    review: 'Absolutely loved the service! The staff was professional, friendly, and the overall experience was amazing. Will definitely be coming back.',
    service: 'Hair Styling',
  },
  {
    name: 'Sample Client B',
    rating: 5,
    review: 'R.K Salon is my go-to place for all beauty treatments. The hygiene standards are top-notch and the results are always perfect.',
    service: 'Facial',
  },
  {
    name: 'Sample Client C',
    rating: 5,
    review: 'Had my bridal makeup done here and it was absolutely stunning. The team understood exactly what I wanted. Highly recommend!',
    service: 'Bridal Makeup',
  },
  {
    name: 'Sample Client D',
    rating: 4,
    review: 'Great salon with excellent services. The hair spa treatment was incredibly relaxing and my hair felt so much healthier afterwards.',
    service: 'Hair Spa',
  },
  {
    name: 'Sample Client E',
    rating: 5,
    review: 'The nail art here is creative and long-lasting. The staff is talented and pays attention to every detail. Love this place!',
    service: 'Nail Art',
  },
  {
    name: 'Sample Client F',
    rating: 5,
    review: 'Best salon experience I have ever had. From the moment you walk in, you feel welcomed. The quality of service is unmatched.',
    service: 'Full Service',
  },
];

// ─── Appointment Form: Service Options ──────────────────────────
export const appointmentServices = [
  'Haircut & Styling',
  'Hair Spa',
  'Hair Coloring',
  'Hair Treatment',
  'Blow Dry',
  'Facial',
  'Cleanup',
  'Skin Care',
  'Bleach',
  'Threading',
  'Party Makeup',
  'Bridal Makeup',
  'Engagement Makeup',
  'Event Makeup',
  'Manicure',
  'Pedicure',
  'Nail Art',
];
