import Button from "./Button";
import SponsorsList from "./footer components/Sponsors";
import FooterGraffiti from "./footer components/FooterGraffiti";
export default function Footer({ data }) {
  return (
    <section className="flex flex-col w-screen justify-between min-w-[360px] bg-orange-50 pt-6  text-gray-950 m-auto"> {/* Footer image*/}
      {/* <FooterGraffiti /> */}
      <footer className="flex flex-col w-screen justify-between min-w-[360px]">
        {/* Background for sponsors*/}
        <div className="px-4 py-4 mb-10 sm:w-[38rem] sm:m-auto md:w-[50rem] md:m-auto">
          <h3 className="font-bold text-2xl text-center mb-6">Our Supporters</h3>
          <p className="text-sm mb-10 sm:text-center md:text-center">
              Brum.AI has been supported by these amazing organisations
            </p>
            {/* sponsors logos section */}
          <div className="grid gap-x-12 gap-y-10 p-10 grid-cols-2 border border-orange-200 rounded-lg sm:grid-cols-3 sm:gap-y-20 ">
            {data.map((sponsorsList) => {
              return <SponsorsList key={sponsorsList.id} data={sponsorsList} />;
            })}
          </div>
        </div>
        {/* footer buttons */}
        <div className="w-full flex flex-wrap justify-center gap-4 items-center mb-12 md:mt-12">
          <div>
            <Button
              text={"Buy us a coffee"}
              location={"https://www.buymeacoffee.com/brumai"}
              className="self-start"
            />
          </div>
          <div className="">
            <Button text={"Contact Us"} location={"/contact"} />
          </div>
        </div>
        <div className="w-full text-sm text-center  pb-2">
            <p>
              &copy; Copyright {new Date().getFullYear()} Brum.AI All rights
              reserved.
            </p>
          </div>
      </footer>
    </section>
  );
}
