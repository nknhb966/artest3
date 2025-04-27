import { CONTENT_TYPE } from "https://code4sabae.github.io/js/CONTENT_TYPE.js";

export const downloadFile = (name, uint8arry) => {
  const ext = name.split('.').pop().toLowerCase();
  const mime = CONTENT_TYPE[ext] || "application/octet-stream";
  const blob = new Blob([uint8arry], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};