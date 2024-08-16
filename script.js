const cursordot = document.querySelector("[data-cursor-dot]");
const cursoroutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const poseX = e.clientX;
  const poseY = e.clientY;

  cursordot.style.left = `${poseX}px`;
  cursordot.style.top = `${poseY}px`;

  // cursoroutline.style.left = `${poseX}px`;
  // cursoroutline.style.top = `${poseY}px`;

  cursoroutline.animate(
    {
      left: `${poseX}px`,
      top: `${poseY}px`
    },
    { duration: 500, fill: "forwards" }
  );
});
