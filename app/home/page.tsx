import PreviewCard from "../ui/PreviewCard";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>

      <PreviewCard
        title="Homem-Aranha"
        image="/spider_man_cover.png"
        href="https://www.marvel.com/characters/captain-america-steve-rogers/on-screen"
        description="Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha."
      ></PreviewCard>
    </div>
  );
}
