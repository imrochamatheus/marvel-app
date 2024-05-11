"use client";

import styled from "styled-components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header>
        <h1>Logo</h1>
        <h1>Header</h1>
        <div>
          <h1>Profile</h1>
        </div>
      </Header>
      <main>{children}</main>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;
