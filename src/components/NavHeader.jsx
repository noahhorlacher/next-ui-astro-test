import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from '@nextui-org/react'

export default function NavHeader() {
    const links = [{
        title: 'About',
        href: '/about'
    }, {
        title: 'Projects',
        href: '/projects'
    }, {
        title: 'Contact',
        href: '/contact'
    }]

    return <Navbar>
    <NavbarBrand>
      <p className="font-bold text-inherit">Noah Horlacher</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
            links.map(link => <NavbarItem key={link.title}>
                <Link color="foreground" href={link.href}>
                    {link.title}
                </Link>
            </NavbarItem>)
        }
    </NavbarContent>
  </Navbar>
}