import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { BASE_URL } from "../../utils/url";

const socket = io.connect("http://localhost:5000"); // Ensure correct backend URL

export default function Chat() {
  const { seller, buyer } = useParams();
  const roomId = [buyer, seller].sort().join("_"); // Ensures unique room ID

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Join chat room and fetch messages
  useEffect(() => {
    socket.emit("join_room", roomId);
    axios
      .get(`${BASE_URL}/messages/${roomId}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.error(error));

    // Listen for new messages
    socket.on("receive_message", (data) => {
      console.log("Received message:", data);
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [roomId]);

  // Send message
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const messageData = {
      roomId,
      senderId: buyer, // Assuming buyer is sending, modify as needed
      receiverId: seller,
      message: newMessage,
      timestamp: new Date(),
    };

    try {
      await axios.post(`${BASE_URL}/messages`, messageData);
      socket.emit("send_message", messageData);
      setMessages((prev) => [...prev, messageData]); // Update UI instantly
      setNewMessage("");
      
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white flex flex-col h-[80vh]">
      <h2 className="text-xl font-bold mb-4 text-center bg-blue-500 text-white py-2 rounded">
        Chat with Seller
      </h2>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.senderId === buyer ? "justify-end" : "justify-start"}`}>
            <div className={`px-4 py-2 rounded-lg max-w-[70%] ${msg.senderId === buyer ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
              {msg.message}
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
