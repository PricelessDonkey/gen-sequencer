import { Injectable } from '@angular/core';
import { Sequencer, Step } from './types';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  sequencer1: Sequencer = {
    color: '#366c8e',
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
    value10: 0,
    currentStep: undefined, // also can be a number
    sequence: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ]
  }
  sequencer2: Sequencer = {
    color: '#39774f',
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
    value10: 0,
    currentStep: undefined,
    sequence: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ]
  }
  sequencer3: Sequencer = {
    color: '#de6433',
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
    value10: 0,
    currentStep: undefined,
    sequence: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ]
  }
  sequencer4: Sequencer = {
    color: '#7facc6',
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0,
    value7: 0,
    value8: 0,
    value9: 0,
    value10: 0,
    currentStep: undefined,
    sequence: [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ]
  }
  activeSection: string = 'A';

  constructor() { }
}
