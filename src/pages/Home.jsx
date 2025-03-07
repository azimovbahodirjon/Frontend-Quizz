import MenuLinks from "../components/MenuLinks";

function Home() {
  return (
    <section className="container home-container flex flex-col items-center justify-center min-h-screen text-center">
      <div className="home-content mb-6">
        <h1 className="home-title text-4xl font-bold">
          <span className="block">Welcome to the</span>
          <span className="block text-blue-500">Frontend Quiz!</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Pick a subject to get started.
        </p>
      </div>
      <div className="home-nav-list w-full max-w-md">
        <MenuLinks />
      </div>
    </section>
  );
}

export default Home;
