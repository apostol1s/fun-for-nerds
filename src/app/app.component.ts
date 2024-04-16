import { Component } from '@angular/core';
import { WordInputComponent } from './components/word-input/word-input.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WordInputComponent, EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-for-nerds';
  partialOddWord: string = '';
  partialEvenWord: string = '';

  oddLengthWord: string[] = [];
  evenLengthWord: string[] = [];

  onWord(word: string) {
    if (word.length % 2 === 0 && word !== '') {
      this.evenLengthWord.push(word);
    } else if (word.length % 2 !== 0 && word !== '') {
      this.oddLengthWord.push(word);
    }  
  }

  onPartialWord(word: string) {
    if (word.length % 2 === 0) {
      this.partialEvenWord = word;
      this.partialOddWord = '';            
    } else {      
        this.partialOddWord = word;  
        this.partialEvenWord = '';             
    }
  }  
}
