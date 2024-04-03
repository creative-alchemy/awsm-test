import Image from "next/image";
import SearchForm from "./_components/SearchForm";
import SearchResultCard from "./_components/SearchResultCard";

async function getIpMetaData(ipAddress) {
  if (!ipAddress) return {};
  const { signal } = new AbortController();
  const res = await fetch(
    `https://rdap.arin.net/registry/ip/${ipAddress}
  `,
    {
      signal,
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const ipMetaData = await getIpMetaData(searchParams?.ipAddress);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SearchForm defaultValue={searchParams?.ipAddress as string} />
      {searchParams?.ipAddress &&
      ipMetaData?.startAddress &&
      ipMetaData?.endAddress ? (
        <SearchResultCard
          ipMetaData={ipMetaData}
          ipAddress={searchParams?.ipAddress as string}
        />
      ) : searchParams?.ipAddress !== undefined ? (
        <div>No results found</div>
      ) : (
        <></>
      )}
    </main>
  );
}
