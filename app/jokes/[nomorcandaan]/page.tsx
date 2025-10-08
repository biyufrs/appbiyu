// file: app/jokes/[nomorcandaan]/page.tsx

async function fetchDataJoke(urutanJoke: string) {
  const responseMentah = await fetch(
    `https://v2.jokeapi.dev/joke/any?idRange=${urutanJoke}`
  );
  const dataJoke = await responseMentah.json();
  return dataJoke;
}                                   

export default async function candaanYgTersortir({
  params,
}: {
  params: Promise<{ nomorcandaan: string }>;
}) {
  const { nomorcandaan } = await params;
  const informasiJoke = await fetchDataJoke(nomorcandaan);

  return (
    <div>
      <h1>{informasiJoke.category}</h1>
      <h1>Candaan tak bertanya jawab : {informasiJoke.category}</h1>

      {informasiJoke.type === "single" ? (
        <h1>Candaan : {informasiJoke.joke}</h1>
      ) : (
        <>
          <h1>Pertanyaan candaan : {informasiJoke.setup}</h1>
          <h1>Jawaban dari candaan : {informasiJoke.delivery}</h1>
        </>
      )}
    </div>
  );
}
