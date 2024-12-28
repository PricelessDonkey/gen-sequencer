import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class FmSynthService {
  public instrument: Tone.FMSynth;

  constructor() {
    this.instrument = new Tone.FMSynth({
      envelope: {
        release: '4n',
        decay: '4n',     
      }
    }).toDestination();
   }

   updateSetting(setting: string, value: number) {
    this.instrument.set({
      envelope: {
        [setting]: value
      }
    });

    console.log(`settings: ${JSON.stringify(this.instrument.envelope)}`)
  }
}
