import Link from 'next/link'

interface Category {
  name: string
  href: string
}

const categories: Category[] = [
  { name: 'Baby', href: '/coupons/baby' },
  { name: 'Beauty', href: '/coupons/beauty' },
  { name: 'Books', href: '/coupons/books-magazine-newspaper' },
  { name: 'Car Rentals', href: '/coupons/carrental' },
  { name: 'Cell Phones', href: '/coupons/cellphone-plans-accessories' },
  { name: 'Clothing', href: '/coupons/clothing-shoes-accessories' },
  { name: 'Cosmetics', href: '/coupons/cosmetics' },
  { name: 'Electronics', href: '/coupons/electronics' },
  { name: 'Fast Food', href: '/coupons/fastfood' },
  { name: 'Flights', href: '/coupons/flight' },
  { name: 'Flowers', href: '/coupons/flowers' },
  { name: 'Food Delivery', href: '/coupons/fooddelivery' },
  { name: 'Furniture', href: '/coupons/furniture' },
  { name: 'Home Improvement', href: '/coupons/home-improvement-tools' },
  { name: 'Hotels', href: '/coupons/hotel' },
  { name: 'Jewelry', href: '/coupons/jewelry-watches' },
  { name: 'Movie Theaters', href: '/coupons/movietheaters' },
  { name: 'Pets', href: '/coupons/pets' },
  { name: 'Photo', href: '/coupons/photo' },
  { name: 'Photo Prints', href: '/coupons/photo' },
  { name: 'Pizza', href: '/coupons/pizza' },
  { name: 'Restaurants', href: '/coupons/restaurants' },
  { name: 'Shoes', href: '/coupons/clothing-shoes-accessories' },
  { name: 'Toys', href: '/coupons/toys' },
  { name: 'Travel', href: '/coupons/travel' },
  { name: 'TV & Home Theater', href: '/coupons/tvs-home-theater' },
  { name: 'Video Games', href: '/coupons/gaming' },
]

export default function PopularCategories() {
  return (
    <details className="group mb-8 border-b border-gray-200 pb-8 md:mt-20">
      <summary className="flex cursor-pointer justify-center text-2xl">
        <span className="w-4/5 text-base leading-tight font-extrabold tracking-wider uppercase md:w-2/3 md:leading-normal">
          Popular Categories
        </span>
        <div className="relative right-auto flex w-1/5 justify-end md:w-1/3">
          <svg
            className="absolute top-0 mx-7 h-5 w-5 rotate-0 fill-current stroke-1 opacity-100 transition-all duration-300 group-open:scale-50 group-open:rotate-90 group-open:opacity-0"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 8.8-7.2 16-16 16H240v176c0 8.844-7.156 16.01-16 16.01s-16-7.21-16-16.01V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99s16 7.15 16 15.99v176h176c8.8 0 16 7.2 16 16" />
          </svg>
          <svg
            className="absolute top-0 mx-7 h-5 w-5 -rotate-90 fill-current stroke-1 opacity-0 transition-all duration-300 group-open:rotate-0 group-open:opacity-100"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 8.8-7.2 16-16 16H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h384c8.8 0 16 7.2 16 16" />
          </svg>
        </div>
      </summary>
      <div className="grid grid-cols-2 justify-center overflow-auto py-2 md:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.href}
            className="justify-left my-1 flex"
            href={category.href}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </details>
  )
}
