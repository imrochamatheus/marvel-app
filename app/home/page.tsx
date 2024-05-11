"use client";

import { useEffect, useState } from "react";
import PreviewCard from "@/ui/PreviewCard";

import { MediaType, PreviewCardProps } from "@/types/previewCard.types";
import { fetchMedia } from "@/services/media";

export default function Home() {
  const [cardsData, setCardsData] = useState<PreviewCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetchMedia(MediaType.CHARACTER)
      .then((data) => {
        setCardsData(data ?? []);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Erro ao buscar dados</p>}

      {cardsData.map((card, index) => (
        <PreviewCard key={index} {...card}></PreviewCard>
      ))}
    </div>
  );
}
