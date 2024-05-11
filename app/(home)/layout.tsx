"use client";

import { StyledMain } from "@/styles/home.styles";

import HeaderComponent from "@/components/HeaderComponent";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledMain>
      <HeaderComponent />
      {children}
    </StyledMain>
  );
}
