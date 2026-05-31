interface ResponseRule {
  keywords: string[];
  response: string;
}

export const responseRules: ResponseRule[] = [
  {
    keywords: ["hi", "hello", "hey", "good morning", "good evening"],
    response: "Hey there! How may I be of assistance to you?",
  },
  {
    keywords: ["reputation", "manage reputation"],
    response:
      "We help individuals and businesses protect their online reputation through content removal, suppression, and ongoing protection.",
  },
  {
    keywords: ["defamation", "false content"],
    response:
      "If you're facing online defamation, we can help remove or suppress that content. Please let us know more details.",
  },
  {
    keywords: ["protection", "alerts"],
    response:
      "Our protection service helps safeguard your online presence and alerts you about potential threats to your digital reputation.",
  },
  {
    keywords: ["remove", "delete", "content"],
    response:
      "We specialize in removing or suppressing negative online content. Kindly provide more details about the content.",
  },
  {
    keywords: ["support", "agent", "contact"],
    response:
      "Our support team has been notified and will follow up with you shortly.",
  },
  {
    keywords: ["price", "cost", "charge", "plans"],
    response:
      "We offer customized pricing based on the complexity of your case. Please contact us through the contact page for a detailed quote.",
  },
];
