from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.responses import HTMLResponse
import textwrap

app = FastAPI()

class TextInput(BaseModel):
    text: str

# Simple CSS animations
ANIMATIONS = ["fade-in", "slide-up", "zoom-in"]

CSS_STYLES = """
<style>
@keyframes fade-in {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes slide-up {
  from {transform: translateY(100px); opacity: 0;}
  to {transform: translateY(0); opacity: 1;}
}
@keyframes zoom-in {
  from {transform: scale(0.5); opacity: 0;}
  to {transform: scale(1); opacity: 1;}
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
"""

@app.post("/generate-animation", response_class=HTMLResponse)
def generate_animation(input: TextInput):
    paragraphs = textwrap.wrap(input.text, width=200)
    scenes = []
    for i, para in enumerate(paragraphs):
        anim = ANIMATIONS[i % len(ANIMATIONS)]
        scenes.append(f'<div class="scene" style="animation-name: {anim};">{para}</div>')
    
    html = f"""
    <html>
    <head>
    <meta charset='UTF-8'>
    <title>Text Animation</title>
    {CSS_STYLES}
    </head>
    <body>
    {''.join(scenes)}
    </body>
    </html>
    """
    return HTMLResponse(content=html, status_code=200)
