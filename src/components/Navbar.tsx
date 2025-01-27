import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' bg-gray-200  '>
      <article className='flex gap-4 justify-center items-center font-bold  p-4'>
        <Link href='/'>Home</Link>
        <Link href='/admin'>Admin</Link>
        <Link href='/vendor'>Vendor</Link>
        <Link href='/user'>User</Link>
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
      </article>
    </div>
  )
}

export default Navbar
