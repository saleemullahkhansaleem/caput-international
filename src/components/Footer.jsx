import { services } from "@/pages/Home";
import { Link } from "react-router-dom";
import { navigation } from "./Navbar";

export default function Footer() {
  return (
    <footer className="bg-muted pt-12 dark text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-lg md:text-3xl font-bold text-foregroundMuted mb-8">
              <Link to="/" className="flex items-end gap-2">
                <img
                  src="/logo.png"
                  alt="logo"
                  height={100}
                  className="h-12 md:h-16"
                />{" "}
                <span className="pb-1 md:pb-2">CAPUT International</span>
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We are a leading company providing innovative solutions across
              various industries. Our commitment to excellence and customer
              satisfaction sets us apart.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {navigation[2]?.subItems?.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 py-4 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
