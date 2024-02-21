import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome styles

import { Banner } from "./components/Banner";
import { NavbarSimple } from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarSimple />
      <Banner />
    </div>
  );
}
