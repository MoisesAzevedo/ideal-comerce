import SearchInput from "./local-components/SearchInput/SearchInput";
import UserActions from "./local-components/UserActions/UserActions";
import Navigation from "./local-components/Navigation/NavigationNew";
import { getAssetPath } from "@/utils/paths";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header data-name="header" className="font-sans w-full h-10 phone:h-12 sm:h-14 md:h-16 lg:h-16 flex justify-center bg-gradient-to-r from-[#0d1a0e] to-[#1d2d1e]">
        <div data-name="header-content" className="flex w-full max-w-container items-center relative px-2 phone:px-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div data-name="logo-wrapper" className="flex items-center">
            <Image
              data-name="logo-image"
              src={getAssetPath("/logo-mod.png")}
              alt="Ideal Logo"
              className="h-5 phone:h-6 w-auto sm:h-8 md:h-10 lg:h-10"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Input de Pesquisa - Oculto em mobile, visível de md para cima */}
          <div data-name="search-desktop" className="hidden md:flex flex-1 mx-2 phone:mx-3 lg:mx-8">
            <SearchInput />
          </div>

          {/* Ações do Usuário */}
          <div data-name="user-actions" className="ml-auto sm:ml-0">
            <UserActions />
          </div>

          {/* Input de Pesquisa Mobile - Visível apenas em mobile */}
          <div data-name="search-mobile" className="absolute top-full left-0 right-0 md:hidden bg-gradient-to-r from-[#0d1a0e] to-[#1d2d1e] px-2 phone:px-3 py-2 z-10">
            <SearchInput />
          </div>
        </div>
      </header>
      <div data-name="navigation-wrapper">
        <Navigation />
      </div>
    </>
  );
}
