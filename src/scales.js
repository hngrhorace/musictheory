import { TONE, SEMITONE, PERFECT_OCTAVE } from './intervals';
import { note as getNote } from './notes';

const CHROMATIC_SCALE = [
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
  SEMITONE,
];
const WHOLE_TONE_SCALE = [TONE, TONE, TONE, TONE, TONE, TONE, TONE];

const IONIAN_MODE = [TONE, TONE, SEMITONE, TONE, TONE, TONE, SEMITONE];
const DORIAN_MODE = [TONE, SEMITONE, TONE, TONE, TONE, SEMITONE, TONE];
const PHRYGIAN_MODE = [SEMITONE, TONE, TONE, TONE, SEMITONE, TONE, TONE];
const LYDIAN_MODE = [TONE, TONE, TONE, SEMITONE, TONE, TONE, SEMITONE];
const MIXOLYDIAN_MODE = [TONE, TONE, SEMITONE, TONE, TONE, SEMITONE, TONE];
const AEOLIAN_MODE = [TONE, SEMITONE, TONE, TONE, SEMITONE, TONE, TONE];
const LOCRIAN_MODE = [SEMITONE, TONE, TONE, SEMITONE, TONE, TONE, TONE];

var Scales = {
  ionian: IONIAN_MODE,
  dorian: DORIAN_MODE,
  phrygian: PHRYGIAN_MODE,
  lydian: LYDIAN_MODE,
  mixolydian: MIXOLYDIAN_MODE,
  aeolian: AEOLIAN_MODE,
  locrian: LOCRIAN_MODE,
  major: IONIAN_MODE,
  minor: AEOLIAN_MODE,
};

exports.scale = (root, scale, length) => {
  scale = Scales[scale];
  let notes = [];
  let note = getNote(root);
  for (let i = 0; i < length; i++) {
    note = note + scale[i % scale.length];
    notes.push(note);
  }
  return notes;
};

exports.registerScale = (name, scale) => {
  Scales[name] = scale;
};
