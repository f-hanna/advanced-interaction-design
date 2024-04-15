// script to scroll sideways

let speed = "regular";

Observer.create({
  target: window,
  type: "wheel",
  onChangeY: (self) => {
    if (speed == "regular") {
      document.documentElement.scrollLeft += self.deltaY;
    } else {
      document.documentElement.scrollLeft += self.deltaY / 2;
    }
  }
});

let speedToggles = document.querySelectorAll("input[name='speed']");
speedToggles.forEach((speedToggle) => {
  speedToggle.addEventListener("change", (ev) => {
    speed = speedToggle.value;
  });
});