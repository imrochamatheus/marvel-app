"use client";

import Link from "next/link";

import {
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
  StyledPreviewCard,
} from "@/styles/previewCard.styles";
import { PreviewCardProps } from "@/types/previewCard.types";

export default function PreviewCardComponent({
  title,
  href,
  poster,
  description,
}: PreviewCardProps) {
  return (
    <StyledPreviewCard
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <Link href={href}>Ver detalhes</Link>
        </CardFooter>
      </CardContent>
    </StyledPreviewCard>
  );
}
