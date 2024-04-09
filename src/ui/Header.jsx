function Header({children}) {
  return (
    <div class="flex md:flex-row flex-col md:gap-7 gap-3 md:items-center mb-10 xl:px-0 md:px-6  px-5">
      <h2 class="text-cyan-700 sm:text-4xl text-2xl  font-bold">
        {children}
      </h2>
      <div class="h-[2px] md:w-6/12 w-11/12 bg-cyan-700"></div>
    </div>
  );
}

export default Header
