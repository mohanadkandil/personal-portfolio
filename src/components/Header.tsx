export const Header = () => {
  return (
    <header class="flex justify-between w-full font-semibold text-white">
      <a href="/">
        <h2 class="text-xl">Mohanad Kandil</h2>
      </a>
      <nav class="flex space-x-32">
        <a href="#home">Home</a>
        <a href="#tools">Tools</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
