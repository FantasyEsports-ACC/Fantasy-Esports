import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1>
            <b>Fantasy Esports Landing Page </b>
        </h1>
        <p className="items-center">
          TBD.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/FantasyEsports-ACC/Fantasy-Esports"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More.
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Copyright Aggie Coding Club.</p>
      </footer>
    </div>
  );
}
