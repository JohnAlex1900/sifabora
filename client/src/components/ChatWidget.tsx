import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { responseRules } from "../lib/responses";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const faqSuggestions = [
  "What is reputation management?",
  "How do I remove harmful content?",
  "Do you offer device protection services?",
  "How much do your services cost?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [unresolvedQueries, setUnresolvedQueries] = useState<string[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (optionalInput?: string) => {
    const trimmedInput = optionalInput ?? input.trim();
    if (!trimmedInput) return;

    const userMessage: Message = { sender: "user", text: trimmedInput };
    const botReply = getBotResponse(trimmedInput);

    const botMessage: Message = {
      sender: "bot",
      text: botReply.response,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");

    if (!botReply.matched) {
      setUnresolvedQueries((prev) => [...prev, trimmedInput]);
    }
  };

  const getBotResponse = (
    inputText: string,
  ): { matched: boolean; response: string } => {
    const text = inputText.toLowerCase();

    for (const rule of responseRules) {
      if (rule.keywords.some((kw) => text.includes(kw))) {
        return { matched: true, response: rule.response };
      }
    }

    return {
      matched: false,
      response:
        "I'm not sure how to help with that right now. A support agent will get back to you shortly.",
    };
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-primary text-white px-5 py-3 rounded-full shadow-lg z-50 text-sm sm:text-base"
      >
        {isOpen ? "Close" : "Help"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[95vw] bg-white shadow-xl rounded-xl p-4 z-50 max-h-[500px] flex flex-col border border-gray-200">
          <div className="text-lg font-semibold mb-3 text-primary">
            Sifabora Assistant
          </div>

          <div className="flex-1 overflow-y-auto mb-3 space-y-2 pr-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-primary text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Suggestions */}
          {input.trim() === "" && (
            <div className="mb-2">
              <p className="text-xs text-gray-400 mb-1">Suggested Questions:</p>
              <ul className="space-y-1">
                {faqSuggestions.map((faq, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSend(faq)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {faq}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Input */}
          <div className="flex mt-auto">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 rounded-l-lg p-2 text-sm focus:outline-none"
              placeholder="Ask a question..."
            />
            <button
              onClick={() => handleSend()}
              className="bg-primary text-white px-4 rounded-r-lg text-sm hover:bg-primary-dark"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
