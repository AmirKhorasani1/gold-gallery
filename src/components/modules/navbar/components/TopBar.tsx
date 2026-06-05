import Link from "next/link";
import Image from "next/image";

interface TopBarProps {
  hideTopBar: boolean;
}

const TopBar = ({ hideTopBar }: TopBarProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center bg-white border-b border-black/15 transition-all duration-500 ${
        hideTopBar
          ? "max-h-0 overflow-hidden py-0 opacity-0"
          : "max-h-17 py-2.5 md:py-3 opacity-100"
      }`}
    >
      <Link href="/">
        <Image 
          src="/images/logo.png" 
          alt="Logo"
          width={110}
          height={100}  
          quality={100}
        />
      </Link>
    </div>
  );
};

export default TopBar;