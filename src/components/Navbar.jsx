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

const navigation = [
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
        name: "Event Management",
        href: "#",
        subItems: [
          { name: "International Symposiums", href: "#" },
          { name: "International Conferences", href: "#" },
          { name: "International Seminars", href: "#" },
          { name: "Launching Ceremony", href: "#" },
          { name: "Trainings/Workshops", href: "#" },
        ],
      },
      { name: "Vendor Services", href: "#" },
      { name: "Presence in Oil & Gas Sector", href: "#" },
      { name: "Branding & Advertising", href: "#" },
      { name: "Facility Management Services", href: "#" },
      { name: "Construction", href: "#" },
      { name: "Property Advisors", href: "#" },
      { name: "Mines & Minerals", href: "#" },
    ],
  },
  { name: "Gallery", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  return (
    <Menubar>
      {navigation.map((item, index) => (
        <MenubarMenu key={index}>
          {
            <MenubarTrigger asChild>
              <Link className="cursor-pointer" to={item.href}>
                {item.name} {item.subItems && <MdKeyboardArrowDown size={20} />}
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
  );
}
