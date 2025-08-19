import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list one-page-scroll-menu">
        <li className="dropdown scrollToLink">
          <Link href="#home">Home</Link>
          <ul>
            <li>
              <Link href="/">Home One</Link>
            </li>
            <li>
              <Link href="/index-2">Home Two</Link>
            </li>
            <li>
              <Link href="/index-3">Home Three</Link>
            </li>
            <li>
              <Link href="/index-4">Home Four</Link>
            </li>
            <li className="dropdown">
              <a href="#">Header Styles</a>
              <ul>
                <li>
                  <Link href="/">Header One</Link>
                </li>
                <li>
                  <Link href="/index-2">Header Two</Link>
                </li>
                <li>
                  <Link href="/index-3">Header Three</Link>
                </li>
                <li>
                  <Link href="/index-4">Header Four</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">One Page Styles</a>
              <ul>
                <li>
                  <Link href="/index-one-page">One Page Styles One</Link>
                </li>
                <li>
                  <Link href="/index2-one-page">One Page Styles Two</Link>
                </li>
                <li>
                  <Link href="/index3-one-page">One Page Styles Three</Link>
                </li>
                <li>
                  <Link href="/index4-one-page">One Page Styles Four</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="scrollToLink">
            <Link href="#services">Services</Link>
        </li>
        <li className="scrollToLink">
            <Link href="#about">About Us</Link>
        </li>
        <li className="scrollToLink">
            <Link href="#projects">projects</Link>
        </li>
        <li className="scrollToLink">
            <Link href="#testimonial">Testimonial</Link>
        </li>
        <li className="scrollToLink">
            <Link href="#team">Team</Link>
        </li>
        <li className="scrollToLink">
            <Link href="#blog">Blog</Link>
        </li>
      </ul>
    </>
  );
}
