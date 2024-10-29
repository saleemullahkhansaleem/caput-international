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
    href: "#",
    subItems: [
      {
        name: "Our Story",
        href: "#",
        subItems: [
          { name: "History", href: "#" },
          { name: "Mission", href: "#" },
          { name: "Vision", href: "#" },
        ],
      },
      {
        name: "Our Team",
        href: "#",
        subItems: [
          { name: "Leadership", href: "#" },
          { name: "Employees", href: "#" },
        ],
      },
    ],
  },
  {
    name: "What We Do",
    href: "#",
    subItems: [
      {
        name: "Services",
        href: "#",
        subItems: [
          { name: "Consulting", href: "#" },
          { name: "Development", href: "#" },
          { name: "Design", href: "#" },
        ],
      },
      {
        name: "Products",
        href: "#",
        subItems: [
          { name: "Software", href: "#" },
          { name: "Hardware", href: "#" },
        ],
      },
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
              <Link to={item.href}>
                {item.name} {item.subItems && <MdKeyboardArrowDown size={20} />}
              </Link>
            </MenubarTrigger>
          }
          {item.subItems && (
            <MenubarContent>
              {item.subItems.map((subItem, ind) => (
                <MenubarSub key={ind}>
                  <MenubarSubTrigger>{subItem.name}</MenubarSubTrigger>
                  {subItem.subItems ? (
                    <MenubarSubContent>
                      {subItem.subItems.map((sub, i) => (
                        <MenubarItem key={i} asChild>
                          <a href={sub.href}>{sub.name}</a>
                        </MenubarItem>
                      ))}
                    </MenubarSubContent>
                  ) : (
                    <MenubarItem asChild>
                      <a href={subItem.href}>{subItem.name}</a>
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
