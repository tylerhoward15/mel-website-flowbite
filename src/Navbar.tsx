import { DarkThemeToggle, Navbar } from 'flowbite-react'

function CustomNavbar() {
  return (
    <Navbar fluid className="sticky top-0 z-10">
      <Navbar.Brand href="./index.html">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap font-semibold dark:text-white">
          Melody Hollis
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="text-xl">
          About
        </Navbar.Link>
        <Navbar.Link href="#credits" className="text-xl">
          Credits
        </Navbar.Link>
        <Navbar.Link href="#gallery" className="text-xl">
          Gallery
        </Navbar.Link>
        <Navbar.Link href="#contact" className="text-xl">
          Contact
        </Navbar.Link>
        <Navbar.Link
          href="/Melody-Hollis-Resume.pdf"
          target="_blank"
          className="text-xl"
        >
          Resume
        </Navbar.Link>
        <Navbar.Link href="#">
          <DarkThemeToggle className="p-1" />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
