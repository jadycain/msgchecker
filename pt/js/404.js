const refreshViewHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("load", refreshViewHeight);
window.addEventListener("resize", refreshViewHeight);
