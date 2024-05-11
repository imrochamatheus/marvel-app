"use client";

import { createContext, useContext, useState, useCallback } from "react";

import { fetchMedia } from "@/services/media";
import { MediaType, PreviewCardProps } from "@/types/previewCard.types";

interface MediaAPIContextType {
  cardsData: PreviewCardProps[];
  loading: boolean;
  error: boolean;
  reloadCards: (mediaType: MediaType) => void;
}

export const MediaAPIContext = createContext<MediaAPIContextType>(
  {} as MediaAPIContextType
);

export const useMediaAPI = () => {
  const context = useContext(MediaAPIContext);

  if (!context) {
    throw new Error("useMediaAPI must be used within an APIProvider");
  }

  return context;
};

export default function MediaAPIProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [cardsData, setCardsData] = useState<PreviewCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const reloadCards = useCallback(async (type: MediaType): Promise<void> => {
    setLoading(true);
    setError(false);

    fetchMedia(type)
      .then((data) => setCardsData(data ?? []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <MediaAPIContext.Provider
      value={{
        error,
        loading,
        cardsData,
        reloadCards,
      }}
    >
      {children}
    </MediaAPIContext.Provider>
  );
}
