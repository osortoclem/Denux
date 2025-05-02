export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).send('Missing "text" field.');
  }

  const animations = ['fade-in', 'slide-up', 'zoom-in'];
  const paragraphs = text.match(/.{1,200}(\s|$)/g) || [];

  const css = `
  <style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-up {
    from { transform: translateY(100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes zoom-in {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .scene {
    animation-duration: 1.5s;
    animation-fill-mode: both;
    font-size: 24px;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    background: #f0f0f0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  </style>
  `;

  const scenes = paragraphs.map((para, i) => {
    const anim = animations[i % animations.length];
    return `<div class="scene" style="animation-name: ${anim};">${para}</div>`;
  }).join('');

  const html = `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Text Animation</title>
      ${css}
    </head>
    <body>
      ${scenes}
    </body>
  </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
                                }
