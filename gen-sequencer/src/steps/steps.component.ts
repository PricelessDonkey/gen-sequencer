import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sequencer, Step } from '../types';
import { StateService } from '../state.service';
import { Instrument } from 'tone/build/esm/instrument/Instrument';

@Component({
  selector: 'app-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  @Input() sequencer: Sequencer;
  @Input() section: string;
  @Input() activeSection: string;
  @Input() synth: Instrument<any>;
  @Output() controlsClicked = new EventEmitter<string>();

  constructor(public state: StateService) {}

  toggleStep(event: Event, step: Step) {
    event.preventDefault();
    step.selected = !(step.selected);
    this.synth.triggerAttackRelease('C4', '4n');
  }

  toggleSection(event: Event) {
    event.preventDefault();
    this.controlsClicked.emit(this.section);
  }
}
