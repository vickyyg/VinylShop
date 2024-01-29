import img1 from './aerosmith.webp'
import img2 from './badreligion.webp'
import img3 from './aliceinchains.png'
import img4 from './blackflag.jpg'
import img5 from './bowie.webp'
import img6 from './deadkennedys.webp'
import img7 from './death.jpg'
import img8 from './guns.webp'
import img9 from './megadeth.png'
import img10 from './metallica.webp'
import img11 from './misfits.webp'
import img12 from './pantera.jpg'
import img13 from './queen.jpg'
import img14 from './ramones.webp'
import img15 from './sepultura.jpg'
import img16 from './sexpistols.webp'
import img17 from './skid.jpg'
import img18 from './slayer.webp'
import img19 from './slipknot.webp'
import img20 from './suicidal.webp'
import image1 from './cdbilly.jpg'
import image2 from './cdblondie.webp'
import image3 from './cdcannibal.webp'
import image4 from './cddri.jpg'
import image5 from './cdmarilyn.webp'
import image6 from './cdmichael.png'
import image7 from './cdnapalm.jpg'
import image8 from './cdnirvana.webp'
import image9 from './cdobituary.jpg'
import image10 from './cdqueen.webp'
import image11 from './cdrage.jpg'
import image12 from './cdsmiths.avif'
import image13 from './cdsuicidal.jpg'
import image14 from './cdthecure.jpg'
import image15 from './cdpantera.png'




let allproducts = [
    {
        id:1,
        name: 'Aerosmith',
        category: 'rocks',
        img: img1,
        price: 10.00
    },
    {
        id:2,
        name: 'Bad Religion',
        category: 'punks',
        img: img2,
        price: 9.00 
    },
    {
        id:3,
        name: 'Alice in Chains',
        category: 'metals',
        img: img3,
        price: 12.00
    }, {
        id:4,
        name: 'Black Flag',
        category: 'punks',
        img: img4,
        price: 8.00
    },
    {
        id:5,
        name: 'David Bowie',
        category: 'rocks',
        img: img5 ,
        price: 9.99
    },
    {
        id:6,
        name: 'Dead Kennedys',
        category: 'punks',
        img: img6,
        price: 10.00
    }, {
        id:7,
        name: 'Death',
        category: 'metals',
        img: img7,
        price: 7.00
    },
    {
        id:8,
        name: 'Guns and Roses',
        category: 'rocks',
        img: img8,
        price: 9.00
    },
    {
        id:9,
        name: 'Megadeth',
        category: 'metals',
        img: img9,
        price: 8.00
        },
     {
        id:10,
        name: 'Metallica',
        category: 'metals',
        img: img10,
        price: 9.00
    },
    {
        id:11,
        name: 'Misfits',
        category: 'punks',
        img: img11,
        price: 11.00
    },
    {
        id:12,
        name: 'Pantera',
        category: 'metals',
        img: img12,
        price: 9.99
    }, {
        id:13,
        name: 'Queen',
        category: 'rocks',
        img: img13,
        price: 8.00
    },
    {
        id:14,
        name: 'Ramones',
        category: 'punks',
        img: img14,
        price: 8.99
    },
    {
        id:15,
        name: 'Sepultura',
        category: 'metals',
        img: img15,
        price: 9.99
    }, {
        id:16,
        name: 'Sex Pistols',
        category: 'punks',
        img: img16,
        price: 9.00
    },
    {
        id:17,
        name: 'Skid Row',
        category: 'rocks',
        img: img17,
        price: 7.99
    },
    {
        id:18,
        name: 'Slayer',
        category: 'metals',
        img: img18,
        price: 8.00
    },
    {
        id:19,
        name: 'Slipknot',
        category: 'metals',
        img: img19,
        price: 12.00
    },
    {
        id:20,
        name: 'Suicidal Tendencies',
        category: 'metals',
        img: img20,
        price: 11.99
    },
    {
        id:21,
        name: 'Billy Idol',
        category: 'rocks',
        img: image1,
        price: 34
    },
    {
        id:22,
        name: 'Blondie',
        category: 'rocks',
        img: image2,
        price: 34
    },
    {
        id:23,
        name: 'Cannibal Corpse',
        category: 'metals',
        img: image3,
        price: 34
    }, {
        id:24,
        name: 'D.R.I',
        category: 'metals',
        img: image4,
        price: 34
    },
    {
        id:25,
        name: 'Marilyn Manson',
        category: 'metals',
        img: image5 ,
        price: 34
    },
    {
        id:26,
        name: 'Michael Jackson',
        category: 'rocks',
        img: image6,
        price: 34
    }, {
        id:27,
        name: 'Napalm Death',
        category: 'metals',
        img: image7,
        price: 34
    },
    {
        id:28,
        name: 'Nirvana',
        category: 'rocks',
        img: image8,
        price: 34
    },
    {
        id:29,
        name: 'Obituary',
        category: 'metals',
        img: image9,
        price: 34
    }, {
        id:30,
        name: 'Queen',
        category: 'rocks',
        img: image10,
        price: 34
    },
    {
        id:31,
        name: 'Rage Against the Machine',
        category: 'metals',
        img: image11,
        price: 34
    },
    {
        id:32,
        name: 'The Smiths',
        category: 'rocks',
        img: image12,
        price: 34
    }, {
        id:33,
        name: 'Suicidal Tendencies',
        category: 'metals',
        img: image13,
        price: 34
    },
    {
        id:34,
        name: 'The Cure',
        category: 'rocks',
        img: image14,
        price: 34
    },
    {
        id:35,
        name: 'Pantera',
        category: 'metals',
        img: image15,
        price: 34
    }
]

export default allproducts;