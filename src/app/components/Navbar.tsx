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


export function Navbar() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-evenly  px-4 py-3 md:px-8">
        
        <Link href="/" className="text-xl font-bold">
          Explore
        </Link>

        
        <div className="hidden md:flex z-30">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link className="text-black text-bold" href="/" >Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              



              <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="/DynamicServicepage1">Golden Triangle Tour </Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/golden-triangle-ranthambore">Golden-Triangle-Tour-With-Ranthambore</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/rajasthan-desert-safari">Rajasthan Desert Safari Tour</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/kerala-backwaters">Kerala Backwaters & Hill Stations</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="/DynamicServicepage2">Rajasthan Tour</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/kashmir-paradise-tour">Kashmir Paradise Tour</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/ladakh-adventure">Ladakh Adventure Tour</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/goa-beach-party">Goa Beach & Party Tour</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="/DynamicServicepage3">Same Day Tour</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
              <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/andaman-islands">Andaman Islands Tour</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/sikkim-darjeeling">Sikkim & Darjeeling Delight</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/varanasi-spiritual">Varanasi Spiritual Journey</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuTrigger><Link href="/DynamicServicepage4">Weekend Tour</Link></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
              <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/meghalaya-explorer">Meghalaya Explorer Tour</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/golden_traingle_tour/varanasi-spiritual">Varanasi Spiritual Journey</Link>
                </NavigationMenuLink>
                
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>



        <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link className="text-black text-bold" href="/ContactPage" >Contact</Link>
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
