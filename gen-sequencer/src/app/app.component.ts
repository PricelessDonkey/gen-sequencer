import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { StateService } from '../state.service';
import { Step } from '../types';
import { StepsComponent } from "../steps/steps.component";
import { FmSynthService } from './fm-synth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, StepsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gen-sequencer';
  isPlaying = false;
  activeSection: string = 'A';
  
  constructor(public state: StateService, public fmSynth: FmSynthService) {}
  
  toggleSection(section: string) {
    this.activeSection = section;
  }

  toggleStep(event: Event, step: Step) {
    event.preventDefault();
    step.selected = !(step.selected);
  }

  togglePlaying(event: Event) {
    event.preventDefault();
    this.isPlaying = !this.isPlaying;
  }
}
