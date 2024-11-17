import { AcmeLogo } from "@/assets/images/AcmeLogo";
import { logout } from "@/services/auth";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  const onClick = (): void => {
    logout(router);
  };

  return (
    <Navbar className="bg-slate-700">
      <NavbarBrand className="text-white">
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="default"
            variant="flat"
            className="text-white"
            onClick={onClick}
          >
            ログアウト
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
