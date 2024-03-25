interface ProjectData {
    img: string;
    title: string;
    location: string;
    slug: string; // Add the slug property
    category:String
  }

  const data: ProjectData[] = [
    {
    img: '/features/f1.jpg',
    title: 'Sunset Villa',
    location: 'Los Angeles, US',
    slug: '',
    category:'Residential'
},
{
    img: '/features/f2.webp',
    title: 'Golden Mile Penthouse',
    location: 'London, United Kingdom',
    slug: '',
    category:'Retail'
},
{
    img: '/features/f3.jpg',
    title: 'Premier Golf & Country Club',
    location: 'Europe',
    slug: '',
    category:'Residential'
},
{
    img: '/features/f4.webp',
    title: 'World Class Fitness Center',
    location: 'Moscow, Russia',
    slug: '',
    category:'Retail'
},
{
    img: '/features/f5.jpg',
    title: 'Kauko Apartments',
    location: 'Moscow, ',
    slug: '',
    category:'Commercial'
},
{
    img: '/features/f6.webp',
    title: 'Dufry / Regstaer Office',
    location: 'Moscow, Russia',
    slug: '',
    category:'Hospitality'
},
{
    img: '/features/f7.jpg',
    title: 'One Hyde Park',
    location: 'London, UK',
    slug: '',
    category:'Hospitality'
},
{
    img: '/features/f8.jpg',
    title: 'Bocconchino Soho',
    location: 'London, UK',
    slug: '',
    category:'Retail'
},
{
    img: '/features/f9.webp',
    title: 'The Lyceum and Hotel',
    location: 'Lithuania, Vilnius',
    slug: '',
    category:'Hospitality'
},
{
    img: '/features/f10.jpg',
    title: 'White Rabbit Restaurant ',
    location: 'Moscow',
    slug: '',
    category:'Residential'
},
{
    img: '/features/f11.webp',
    title: 'Elysian Residence',
    location: 'Frankfurt, Germany',
    slug: '',
    category:'Commercial'
},
{
    img: '/features/f12.webp',
    title: 'Clouds Villa',
    location: 'Europe',
    slug: '',
    category:'Hospitality '
},
{
    img: '/features/f13.jpg',
    title: 'Bathhouse Complex with Restaurant',
    location: 'Moscow region',
    slug: '',
    category:'Commercial'
},
{
    img: '/features/f14.webp',
    title: 'Lalique Office',
    location: 'Moscow, Russia',
    slug: '',
    category:'Residential'
},
{
    img: '/features/f15.webp',
    title: 'Sakhalin Restaurant',
    location: 'Moscow, Russia',
    slug: '',
    category:'Retail'
},
{
    img: '/features/f16.webp',
    title: 'Madison Park',
    location: 'London, United Kingdom',
    slug: '',
    category:'Hospitality'
},
{
    img: '/features/f17.webp',
    title: 'Embassy House',
    location: 'Lithuania, Vilnius',
    slug: '',
    category:'Residential'
},
{
    img: '/features/f18.jpg',
    title: 'Balchug Residence',
    location: 'Moscow',
    slug: '',
    category:'Commercial'
},

]


const generateSlug = (title:string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const dataWithSlug = data.map((item) => {
    const slug = generateSlug(item.title);
    return { ...item, slug };
});

export default dataWithSlug