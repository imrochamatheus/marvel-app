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
  title,
  href,
  image,
  description,
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
