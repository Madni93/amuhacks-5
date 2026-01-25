import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-14 px-4 md:px-6">
        <NavigationMenu className="w-full max-w-none z-10 flex justify-around">
          <div className="logo">
            <a>
              <img src="/assets/ahlogo-rounded.png" alt="Logo" className="h-12 w-12 w-auto rounded aspect-square object-cover" />
          </a>
          </div>
          <NavigationMenuList className="bg-none flex w-full justify-start gap-4 md:gap-6 lg:gap-8">
            <NavigationMenuItem>
              <button onClick={() => window.location.href = "/"} className="hidden md:flex lg:flex bg-transparent hover:text-[#349665]">Home</button>
              
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#71d2a1] data-[state=open]:bg-[#349665]">Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-75 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                  <ListItem href="#about-events" title="About">
                    About our events
                  </ListItem>
                  <ListItem href="#event-schedule" title="Schedule">
                    Event schedules and details.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#71d2a1] data-[state=open]:bg-[#349665]">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-75 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                  <ListItem href="#teams" title="Our Team">
                    Meet the people behind.
                  </ListItem>
                  <ListItem href="#footer" title="Contact Us">
                    Get in touch with us.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}