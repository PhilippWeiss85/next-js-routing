import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { BUILD_ID_FILE } from "next/dist/shared/lib/constants";
import { redirect } from "next/dist/server/api-utils";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref>
          <StyledAnchor active={pathname === "/"}>Home</StyledAnchor>
        </Link>

        <Link href="/product" passHref>
          <StyledAnchor active={pathname === "/product"}>Product</StyledAnchor>
        </Link>
        <Link href="/team" passHref>
          <StyledAnchor active={pathname === "/team"}>Team</StyledAnchor>
        </Link>
        <Link href="/account" passHref>
          <StyledAnchor active={pathname === "/account"}>Account</StyledAnchor>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledAnchor = styled.a`
  background-color: ${({ active }) => (active ? "white" : "red")};
  color: ${({ active }) => (active ? "red" : "blue")};
`;
