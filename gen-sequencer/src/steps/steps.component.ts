import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sequencer, Step } from '../types';
import { StateService } from '../state.service';

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
  @Output() controlsClicked = new EventEmitter<string>();

  constructor(public state: StateService) {}

  toggleStep(event: Event, step: Step) {
    event.preventDefault();
    step.selected = !(step.selected);
  }

  toggleSection(event: Event) {
    event.preventDefault();
    this.controlsClicked.emit(this.section);
  }
}
