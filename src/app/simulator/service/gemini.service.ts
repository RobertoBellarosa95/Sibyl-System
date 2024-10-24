import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GeminiService {
  genAI = new GoogleGenerativeAI('AIzaSyDIeNKYEEdMbzwcRYauGW_XfgMgH2K9ANs');
  generationConfig = {
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ],
    temperature: 0.9,
    top_p: 1,
    top_k: 32,
    maxOutputTokens: 100, // limit output
  };
  model = this.genAI.getGenerativeModel({
    model: 'gemini-pro', // or 'gemini-pro-vision'
    ...this.generationConfig,
  });

  constructor(private httpClient: HttpClient) {}

  async TestGeminiPro() {
    // Model initialisation missing for brevity
  
    const prompt = 'What is the largest number with a name?';
    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
  }

}
