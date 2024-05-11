"use client";

import { useEffect } from "react";

import { HomeSection } from "@/styles/home.styles";
import { DefaultContentProps } from "@/types/home.types";
import { useMediaAPI } from "@/contexts/MediaAPIContext";
import PreviewCardComponent from "@/components/PreviewCardComponent";

export default function DefaultContent({ mediaType }: DefaultContentProps) {
  const { cardsData, loading, error, reloadCards } = useMediaAPI();

  useEffect(() => {
    reloadCards(mediaType);
  }, [mediaType, reloadCards]);

  return (
    <HomeSection>
      {loading && <p>Loading...</p>}
      {error && <p>Erro ao buscar dados</p>}

      {cardsData.map((card, index) => (
        <PreviewCardComponent key={index} {...card}></PreviewCardComponent>
      ))}
    </HomeSection>
  );
}
