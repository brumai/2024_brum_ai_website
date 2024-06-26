import Image from "next/image";
import Link from "next/link";
import Dropdown from "./header components/Dropdown";
import SocialsList from "./header components/Socials";
import SocialDropdown from "./header components/Social_Dropdown";

export default function Header({ data, pages }) {
  return (
    <section className="min-w-[360px] grid grid-cols-3 md:grid-cols-[5fr_1fr_5fr] gap-x-2 place-content-evenly items-center width-screen py-6 px-4 justify-between bg-black">
      <div className="flex justify-start"> {/* Dropdown Border 1*/}
        <div className="flex justify-center"> {/* Dropdown Border */}
          <Dropdown pages={pages} />
        </div>
      </div>

      <Link href="/" className="flex justify-center"> {/* Brum.AI Border */}
        <Image
          src="/assets/orange_logo.png"
          width={100}
          height={100}
          alt="Brumai Logo in orange"
        />
      </Link>
      {/* Socials Border */}
      <div className="flex justify-end items-center">
        <SocialDropdown data={data} />
        <div className="hidden md:flex justify-end items-center space-x-4">
          {data.map((socialsList) => {
            return <SocialsList key={socialsList.id} data={socialsList} />;
          })}
        </div>
      </div>
    </section>
  );
}
