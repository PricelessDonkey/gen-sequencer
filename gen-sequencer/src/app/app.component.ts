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
  isPlaying = false;
  activeSection: string = 'A'; // Tracks the active section
  seq1Value1 = 0;
  seq1Value2 = 0;
  seq1Value3 = 0;
  seq1Value4 = 0;
  seq1Value5 = 0;
  seq1Value6 = 0;
  seq1Value7 = 0;
  seq1Value8 = 0;

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
  seq2Value1 = 0;
  seq2Value2 = 0;
  seq2Value3 = 0;
  seq2Value4 = 0;
  seq2Value5 = 0;
  seq2Value6 = 0;
  seq2Value7 = 0;
  seq2Value8 = 0;
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
  seq3Value1 = 0;
  seq3Value2 = 0;
  seq3Value3 = 0;
  seq3Value4 = 0;
  seq3Value5 = 0;
  seq3Value6 = 0;
  seq3Value7 = 0;
  seq3Value8 = 0;
  seq3CurrentStep: number | undefined;
  seq3: Step[] = [
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

  toggleStep(event: Event, step: Step) {
    event.preventDefault();
    step.selected = !(step.selected);
  }

  togglePlaying(event: Event) {
    event.preventDefault();
    this.isPlaying = !this.isPlaying;
  }
}
