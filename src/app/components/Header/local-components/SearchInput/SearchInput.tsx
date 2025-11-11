import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

export default function SearchInput() {
  return (
    <form data-name="search-form" className="flex w-full max-w-xs phone:max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-6 phone:h-8 sm:h-10 bg-[#273728] rounded-sm items-center relative">
      {/* Botão de Submit Pesquisa */}
      <button data-name="search-submit" type="submit" className="w-4 phone:w-5 h-4 phone:h-5 sm:w-6 sm:h-6 ml-1 phone:ml-2 sm:ml-3 bg-transparent border-none cursor-pointer p-0 rounded hover:bg-white/10 transition-colors">
        <Image
          src={getAssetPath("/icons/search.svg")}
          alt="Search"
          width={25}
          height={25}
          className="w-full h-full brightness-0 invert"
        />
      </button>

      {/* Botão Em Camisetas - Oculto em mobile e pequenos tablets */}
      <button data-name="category-button" type="button" className="hidden lg:flex border border-[#4d5f4e] border-t-0 border-b-0 w-20 phone:w-24 md:w-32 h-5 phone:h-6 sm:h-7 items-center justify-center bg-transparent text-white cursor-pointer ml-1 phone:ml-2 relative text-xs sm:text-sm">
        <span className="hidden md:inline">Em Camisetas</span>
        <span className="md:hidden">Categoria</span>
        <Image
          src={getAssetPath("/icons/select--arrow.svg")}
          alt="Select Arrow"
          width={9}
          height={10}
          className="w-1.5 phone:w-2 h-1.5 phone:h-2 ml-0.5 phone:ml-1 sm:ml-2 brightness-0 invert"
        />
      </button>

      {/* Input de Pesquisa */}
      <input
        data-name="search-input"
        type="text"
        placeholder="Buscar produtos"
        className="bg-transparent border-none outline-none text-white/80 font-light text-xs phone:text-sm sm:text-base leading-4 phone:leading-5 sm:leading-6 tracking-wide flex-1 mr-1 phone:mr-2 sm:mr-3 pr-1 phone:pr-2 pl-1 phone:pl-2 placeholder:text-[#7a817b] placeholder:font-normal placeholder:text-xs phone:placeholder:text-sm sm:placeholder:text-base placeholder:leading-4 phone:placeholder:leading-5 sm:placeholder:leading-6 placeholder:tracking-wide placeholder:text-right"
      />
    </form>
  );
}
