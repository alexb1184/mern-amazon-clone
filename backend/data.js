import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name:'alex',
            email:'admin@example.com',
            password: bcrypt.hashSync('1245', 8),
            isAdmin: true,
        },
        {
            name:'jon',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            
            name:'Adidas Hoodies',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 20,
            brand:'Adidas',
            rating: 5,
            numReviews: 10,
            description:'high quality product',
        },
        {
            
            name:'Nike Fit Shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price: 110,
            countInStock: 12,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 30,
            description:'high quality product',
        },
        {
            
            name:'Lacoste Pants',
            category: 'Pants',
            image:'/images/p3.jpg',
            price: 170,
            countInStock: 0,
            brand:'Adidas',
            rating: 3.5,
            numReviews: 10,
            description:'high quality product',
        },
        {
            
            name:'Puma Hoodies',
            category: 'Shirts',
            image:'/images/p4.jpg',
            price: 220,
            countInStock: 25,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 10,
            description:'high quality product',
        },
        {
            
            name:'CK Hoodies',
            category: 'Shirts',
            image:'/images/p5.jpg',
            price: 120,
            countInStock: 15,
            brand:'Adidas',
            rating: 5,
            numReviews: 20,
            description:'high quality product',
        },
        {
            
            name:'DG Hoodies',
            category: 'Shirts',
            image:'/images/p6.jpg',
            price: 140,
            countInStock: 23,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 10,
            description:'high quality product',
        },
    ]
}

export default data;