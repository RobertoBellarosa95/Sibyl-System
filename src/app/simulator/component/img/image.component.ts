import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-image',
  template: `<div class="circular-image-wrapper">
    <img src="assets/img/brain.webp" alt="Brain Circular Image" />
  </div>`,
  styles: [
    `
      .circular-image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 50%;
        width: 150px; /* Adjust based on your needs */
        height: 150px; /* Adjust based on your needs */
        border: 2px solid whitesmoke; /* Optional: adds a border around the image */
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6); /* Optional: adds a shadow for a more pronounced frame */
      }

      .circular-image-wrapper img {
        width: 100%;
        height: auto;
        transition: transform 0.5s ease-in-out;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(
            1.2
          ); /* Adjust scale value for more or less enlargement */
        }
      }
    `,
  ],
})
export class CircularImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
