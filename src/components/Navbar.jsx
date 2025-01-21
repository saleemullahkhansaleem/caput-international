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

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "What We Do",
    href: "#",
    subItems: [
      {
        name: "Launching Ceremony of the Edge Mall - Faisalabad",
        href: "/edge-mall-ceremony",
      },
      {
        name: "Event Management",
        href: "/services/event-management",
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
        href: "/services/oil-gas-sector",
      },
      {
        name: "Branding & Advertising",
        href: "/services/branding-advertising",
      },
      {
        name: "Facility Management Services",
        href: "/services/facility-management",
      },
      { name: "Construction", href: "/services/construction" },
      { name: "Property Advisors", href: "/services/property-advisors" },
      {
        name: "Mines & Minerals",
        href: "/services/mines-minerals",
        // subItems: [
        //   {
        //     name: "Construction And Industrial Minerals Group",
        //     href: "/services/mines-minerals#construction-industrial",
        //   },
        //   {
        //     name: "Dimension Stone",
        //     href: "/services/mines-minerals#dimension-stone",
        //   },
        //   {
        //     name: "Fuel Minerals",
        //     href: "/services/mines-minerals#fuel-minerals",
        //   },
        //   { name: "Gemstones", href: "/services/mines-minerals#gemstones" },
        //   {
        //     name: "Base/ Metallic Minerals Group",
        //     href: "/services/mines-minerals#base-metallic",
        //   },
        // ],
      },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
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
                        <MenubarSubTrigger>
                          <Link to={subItem.href}>{subItem.name}</Link>
                        </MenubarSubTrigger>
                        <MenubarSubContent>
                          {subItem.subItems.map((sub, i) => (
                            <MenubarItem
                              className="cursor-pointer"
                              key={i}
                              asChild
                            >
                              <Link to={sub.href}>{sub.name}</Link>
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
