import { MediaType, PreviewCardProps } from "@/types/previewCard.types";

export async function fetchMedia(type: MediaType): Promise<any> {
  try {
    const response = await fetch(`/api/media?type=${type}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados dos personagens");
    }
    const characters: PreviewCardProps[] = await response.json();
    return characters;
  } catch (error) {
    console.error("Erro ao buscar os dados dos personagens:", error);
    return null;
  }
}
