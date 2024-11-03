import { AcmeLogo } from "@/assets/images/AcmeLogo";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export const Header: React.FC = () => {
  return (
    <Navbar className="bg-slate-700">
      <NavbarBrand className="text-white">
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            className="text-white"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
