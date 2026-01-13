// components/Navbar.tsx

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Adjust path based on your setup
import { cn } from "@/lib/utils"; // Utility for className concatenation (included in Shadcn setup)
// import Link from "next/link"; // If using React Router, import Link from "react-router-dom"; otherwise, use <a> for simple links

const ListItem = ({ className, title, children, href }: { className?: string; title: string; children: React.ReactNode; href: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href} // Use <Link to={href}> if React Router
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="w-full flex h-14 px-4 md:px-6">
        <NavigationMenu className="w-full max-w-none">
          <NavigationMenuList className="flex w-full justify-start gap-6">
            <NavigationMenuItem>
              <a href="/" className={navigationMenuTriggerStyle()}> {/* Use <Link to="/"> if React Router */}
                Home
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/products/widgets" title="Widgets">
                    Customizable widgets for your app.
                  </ListItem>
                  <ListItem href="/products/gadgets" title="Gadgets">
                    Advanced gadgets with AI integration.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/about/team" title="Our Team">
                    Meet the people behind the product.
                  </ListItem>
                  <ListItem href="/about/contact" title="Contact Us">
                    Get in touch with support.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/docs" className={navigationMenuTriggerStyle()}> {/* Use <Link to="/docs"> if React Router */}
                Documentation
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}