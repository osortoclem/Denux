import { createCanvas } from 'canvas';

export async function createStickerImage({ texto, emoji, fondo, estilo }) {
  const width = 512;
  const height = 512;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = fondo;
  ctx.fillRect(0, 0, width, height);

  ctx.textAlign = 'center';
  ctx.fillStyle = estilo === 'neon' ? '#00ffff' : '#fff';
  ctx.font = 'bold 50px Sans';

  ctx.fillText(`${texto} ${emoji}`, width / 2, height / 2);

  return canvas.toBuffer('image/png');
}