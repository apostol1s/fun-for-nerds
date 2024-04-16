import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [],
  templateUrl: './even-length-words.component.html',
  styleUrl: './even-length-words.component.css'
})
export class EvenLengthWordsComponent {
  @Input() evenLengthWord: string[];
  @Input() partialEvenWord: string = '';
}