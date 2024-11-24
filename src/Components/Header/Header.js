import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <div className="px-4 sm:px-8 md:px-20 pt-4">
      <header className="w-full bg-gradient-to-r from-[#001C55] to-[#666666] py-4 rounded-full px-6 md:px-12 items-center">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo and Nav Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link href="/" className="text-lg sm:text-2xl font-bold text-white">
              InvestZ
            </Link>

            {/* Navigation Links */}
            <nav className="hidden sm:flex space-x-4 sm:space-x-6">
              <Link
                href="/products"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/our-team"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Our Team
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-0">
            <Link
              href="/login"
              className="text-white hover:text-gray-200 transition-colors sm:flex hidden"
            >
              Member login
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-2 text-sm font-medium text-[#0A1628] transition-colors hover:bg-gray-100"
            >
              Start your journey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
