const imageData = [
    {
        id: 1,
        title: 'Sun set',
        img: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['Brown background', 'Wallpaper', 'Abergavenny']
    },
    {
        id: 2,
        title: 'Nature',
        img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80',
        tags: ['Hd backgrounds', 'Green Wallpaper']
    },
    {
        id: 3,
        title: 'Flowers',
        img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
        tags: ['Flower', 'Plant']
    },
    {
        id: 4,
        title: 'Sun rise',
        img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80',
        tags: ['Mountain & Pictures', 'Hd Backgrounds']
    },
    {
        id: 5,
        title: 'Spirituality',
        img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Tree Images & Pictures','Washington']
    },
    {
        id: 6,
        title: 'Island',
        img: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80',
        tags: ['Beaver Dam', 'USA']
    },
    {
        id: 7,
        title: 'Oceans',
        img: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
        tags: ['Sea', 'Hd Ocean Wallpapers']
    },
    {
        id: 8,
        title: 'Wolf',
        img: 'https://images.unsplash.com/photo-1564166174574-a9666f590437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Wolf Images', 'Wild']
    },
    {
        id: 9,
        title: 'Safari',
        img: 'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Wildlife', 'Animal Images & Pictures']
    },
    {
        id: 10,
        title: 'Stones',
        img: 'https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['Rock', 'Balance', 'Wellness']
    },
    {
        id: 11,
        title: 'Reptile',
        img: 'https://images.unsplash.com/photo-1610629651605-0b181ad69aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Jurong Bird Park', 'Tanjong King', 'Singapore']
    },
    {
        id: 12,
        title: 'Butterfly',
        img: 'https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['Animals Images', 'Butterfly Images', 'Insect']
    },
    {
        id: 13,
        title: 'Sunflower',
        img: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
        tags: ['Spring Images', 'Flower Images']
    },
    {
        id: 14,
        title: 'Peach',
        img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1585&q=80',
        tags: ['Peach', 'Flora', 'Dahila']
    },
    {
        id: 15,
        title: 'Purple',
        img: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        tags: ['Hd Purple Wallpaper', 'SunSet Images']
    },
    {
        id: 16,
        title: 'Parrot',
        img: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Parrot', 'Birds', 'Animal Images & Pictures']
    },
    {
        id: 17,
        title: 'Waterfall',
        img: 'https://images.unsplash.com/photo-1508459855340-fb63ac591728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
        tags: ['Peaceful Nature', 'Fall', 'Waterfall Landscape']
    },
    {
        id: 18,
        title: 'Night',
        img: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80',
        tags: ['Nature Images', 'Night', 'Sky Wallpaper']
    }

];
export default imageData;