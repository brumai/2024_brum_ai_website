import Button from "./Button";
import SponsorsList from "./footer components/Sponsors";
import FooterGraffiti from "./footer components/FooterGraffiti";

export default function Footer({ data }) {
  return (
    <section className="flex flex-col w-screen justify-between min-w-[360px] border-2 border-red-500 ">
      <FooterGraffiti />
      <footer className="flex flex-col w-screen justify-between min-w-[360px] bg-black text-white dark:bg-white dark:text-black">
        <div className="grid place-items-center gap-y-4 sm:grid-cols-2 md:flex md:flex-wrap justify-center items-center text-center z-10 bg-red-500 mb-6">
          {data.map((sponsorsList) => {
            return <SponsorsList key={sponsorsList.id} data={sponsorsList} />;
          })}
          <p className="border-2">
            Brum.AI has been supported by these amazing organisations
          </p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 z-10 w-10/12 items-center sm:items-end self-center pb-4">
          <div>
            <Button
              text={"Buy us a coffee"}
              location={"https://www.buymeacoffee.com/brumai"}
              className="self-start"
            />
          </div>
          <div className="justify-self-end mt-3">
            <Button text={"Contact Us"} location={"/contact"} />
          </div>
        </div>
        <div className="flex flex-wrap flex-col items-center z-10">
          <div className="p-px bg-white dark:bg-black w-10/12 h-0 "></div>
          <div className="w-10/12 pb-32 pt-2 text-lg">
            <p>
              &copy; Copyright {new Date().getFullYear()} Brum.AI All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
