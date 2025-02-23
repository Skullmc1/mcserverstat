import { CandyCane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <CandyCane className="w-4 h-4 text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text" />
          <p className="text-center text-sm">
            <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text font-medium">
              IsItUp
            </span>
            <span className="text-gray-400">
              {" "}
              © {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
