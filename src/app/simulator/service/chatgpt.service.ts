import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChatGptRepsonse } from '../model/ai-response.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private baseURL = environment.baseApiURL;

  constructor(
    private http: HttpClient,
  ) {}

  async sendMessage(prompt: string): Promise<ChatGptRepsonse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('apikey')}`,
    });

    const body = {
      model: 'gpt-4o',
      temperature: 0.5,
      max_tokens: 4000,
      response_format: { type: 'json_object' },
      messages: [{ role: 'user', content: prompt }],
    };

    return firstValueFrom(
      this.http.post<ChatGptRepsonse>(this.baseURL, body, {
        headers: headers,
      })
    );
  }
}
