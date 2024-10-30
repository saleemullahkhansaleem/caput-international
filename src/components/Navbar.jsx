import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavbarMobile } from ".";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "What We Do",
    href: "/services", // Updated href for "What We Do"
    subItems: [
      {
        name: "Event Management",
        href: "/services/event-management", // Updated href for "Event Management"
        subItems: [
          {
            name: "International Symposiums",
            href: "/services/event-management#symposiums",
          },
          {
            name: "International Conferences",
            href: "/services/event-management#conferences",
          },
          {
            name: "International Seminars",
            href: "/services/event-management#seminars",
          },
          {
            name: "Launching Ceremony",
            href: "/services/event-management#launching-ceremony",
          },
          {
            name: "Trainings/Workshops",
            href: "/services/event-management#trainings-workshops",
          },
        ],
      },
      { name: "Vendor Services", href: "/services/vendor-services" },
      {
        name: "Presence in Oil & Gas Sector",
        href: "/services/presence-in-oil-and-gas-sector",
      },
      {
        name: "Branding & Advertising",
        href: "/services/branding-and-advertising",
      },
      {
        name: "Facility Management Services",
        href: "/services/facility-management-services",
      },
      { name: "Construction", href: "/services/construction" },
      { name: "Property Advisors", href: "/services/property-advisors" },
      { name: "Mines & Minerals", href: "/services/mines-and-minerals" },
    ],
  },
  { name: "Gallery", href: "/gallery" }, // Updated href for "Gallery"
  { name: "Contact Us", href: "/contact" }, // Updated href for "Contact Us"
];

export default function Navbar() {
  return (
    <>
      <NavbarMobile navigation={navigation} />
      <Menubar className="hidden lg:flex">
        {navigation.map((item, index) => (
          <MenubarMenu key={index}>
            {
              <MenubarTrigger asChild>
                <Link className="cursor-pointer" to={item.href}>
                  {item.name}{" "}
                  {item.subItems && <MdKeyboardArrowDown size={20} />}
                </Link>
              </MenubarTrigger>
            }
            {item.subItems && (
              <MenubarContent>
                {item.subItems.map((subItem, ind) => (
                  <MenubarSub key={ind}>
                    {subItem.subItems ? (
                      <>
                        <MenubarSubTrigger>{subItem.name}</MenubarSubTrigger>
                        <MenubarSubContent>
                          {subItem.subItems.map((sub, i) => (
                            <MenubarItem key={i} asChild>
                              <Link className="cursor-pointer" to={sub.href}>
                                {sub.name}
                              </Link>
                            </MenubarItem>
                          ))}
                        </MenubarSubContent>
                      </>
                    ) : (
                      <MenubarItem asChild>
                        <Link to={subItem.href}>{subItem.name}</Link>
                      </MenubarItem>
                    )}
                  </MenubarSub>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  );
}
