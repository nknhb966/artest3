export const wrapTextByWidth = (ctx, text, maxWidth) => {
  const chars = text.split('');
  let line = '';
  const lines = [];

  for (let i = 0; i < chars.length; i++) {
    const testLine = line + chars[i];
    const width = ctx.measureText(testLine).width;
    if (width > maxWidth && line.length > 0) {
      lines.push(line);
      line = chars[i];
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  return lines;
};

export const createModelLine = (s, w = 1.0, color = "white", size = 128, parent) => {
  const canvas = document.createElement("canvas");
  const g = canvas.getContext("2d");
  g.font = `bold ${size}px sans-serif`;

  const maxPixelWidth = 800;
  const lines = wrapTextByWidth(g, s, maxPixelWidth);

  const lineHeight = size * 1.2;
  const maxWidth = Math.max(...lines.map(line => g.measureText(line).width));
  const canvasHeight = lineHeight * lines.length;

  canvas.width = maxWidth;
  canvas.height = canvasHeight;

  g.font = `${size}px sans-serif`;
  g.fillStyle = color;
  g.strokeStyle = "black";
  g.lineWidth = size * 0.02;

  lines.forEach((line, i) => {
    const y = lineHeight * (i + 0.8);
    g.fillText(line, 0, y);
    g.strokeText(line, 0, y);
  });

  const h = w / canvas.width * canvas.height;
  return createModelImage(canvas, w, h, false, parent);
};

export const createModelImage =  (img, w = 0.5, h = 0.5, parent) => {
  const geometry = new THREE.PlaneGeometry(w, h);
  const map = new THREE.Texture(img);
  map.needsUpdate = true;
  const material = new THREE.MeshBasicMaterial({
    map,
    side: THREE.FrontSide,
    transparent: true,
  });
  const plane = new THREE.Mesh(geometry, material);
  return plane;
};
