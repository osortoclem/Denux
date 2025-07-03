import { createStickerImage } from '../utils/generateSticker.js';

export default async function handler(req, res) {
  const { texto = "Hola Mundo", emoji = "😎", fondo = "#000", estilo = "neon" } = req.query;

  try {
    const buffer = await createStickerImage({ texto, emoji, fondo, estilo });
    res.setHeader('Content-Type', 'image/png');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el sticker' });
  }
}