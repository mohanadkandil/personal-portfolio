export const Hero = () => {
  return (
    <section class="flex items-center justify-between h-screen">
      <div class="flex flex-col space-y-5 text-center justify-between">
        <h1 class="text-6xl font-bold text-white">Mohanad Kandil</h1>
        <h2 class="text-2xl font-semibold text-white">Software Engineer</h2>
        <a
          href="/"
          class="bg-[#43DDE6] text-sm font-semibold w-fit py-3 px-5 rounded-md mx-auto"
        >
          Resume
        </a>
      </div>
      <div class="relative flex justify-center">
        <img
          class="rounded-full w-96 h-96"
          src="https://avatars.githubusercontent.com/u/14032427?v=4"
          alt="Mohanad Kandil"
        />
        {/* <div class="absolute top-0 -z-10 rounded-full h-72 w-72 blur-[80px] bg-[#43DDE6]" /> */}
      </div>
    </section>
  );
};
