import { markdown } from "markdown";

var attachPreviewer = ($document, sourceId, previewerId) => {
  return (event) => {
    var text = $document.getElementById(sourceId).value,
      preview = $document.getElementById(previewerId);

    preview.innerHTML = markdown.toHTML(text);
    event.preventDefault();
  };
};

export default {
  attachPreviewer,
};
