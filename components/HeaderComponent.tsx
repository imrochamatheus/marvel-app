import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  NavItem,
  HeaderNav,
  HeaderAvatar,
  StyledHeader,
} from "@/styles/header.styles";
import Logo from "./LogoComponent";

export default function HeaderComponent() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <Logo />
      <HeaderNav>
        <NavItem active={pathname === "/character"}>
          <Link href="/character">Personagens</Link>
        </NavItem>

        <NavItem active={pathname === "/movie"}>
          <Link href="/movie">Filmes</Link>
        </NavItem>

        <NavItem active={pathname === "/hq"}>
          <Link href="/hq">HQs</Link>
        </NavItem>
      </HeaderNav>
      <HeaderAvatar>
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={30}
          height={30}
          style={{ width: "3rem", height: "3rem" }}
        />
      </HeaderAvatar>
    </StyledHeader>
  );
}
