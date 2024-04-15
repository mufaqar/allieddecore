interface ProjectData {
    img: string;
    title: string;
    location: string;
    id: string; // Add the slug property
    category: String;
    date: String;
    size:String;
    images: string[];
    about:String
}

const data: ProjectData[] = [
    {
        img: '/features/f1.jpg',
        title: 'Sunset Villa',
        location: 'Lahore',
        id: '1',
        category: 'Residential',
        date: 'January 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.'
    },
    {
        img: '/features/f2.webp',
        title: 'Golden Mile Penthouse',
        location: 'Islamabad, PK',
        id: '2',
        category: 'Retail',
        date: 'February 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f3.jpg',
        title: 'Premier Golf & Country Club',
        location: 'Pakistan',
        id: '3',
        category: 'Residential',
        date: 'March 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f4.webp',
        title: 'World Class Fitness Center',
        location: 'Islamabad',
        id: '4',
        category: 'Retail',
        date: 'April 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f5.jpg',
        title: 'Kauko Apartments',
        location: 'Pakistan',
        id: '5',
        category: 'Commercial',
        date: 'May 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f6.webp',
        title: 'Dufry / Regstaer Office',
        location: 'Islamabad',
        id: '6',
        category: 'Hospitality',
        date: 'June 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f7.jpg',
        title: 'One Hyde Park',
        location: 'Islamabad, PK',
        id: '7',
        category: 'Hospitality',
        date: 'July 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f8.jpg',
        title: 'Bocconchino Soho',
        location: 'Islamabad, PK',
        id: '8',
        category: 'Retail',
        date: 'August 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f9.webp',
        title: 'The Lyceum and Hotel',
        location: 'Pakistan',
        id: '9',
        category: 'Hospitality',
        date: 'March 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f10.jpg',
        title: 'White Rabbit Restaurant ',
        location: 'Pakistan',
        id: '10',
        category: 'Residential',
        date: 'August 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f11.webp',
        title: 'Elysian Residence',
        location: 'Pakistan',
        id: '11',
        category: 'Commercial',
        date: 'July 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f12.webp',
        title: 'Clouds Villa',
        location: 'Pakistan',
        id: '12',
        category: 'Hospitality',
        date: 'August 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f13.jpg',
        title: 'Bathhouse Complex with Restaurant',
        location: 'Pakistan ',
        id: '13',
        category: 'Commercial',
        date: 'June 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f14.webp',
        title: 'Lalique Office',
        location: 'Islamabad',
        id: '14',
        category: 'Residential',
        date: 'January 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f15.webp',
        title: 'Sakhalin Restaurant',
        location: 'Islamabad',
        id: '15',
        category: 'Retail',
        date: 'September 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f16.webp',
        title: 'Madison Park',
        location: 'Islamabad',
        id: '16',
        category: 'Hospitality',
        date: 'August 2024',
        size:'886m',
        images: ['/features/f2_1.jpg', '/features/f2_2.jpg', '/features/f2_3.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f17.webp',
        title: 'Embassy House',
        location: 'Pakistan',
        id: '17',
        category: 'Residential',
        date: 'Feburary 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'
    },
    {
        img: '/features/f18.jpg',
        title: 'Balchug Residence',
        location: 'Pakistan',
        id: '18',
        category: 'Commercial',
        date: 'April 2024',
        size:'886m',
        images: ['/features/f1.jpg', '/features/f2.webp', '/features/f3.jpg','/features/f5.jpg'],
        about:'Sunset Villa is a striking example of modern architecture nestled in a picturesque setting, capturing the essence of contemporary luxury. Designed with meticulous attention to detail, this exceptional residence offers a seamless blend of sleek lines, expansive glass windows, and captivating outdoor spaces.Perched on a hillside, the villa boasts breathtaking panoramic views of the surrounding landscape, particularly accentuated during the enchanting sunset hours. The design harmoniously integrates indoor and outdoor living, allowing residents to immerse themselves in the natural beauty of the setting.'

    },

]


// const generateSlug = (title:string) => {
//     return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
// };

// const dataWithSlug = data.map((item) => {
//     const slug = generateSlug(item.title);
//     return { ...item, slug };
// });

export default data