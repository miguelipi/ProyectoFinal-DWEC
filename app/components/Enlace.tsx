function Enlace({ href, texto }: EnlaceProps) {
  return (
    <a
      href={href}
      className="!text-white mx-3 no-underline decoration-none border-b-2 border-transparent transition-colors duration-300 hover:!text-red-500 hover:border-red-500 hover:no-underline"
      style={{ textDecoration: 'none' }}
    >
    {texto}
  </a>
  )
}

export default Enlace