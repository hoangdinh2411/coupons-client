import Link from 'next/link'

interface AccordionProps {
  data: {
    name: string
    href: string
  }[]
  title: string
  type?: 'grid' | 'prose'
}

export default function Accordion({ data, title, type }: AccordionProps) {
  return (
    <>
      <summary
        className={`${type === 'prose' ? 'text-md mt-9 flex cursor-pointer font-semibold' : 'flex cursor-pointer justify-center text-2xl'}`}
      >
        <span
          className={`${type === 'prose' ? 'text-md w-4/5 md:w-2/3' : 'w-4/5 text-base leading-tight font-extrabold tracking-wider uppercase md:w-2/3 md:leading-normal'}`}
        >
          {title}
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
      {type === 'prose' ? (
        <div className="prose mt-9 w-4/5 text-sm md:w-2/3">
          {data.map((item) => (
            <p key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </p>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-center overflow-auto py-2 md:grid-cols-5">
          {data.map((item) => (
            <Link
              key={item.href}
              className="justify-left my-1 flex"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
