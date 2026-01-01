const products = [
    {
        id: 1,
        name: 'Cat Coffee Break',
        subtitle: 'A cozy companion for your morning ritual',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug1/mug1-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.png',
        description: 'Start your day with a smile. This charming ceramic mug features an adorable cat enjoying a coffee break, bringing warmth and whimsy to every sip. Perfect for cat lovers and coffee enthusiasts alike.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity — ideal for your favorite brew',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Custom-designed artwork'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 2,
        name: 'Happy Paw Prints',
        subtitle: 'Celebrate your love for pets',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug2/mug2-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug2/mug2-2.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.png',
        description: 'A delightful tribute to your furry friends. This cheerful design features playful paw prints that bring joy to your daily routine, making every cup feel special.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Vibrant, fade-resistant design'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 3,
        name: 'Cat Print',
        subtitle: 'Simple elegance for everyday moments',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug3/mug3-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug3/mug3-2.jpg',

        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.png',
        description: 'Clean lines and minimalist design come together in this elegant cat-print mug. A timeless piece that adds sophistication to any collection.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Contemporary design aesthetic'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 4,
        name: 'Best Cat Mom',
        subtitle: 'Perfect for the ultimate cat parent',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug4/mug4-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.png',
        description: 'Celebrate your status as the best cat parent around. This beautifully designed mug is the perfect gift for cat moms or a delightful treat for yourself.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Heartfelt design perfect for gifting'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 5,
        name: 'Best Cat Dad',
        subtitle: 'For the proud cat father',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug5/mug5-3.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail5.png',
        description: 'Proudly display your cat dad status. This thoughtfully designed mug celebrates the special bond between cats and their dads with style and humor.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Perfect Father\'s Day gift'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 6,
        name: 'Be Brave',
        subtitle: 'No bad vibes, just good energy',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug6/mug6-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail6.png',
        description: 'Start each day with courage and positivity. This empowering mug serves as a daily reminder to embrace bravery and keep negative energy at bay.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Inspiring affirmation design'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 7,
        name: 'In Control',
        subtitle: 'Empowerment in every sip',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-4.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug7/mug7-5.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail7.png',
        description: 'Feel powerful and centered with this affirmation mug. A beautiful reminder that you are in control of your journey, one sip at a time.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Mindful design for daily inspiration'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 8,
        name: 'Start Over',
        subtitle: 'New beginnings, fresh perspective',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug8/mug8-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail8.png',
        description: 'Every cup is a chance to begin anew. This thoughtful design celebrates the power of fresh starts and the beauty of second chances.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Motivational message design'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
    {
        id: 9,
        name: 'Self Love',
        subtitle: 'Celebrate yourself every day',
        price: 24.99,
        images: [
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-1.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-2.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-3.jpg',
            'https://mugculture.s3.us-east-2.amazonaws.com/Mug9/mug9-4.jpg',
        ],
        thumbnail: 'https://mugculture.s3.us-east-2.amazonaws.com/thumbnails/thumbnail9.png',
        description: 'A beautiful reminder to prioritize yourself. This affirming mug encourages self-care and celebrates the importance of loving yourself first.',
        highlights: [
            'Premium ceramic construction',
            '11oz capacity',
            'Dishwasher and microwave safe',
            'Glossy white finish',
            'Self-care focused design'
        ],
        specs: {
            capacity: '11oz',
            material: 'Ceramic',
            finish: 'Gloss White',
            dimensions: '4.5" × 3.5"',
            care: 'Dishwasher & Microwave Safe'
        }
    },
];

export default products;