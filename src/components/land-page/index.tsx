import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

export default function HomeHeader(){

    return(

        <div className="flex justify-center gap-2 md:justify-start">
            <div className="flex">
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
</div>
          <a href="#" className="flex items-center gap-2 font-medium text-primary">
            <div className="flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground">
            <Image
            aria-hidden
            src="/icon-auxsolar.png"
            alt="aux solar"
            width={27}
            height={27}
            />
            </div>
            aux solar
          </a>
          <a href="#" className="flex items-end gap-2 font-medium text-primary">
            login
            <div className="flex items-end rounded-md text-primary-foreground">
            <Image
            aria-hidden
            src="/icon-auxsolar.png"
            alt="aux solar"
            width={27}
            height={27}
            />
            </div>
            
          </a>
        </div>
    )

}