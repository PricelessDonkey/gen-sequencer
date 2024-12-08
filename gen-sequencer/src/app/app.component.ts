import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

type Step = {
  id: number,
  selected?: boolean,
  index?: number,
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gen-sequencer';
  activeSection: string = 'A'; // Tracks the active section
  seq1Randomness = 0;
  seq1CurrentStep: number | undefined;
  seq1: Step[] = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  seq2Randomness = 0;
  seq2CurrentStep: number | undefined;
  seq2: Step[] = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  toggleSection(event: Event, section: string) {
    event.preventDefault();
    this.activeSection = section;
  }
}
