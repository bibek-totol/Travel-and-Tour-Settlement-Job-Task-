"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, MenuIcon, XIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Golden-Triangle-Tour-With-Pushkar",
    href: "/golden_traingle_tour/Golden-Triangle-Tour-With-Pushkar",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-evenly  px-4 py-3 md:px-8">
        
        <Link href="/" className="text-xl font-bold">
          Explore
        </Link>

        
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link className="text-black text-bold" href="/" >Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Golden Traingle Tour</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-2 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
                    {components.map((component) => (
                      <ListItem key={component.title}  href={component.href}>
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>




              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-2 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
                    {components.map((component) => (
                      <ListItem key={component.title}  href={component.href}>
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>




              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-2 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
                    {components.map((component) => (
                      <ListItem key={component.title}  href={component.href}>
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>



              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-2 md:w-[150px] md:grid-cols-1 lg:w-[200px]">
                    {components.map((component) => (
                      <ListItem key={component.title}  href={component.href}>
                        {component.title}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              
            </NavigationMenuList>
          </NavigationMenu>
        </div>

     
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6 " />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 w-64">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/docs" className="text-lg font-medium">
                  Docs
                </Link>
                <Link href="/components" className="text-lg font-medium">
                  Components
                </Link>
                <Link href="/blog" className="text-lg font-medium">
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
