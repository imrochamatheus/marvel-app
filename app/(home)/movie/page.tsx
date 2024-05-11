import { MediaType } from "@/types/previewCard.types";
import DefaultContent from "../_content";

export default function MoviesPage() {
  return <DefaultContent mediaType={MediaType.MOVIE} />;
}
