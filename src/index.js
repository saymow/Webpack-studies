import mdPreviewer from "./mdPreviewer";

window.onload = () => {
  document
    .getElementById("editor")
    .addEventListener(
      "submit",
      mdPreviewer.attachPreviewer(document, "source", "preview")
    );
};
