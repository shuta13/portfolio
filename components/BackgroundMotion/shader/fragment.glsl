varying vec2 vUv;

uniform sampler2D uTex;
uniform float uPercent;
uniform float uTime;

// ドライバ依存でないランダム関数
float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  // float tmp = rand(vUv);
  // vec2 uv = vec2(tmp);
  vec2 uv = vUv;

  // 色調反転
  // vec3 color = texture2D( uTex, vUv ).rgb;
  // vec3 invert = 1. - color;
  // color = mix( color, invert, uPercent );

  // rgbずらし
  // float shift = uPercent * .01;
  // float r = texture2D(uTex, vUv+ vec2(shift, 0.0)).r;
  // float g = texture2D(uTex, vUv).g;
  // float b = texture2D(uTex, vUv- vec2(shift, 0.0)).b;
  // vec3 color = vec3( r, g, b );

  // モザイク
  // float moz = uPercent * 0.02;
  // if (moz > 0.) {
  //   uv = floor(uv / moz) * moz + (moz * .5);
  // }
  // vec3 color = texture2D(uTex, uv).rgb;

  // グニャグニャ
  float t = uTime * 6.;
  float amount = uPercent * 0.02;
  // これは昔のテレビみたいなのになる
  // vec2 uvOffset = vec2( cos( uv.x * 10. - t ), tan( uv.y * 20. + t ) ) * amount;
  // ぐにゃる
  vec2 uvOffset = vec2( -sin(tan( -uv.x * rand(uv) - t )), sin( -uv.y * 20. + t ) ) * amount;
  vec3 color = texture2D( uTex, uv + uvOffset ).rgb;

  gl_FragColor = vec4( color, 1.0 );
}