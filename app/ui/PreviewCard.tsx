"use client";

import {
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
  StyledPreviewCard,
} from "../styles/previewCard";

import { PreviewCardProps } from "../types/previewCard.types";

export default function PreviewCard({
  title = "Homem-Aranha",
  description = "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
  image = "/spider_man_cover.png",
  href = "https://www.marvel.com/characters/captain-america-steve-rogers/on-screen",
}: PreviewCardProps) {
  return (
    <StyledPreviewCard
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <a href={href}>Ver detalhes</a>
        </CardFooter>
      </CardContent>
    </StyledPreviewCard>
  );
}
