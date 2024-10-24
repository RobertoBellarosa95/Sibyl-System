import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpeakService {
  speak(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynthesis
          .getVoices()
          // .filter((voce) => voce.lang === 'en-GB')[0]; // or another voice filter necessary
          .filter((voce) => voce.lang === 'it-IT')[0]; // or another voice filter necessary
        utterance.rate = 1;

        utterance.onend = () => resolve();
        utterance.onerror = (event) => reject(event.error);

        speechSynthesis.speak(utterance);
      } else {
        reject('API Web Speech not supported in this browser.');
      }
    });
  }
}
