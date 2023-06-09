const products = [
    {
        id: 1,
        name: 'Cat | Coffee Break | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.png'
    },
    {
        id: 2,
        name: 'Happy Paw Prints | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug2/mug2-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug2/mug2-2.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.png'
    },
    {
        id: 3,
        name: 'Cat Print | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug3/mug3-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug3/mug3-2.jpg',

        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.png'
    },
    {
        id: 4,
        name: 'Best Cat Mom | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.png'
    },
    {
        id: 5,
        name: 'Best Cat Dad | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-3.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail5.png'
    },
    {
        id: 6,
        name: 'Be Brave | No Bad Vibes | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail6.png'
    },
    {
        id: 7,
        name: 'Affirmation | In Control | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail7.png'
    },
    {
        id: 8,
        name: 'Affirmation | Start Over | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail8.png'
    },
    {
        id: 9,
        name: 'Self Love | Affirmation | 11oz Gloss White Mug | Custom Designed Ceramic Mug',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail9.png'
    },
];

export default products;