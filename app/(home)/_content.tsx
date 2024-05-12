"use client";

import { useEffect } from "react";

import { MediaType } from "@/types/previewCard.types";
import { DefaultContentProps } from "@/types/home.types";
import { useMediaAPI } from "@/contexts/MediaAPIContext";
import { CardsContainer, HomeSection } from "@/styles/home.styles";

import PreviewCardComponent from "@/components/PreviewCardComponent";
import FilterDropdownComponent from "@/components/FilterDropdownComponent";

const DefaultContent = ({ mediaType }: DefaultContentProps) => {
  const { cardsData, loading, error, reloadCards } = useMediaAPI();

  useEffect(() => {
    reloadCards(mediaType);
  }, [mediaType, reloadCards]);

  const renderLoadingOrError = () => {
    return loading ? <p>Loading...</p> : <p>Erro ao buscar dados</p>;
  };

  return (
    <HomeSection>
      {loading || error ? (
        renderLoadingOrError()
      ) : (
        <>
          {mediaType === MediaType.MOVIE && <FilterDropdownComponent />}
          <CardsContainer>
            {cardsData.map((card, index) => (
              <PreviewCardComponent
                key={index}
                {...card}
              ></PreviewCardComponent>
            ))}
          </CardsContainer>
        </>
      )}
    </HomeSection>
  );
};

export default DefaultContent;
