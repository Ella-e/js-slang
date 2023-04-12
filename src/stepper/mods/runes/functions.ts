export const RUNE_FUNCTIONS = `

function show(r) {
  return r;
}

function stack(rune1, rune2) {
  return $stack(rune1, rune2);
}

function beside(rune1, rune2) {
  return $beside(rune1, rune2);
}

function beside_frac(frac, rune1, rune2) {
  return $beside_frac(frac, rune1, rune2);
}

function red(rune) {
  return $set_color(rune, "red");
}

function blue(rune) {
  return $set_color(rune, "blue");
}

function flip_horiz(rune) {
  return $set_dir(rune, "flip_horiz");
}

function make_cross(rune) {
  return $make_cross(rune);
}
`