import { Injectable } from '@angular/core';
import * as Tone from 'tone';

export class FmSynthService {
  public instrument: Tone.FMSynth;
  public reverb: Tone.Reverb;
  public vibrato: Tone.Vibrato;

  constructor() {
    // this.initializeSynth();
  }

  initializeSynth() {
    // Create FM Synth
    this.instrument = new Tone.FMSynth({
      envelope: {
        attackCurve: 'ripple'
      }
    });

    // Create Vibrato effect
    this.vibrato = new Tone.Vibrato({
      frequency: 5, // Frequency of the vibrato oscillation in Hz
      depth: 0.5 // How much the vibrato affects pitch (0 to 1)
    });

    // Create Reverb effect
    this.reverb = new Tone.Reverb({
      decay: 2, // Reverb tail duration in seconds
      preDelay: 0.1 // Delay before reverb starts
    });

    // Connect Synth -> Vibrato -> Reverb -> Destination
    this.instrument.chain(this.vibrato, this.reverb, Tone.Destination);
  }

  /**
   * Adjusts the reverb settings
   * @param decayTime Reverb decay time in seconds
   */
  setReverbDecay(decayTime: number) {
    this.reverb.decay = decayTime;
    this.reverb.generate(); // Regenerates impulse response after changing decay
  }

  /**
   * Adjusts the vibrato settings
   * @param frequency Frequency of the vibrato oscillation (Hz)
   * @param depth Depth of the vibrato effect (0 to 1)
   */
  setVibratoSettings(frequency: number, depth: number) {
    this.vibrato.frequency.value = frequency;
    this.vibrato.depth.value = depth;
  }
}
