import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "owner", text: "Hello! How can I help you?" },
    { sender: "user", text: "Is the property still available?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white flex flex-col h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-center bg-blue-500 text-white py-2 rounded">
        Chat with Owner
      </h2>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex gap-2 mt-2 border-t p-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 flex-1 rounded focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
