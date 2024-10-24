export class ChatGptRepsonse {
  id: string = '';
  object: string = '';
  created: number = NaN;
  model: string = '';
  choices: Choice[] = [];
  usage: Usage = new Usage();
  system_fingerprint: string = '';
}

export class Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;

  constructor() {
    this.prompt_tokens = NaN;
    this.completion_tokens = NaN;
    this.total_tokens = NaN;
  }
}

export class Choice {
  index: number = NaN;
  message: Message = new Message();
  logprobs: string = '';
  finish_reason: string = '';
}

export class Message {
  role: string;
  content: string;

  constructor() {
    this.role = '';
    this.content = '';
  }
}
