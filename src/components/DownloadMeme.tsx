import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

const downloadMeme = () => {
  const memeNode: HTMLElement = document.getElementById("meme")!;
  toPng(memeNode).then((dataUrl) => {
    saveAs(dataUrl, "meme.png");
  });
};

export default downloadMeme;
