import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  NavItem,
  HeaderNav,
  StyledHeader,
  HeaderAvatar,
  HamburguerMenuButton,
} from "@/styles/header.styles";
import Logo from "./LogoComponent";
import { NavItemType } from "@/types/header.types";

const navItems: NavItemType[] = [
  { text: "Personagens", href: "/character" },
  { text: "Filmes", href: "/movie" },
  { text: "HQs", href: "/hq" },
];

const HeaderComponent = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const getLinkOpacity = (href: string): number => {
    return pathname === href ? 1 : 0.25;
  };

  return (
    <StyledHeader>
      <Logo />
      <HamburguerMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div />
        <div />
        <div />
      </HamburguerMenuButton>
      <HeaderNav isopen={isMenuOpen ? isMenuOpen.toString() : undefined}>
        {navItems.map((item, index) => (
          <NavItem key={index} opacity={getLinkOpacity(item.href)}>
            <Link href={item.href}>{item.text}</Link>
          </NavItem>
        ))}
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
};

export default HeaderComponent;
