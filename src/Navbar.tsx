import { DarkThemeToggle, Navbar } from 'flowbite-react'

function CustomNavbar() {
  return (
    <Navbar fluid rounded border>
      <Navbar.Brand href="./index.html">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Melody Hollis
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Credits</Navbar.Link>
        <Navbar.Link href="#">Gallery</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Resume</Navbar.Link>
        <Navbar.Link href="#">
          <DarkThemeToggle className="p-0" />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
