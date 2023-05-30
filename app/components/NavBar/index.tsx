export function NavBar() {
  return (
    <nav className="fixed w-full bg-black h-12 flex items-center gap-2 px-8">
      <button>
        <img className="h-full w-6 text-black" src="/img/logo.svg" alt="" />
      </button>
      <p className="m-0 p-0">RADIO CHILANGA</p>
    </nav>
  );
}
