import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <div class="text-light">
      <h3><b>Project Section Description: Sibyl System</b></h3>
      <br />
      <h4>Overview</h4>
      <h5>
        This project focuses on developing a Conversation Simulation System
        (CSS) designed to facilitate and analyze interactions between a
        configurable number of entities (both AI and human) on a specified
        theme.
      </h5>
      <h5>
        The system aims to emulate realistic dialogues, providing insights into
        communication patterns, decision-making processes, and thematic
        discourse effectiveness.
      </h5>
      <br />
      <h4>Objectives</h4>
      <h5>
        <b>Configurability:</b> Ensure the system can dynamically adjust the
        number of participating entities and select themes according to user
        specifications.
      </h5>
      <h5>
        <b>Interactivity:</b> Develop a user-friendly interface that allows
        participants to engage in conversations seamlessly, ensuring that the
        flow of dialogue remains natural and coherent.
      </h5>
      <!-- <h5>
        <b>Analysis Tools:</b> Implement analytical tools to monitor and
        evaluate the conversation's progress, sentiment, thematic adherence, and
        engagement levels.
      </h5> -->
      <h5>
        <b>Realism:</b> Incorporate advanced natural language processing (NLP)
        techniques to simulate human-like responses and interactions, enhancing
        the realism of the conversations.
      </h5>
      <br />
      <h4>Key Features</h4>
      <h5>
        <b>Dynamic Entity Configuration:</b> Users can set the number and type
        of entities involved in the simulation, ranging from purely AI-driven
        bots to human participants or a hybrid.
      </h5>
      <!-- <h5>
        <b>Theme Selection:</b> The system offers a diverse array of pre-defined
        themes, which can be further customized, enabling users to explore
        specific topics or scenarios.
      </h5> -->
      <!-- <h5>
        <b>Real-time Interaction Monitoring:</b> Includes tools to observe and
        analyze the conversation in real time, providing valuable feedback on
        engagement metrics and thematic consistency.
      </h5> -->
      <!-- <h5>
        <b>Feedback Mechanism:</b> After each session, the system generates a
        comprehensive report detailing performance metrics, suggesting areas for
        improvement and highlighting successful interaction strategies.
      </h5> -->
      <br />
      <h4>Technology Stack</h4>
      <h5>
        <b>Frontend:</b>Angular for a dynamic and responsive user interface.
      </h5>
      <!-- <h5>
        <b>Backend:</b> Node.js with Express for handling server-side logic, API
        integration, and participant management.
    </h5> -->
      <!-- <h5>
        <b>NLP Engine:</b> Integration of TensorFlow and natural language
        toolkits like NLTK or SpaCy for processing and generating conversational
        AI responses.
    </h5> -->
      <!-- <h5>
        <b>Database:</b> MongoDB or PostgreSQL to store conversation logs, user
        profiles, and session analytics.
    </h5> -->
      <br />
      <h4>Potential Challenges</h4>
      <h5>
        <b>Scalability:</b> Ensuring the system can handle a large number of
        simultaneous conversations without degradation in performance.
      </h5>
      <h5>
        <b>Data Privacy:</b> Implementing robust security measures to protect
        sensitive data and participant privacy during conversations.
      </h5>
      <h5>
        <b>Accuracy of NLP:</b> Continuously refining the NLP engine to improve
        the accuracy and relevance of AI-generated responses in thematic
        dialogues.
      </h5>
      <br />
      <h4>Impact</h4>
      <h5>
        The Sibyl System is poised to become a pivotal tool in enhancing
        communication training, conducting social research, and refining AI's
        role in realistic human interactions.
      </h5>
      <h5>
        By providing a controlled, measurable environment for dialogue, CSS
        offers significant opportunities for advancements in educational
        methods, psychological research, and AI development.
      </h5>
      <div class="row mb-2"></div>
      <h4>General Information</h4>
      <ul>
        <li>App Version: 1.0.0</li>
        <li>Support Email: arcadia@sibylsystemsimulator.com</li>
      </ul>
    </div>
  `,
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
