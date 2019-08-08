varying vec2 vUv;

void main() {
  vUv = uv - .5;
  vUv += .5;

  gl_Position = vec4( position, 50 );
}