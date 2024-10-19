import React, { useState } from "react";
import lady from '../assets/images/lady.svg'; // Import SVG as an image

const initialNotifications = [
  { id: 1, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
  { id: 2, sender: "lady", message: "Website maintenance", time: "5 min ago" },
  { id: 3, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
  { id: 4, sender: "lady", message: "Afolabi Tobi sent you a message", time: "5 days ago" },
  { id: 5, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
  { id: 6, sender: "lady", message: "New houses available for rent", time: "5 hours ago" },
  { id: 7, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
  { id: 8, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
  { id: 9, sender: "lady", message: "New houses available for rent", time: "5 min ago" },
];

const NotificationItem = ({ id, sender, message, time, clearNotification }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-full">
          {sender === "lady" ? (
            <img src={lady} alt="Lady" className="w-10 h-10 rounded-full" />
          ) : sender ? (
            <span>{sender}</span>
          ) : (
            <span>N/A</span>
          )}
        </div>
        <div className="ml-4">
          <p className="text-gray-800">{message}</p>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
      </div>
      <button
        onClick={() => clearNotification(id)}
        className="text-blue-500 hover:text-blue-700"
      >
        Clear
      </button>
    </div>
  );
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isVisible, setIsVisible] = useState(true); // Visibility of notifications

  const clearNotification = (id) => {
    const filteredNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(filteredNotifications);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const newNotificationCount = notifications.length;

  if (!isVisible) return null; // Do not render anything if the notifications are closed

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-black text-white rounded-md px-2 py-1">
            {newNotificationCount} new
          </div>
          <button
            onClick={clearAllNotifications}
            className="text-blue-500 hover:text-blue-700"
          >
            Clear all
          </button>
          {/* Close Notifications Button */}
          <button
            onClick={() => setIsVisible(false)} // Close notifications when clicked
            className="text-red-500 hover:text-red-700"
          >
            Close
          </button>
        </div>
      </div>

      {/* Notification List */}
      <div className="mt-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              sender={notification.sender}
              message={notification.message}
              time={notification.time}
              clearNotification={clearNotification}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
