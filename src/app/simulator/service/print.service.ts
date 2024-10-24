import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PrintService {
  constructor() {}

  downloadTextFile(text: string) {
    // Create blob with your text
    const blob = new Blob([text], { type: 'text/plain' });
    // Create URL for your blob
    const fileUrl = window.URL.createObjectURL(blob);
    // Create an anchor element (<a>) and start download
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'conversation.txt';
    anchor.click();
    // Optional: remove temporary URL if necessary
    window.URL.revokeObjectURL(fileUrl);
  }
}
