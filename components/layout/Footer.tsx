export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="font-semibold text-lg mb-4 md:mb-0">
          PT Tunas Jaya Bersinar Cemerlang
        </p>
        <p className="text-sm text-blue-200">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}