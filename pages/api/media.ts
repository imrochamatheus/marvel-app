import { NextApiRequest, NextApiResponse } from "next";

import { Character, MediaType, Movie, HQ } from "@/types/previewCard.types";

const buildPosterPath = (path: string) => {
  const basePosterPath = "/images";

  return `${basePosterPath}/${path}.png`;
};

export const characters: Character[] = [
  {
    title: "Homem-Aranha",
    description:
      "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    poster: buildPosterPath("spider"),
    href: "https://www.marvel.com/characters/captain-america-steve-rogers/on-screen",
    type: MediaType.CHARACTER,
    appearances: [
      "Vingadores - Era de Ultron",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 4,
  },
  {
    title: "Wanda Maximoff",
    description:
      "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    poster: buildPosterPath("wanda"),
    href: "https://www.marvel.com/characters",
    type: MediaType.CHARACTER,
    appearances: [
      "Vingadores - Era de Ultron",
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "WandaVision",
    ],
    rating: 4,
  },
  {
    title: "Thanos",
    description:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    poster: buildPosterPath("thanos"),
    href: "https://www.marvel.com/characters",
    type: MediaType.CHARACTER,
    appearances: [
      "Vingadores",
      "Guardiẽs da Galáxia",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 5,
  },
  {
    title: "Hulk",
    description:
      "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    poster: buildPosterPath("hulk"),
    href: "https://www.marvel.com/characters/captain-america-steve-rogers/on-screen",
    type: MediaType.CHARACTER,
    appearances: [
      "Vingadores",
      "Vingadores - Era de Ultron",
      "Thor - Ragnarok",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 4,
  },
];

const films: Movie[] = [
  {
    title: "Homem de Ferro",
    description:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    poster: buildPosterPath("iron_man"),
    href: "https://www.marvel.com/characters",
    type: MediaType.MOVIE,
    availableOn: ["Disney+"],
    rating: 3,
  },
  {
    title: "Homem de Ferro 2",
    description:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas.",
    poster: buildPosterPath("iron_man_2"),
    href: "https://www.marvel.com/characters",
    type: MediaType.MOVIE,
    availableOn: ["Disney+"],
    rating: 3,
  },
  {
    title: "Thor",
    description:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.",
    poster: buildPosterPath("thor"),
    href: "https://www.marvel.com/characters",
    type: MediaType.MOVIE,
    availableOn: ["Disney+"],
    rating: 4,
  },
  {
    title: "Capitão América",
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.",
    poster: buildPosterPath("captain_america"),
    href: "https://www.marvel.com/characters",
    type: MediaType.MOVIE,
    availableOn: ["Disney+"],
    rating: 4,
  },
  {
    title: "Capitã Marvel",
    description:
      "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.",
    poster: buildPosterPath("captain_marvel"),
    href: "https://www.marvel.com/characters",
    type: MediaType.MOVIE,
    availableOn: ["Disney+"],
    rating: 4,
  },
];

const hqs: HQ[] = [
  {
    title: "Thor: Vikings",
    description:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    poster: buildPosterPath("thor_hq"),
    href: "https://www.marvel.com/characters",
    type: MediaType.HQ,
    availableOn: ["Americanas", "Amazon"],
    rating: 5,
  },
  {
    title: "Surfista Prateado: Parábola",
    description:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    poster: buildPosterPath("silver_surfer_hq"),
    href: "https://www.marvel.com/characters",
    type: MediaType.HQ,
    availableOn: ["Americanas", "Amazon"],
    rating: 4,
  },
  {
    title: "Wolverine: Origens",
    description:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.",
    poster: buildPosterPath("wolwerine_hq"),
    href: "https://www.marvel.com/characters",
    type: MediaType.HQ,
    availableOn: ["Americanas", "Amazon"],
    rating: 4,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);

    return;
  }

  const { type } = req.query;

  switch (type) {
    case MediaType.CHARACTER:
      res.status(200).json(characters);
      break;
    case MediaType.MOVIE:
      res.status(200).json(films);
      break;
    case MediaType.HQ:
      res.status(200).json(hqs);
      break;
    default:
      res.status(400).json({ message: "Invalid media type" });
      break;
  }
}
