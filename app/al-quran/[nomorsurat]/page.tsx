type TipeDataParameterQuran = {
  nomorsurat: string;
};     

type TipeDataFetchinganAPIQuran = {
  data: {
    namaLatin: string;
    jumlahAyat: number;
  };
};

type TipeDataUntukDisempilkeAPI = string;

async function fetchdataquran(
  angkaUrutan: TipeDataUntukDisempilkeAPI
) {
  try {
    const mentahanAPIquran = await fetch(
      `https://equran.id/api/v2/surat/${angkaUrutan}`
    );

    if (!mentahanAPIquran.ok) {
      throw new Error("Gagal fetch data API");
    }

    const datasurat: TipeDataFetchinganAPIQuran = await mentahanAPIquran.json();
    return datasurat.data;
  } catch (error) {
    console.error("Error saat fetch data Quran:", error);
    return {
      namaLatin: "Data tidak ditemukan",
      jumlahAyat: 0,
    };
  }
}

export default async function QuranTersortir({
  params,
}: {
  params: Promise<TipeDataParameterQuran>;
}) {
  const { nomorsurat } = await params;
  const informasiSurat = await fetchdataquran(nomorsurat);

  return (
    <div>
      <h1>{informasiSurat.namaLatin}</h1>
      <h1>{informasiSurat.jumlahAyat}</h1>
    </div>
  );
}
