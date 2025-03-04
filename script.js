import init, { to_base64, from_base64 } from "./pkg/rust_wasm.js";
init().then(() => {
  let converted = to_base64("Test");
  console.log(converted);
  console.log(from_base64(converted));
});

document.getElementById("btn-base64-encode").addEventListener("click", (e) => {
  const input = document.getElementById("input-base64-encode").value;
  document.getElementById("textarea-base64-encode").innerText =
    to_base64(input);
});

document.getElementById("btn-base64-decode").addEventListener("click", (e) => {
  const input = document.getElementById("input-base64-decode").value;
  document.getElementById("textarea-base64-decode").innerText =
    from_base64(input);
});
