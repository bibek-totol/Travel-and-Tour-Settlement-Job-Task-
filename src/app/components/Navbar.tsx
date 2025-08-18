"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pic from "../../../public/assets/Rajasthan-Tours.webp";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        
        <img
          src={pic.src}
          alt="logo"
          className="w-40 h-12"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex z-30">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-black font-semibold">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Golden Triangle Tour</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/golden-triangle-ranthambore">
                          Golden-Triangle-Tour-With-Ranthambore
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/rajasthan-desert-safari">
                          Rajasthan Desert Safari Tour
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/kerala-backwaters">
                          Kerala Backwaters & Hill Stations
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Rajasthan Tour</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/kashmir-paradise-tour">
                          Kashmir Paradise Tour
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/ladakh-adventure">
                          Ladakh Adventure Tour
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/goa-beach-party">
                          Goa Beach & Party Tour
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Same Day Tour</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/andaman-islands">
                          Andaman Islands Tour
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/sikkim-darjeeling">
                          Sikkim & Darjeeling Delight
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/varanasi-spiritual">
                          Varanasi Spiritual Journey
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Weekend Tour</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-4 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/meghalaya-explorer">
                          Meghalaya Explorer Tour
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/golden_traingle_tour/varanasi-spiritual">
                          Varanasi Spiritual Journey
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/ContactPage" className="text-black font-semibold">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/About" className="text-black font-semibold">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 w-72">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="golden">
                    <AccordionTrigger>Golden Triangle Tour</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      <Link href="/golden_traingle_tour/golden-triangle-ranthambore">
                        Golden-Triangle-Tour-With-Ranthambore
                      </Link>
                      <Link href="/golden_traingle_tour/rajasthan-desert-safari">
                        Rajasthan Desert Safari Tour
                      </Link>
                      <Link href="/golden_traingle_tour/kerala-backwaters">
                        Kerala Backwaters & Hill Stations
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rajasthan">
                    <AccordionTrigger>Rajasthan Tour</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      <Link href="/golden_traingle_tour/kashmir-paradise-tour">
                        Kashmir Paradise Tour
                      </Link>
                      <Link href="/golden_traingle_tour/ladakh-adventure">
                        Ladakh Adventure Tour
                      </Link>
                      <Link href="/golden_traingle_tour/goa-beach-party">
                        Goa Beach & Party Tour
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="same">
                    <AccordionTrigger>Same Day Tour</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      <Link href="/golden_traingle_tour/andaman-islands">
                        Andaman Islands Tour
                      </Link>
                      <Link href="/golden_traingle_tour/sikkim-darjeeling">
                        Sikkim & Darjeeling Delight
                      </Link>
                      <Link href="/golden_traingle_tour/varanasi-spiritual">
                        Varanasi Spiritual Journey
                      </Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="weekend">
                    <AccordionTrigger>Weekend Tour</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      <Link href="/golden_traingle_tour/meghalaya-explorer">
                        Meghalaya Explorer Tour
                      </Link>
                      <Link href="/golden_traingle_tour/varanasi-spiritual">
                        Varanasi Spiritual Journey
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/ContactPage" className="text-lg font-semibold">
                  Contact
                </Link>
                <Link href="/About" className="text-lg font-semibold">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
