export class Person {
  id: string;
  name: string;
  response: string;
  sentences: string[];
  role: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.response = '';
    this.sentences = [];
    this.role = '';
  }
}

export class Sentence {
  value: string;
  spoken: boolean;

  constructor() {
    this.value = '';
    this.spoken = false;
  }
}
