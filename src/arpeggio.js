import { chord as getChord } from './chords';
import { PERFECT_OCTAVE } from './intervals';

const DIRECTION_DOWN = 'down';
const DIRECTION_UP = 'up';

/**
 *
 *
 * @param {string|array} chord
 * @param {number} length
 * @param {string} direction
 *
 * @returns {array}
 */
exports.arpeggio = (chord, length, direction) => {
  chord = getChord(chord);
  if (direction === DIRECTION_DOWN) {
    chord = chord.reverse();
  }
  let notes = [];
  for (let i = 0; i < length; i++) {
    let note = chord[i % chord.length];
    let octave = Math.floor(i / chord.length) * PERFECT_OCTAVE;
    if (direction === DIRECTION_DOWN) {
      octave = -octave;
    }
    notes.push(note + octave);
  }
  return notes;
};
