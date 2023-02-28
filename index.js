function slide() {
  let slideValue = document.getElementById("slider").value * 0.1;
  // console.log(slideValue);
  let cutImagePath = (document.getElementById(
    "raster"
  ).style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100% )`);
  // console.log(cutImagePath);
}
