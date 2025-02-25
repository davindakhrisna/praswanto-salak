export default function Navbar() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white p-8">
        <div className="flex items-center flex-shrink-0 text-black ml-10 mr-24">
          <span className="font-bold text-2xl tracking-tight">Praswanto Salak</span>
        </div>
  
        <div className="flex-grow flex items-center w-auto">
          <div className="text-lg lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
            >
              About Us
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
            >
              Service
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white"
            >
              Products
            </a>
          </div>
        </div>
  
        <div className="flex items-center space-x-4 mr-10">
          <button className="px-4 py-2 border border-grey text-black rounded-[100px] hover:bg-black hover:text-white transition">
            Sign in
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-[100px] border border-transparent hover:bg-white hover:text-black hover:border-gray-500 transition">
            Sign up
          </button>
        </div>
      </nav>
    );
  }
  