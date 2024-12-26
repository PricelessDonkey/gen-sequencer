import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { StateService } from '../state.service';
import { Step } from '../types';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gen-sequencer';
  isPlaying = false;
  activeSection: string = 'A';
  
  constructor(public state: StateService) {}
  
  toggleSection(event: Event, section: string) {
    event.preventDefault();
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
