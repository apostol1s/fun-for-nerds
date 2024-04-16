import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  @Output() wordSubmitted = new EventEmitter<string>();
  @Output() partialWord = new EventEmitter<string>();
  currentWord: string = '';

  onInput(event: Event) {
    this.currentWord = (event.target as HTMLInputElement).value;
    this.partialWord.emit(this.currentWord);    
  }

  onSubmit() {
    this.wordSubmitted.emit(this.currentWord);
  }
}
