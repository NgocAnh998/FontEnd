import { useState } from "react";
import "./Messages.css";
import ProfileMenu from "../../components/Profile/ProfileMenu.tsx";

const initialChats = [
    { id: 1, name: "Tiệm Len Nhà Mây", avatar: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100", lastMessage: "Mẫu này còn hàng bạn nhé!", time: "10:30", unread: 2, online: true },
    { id: 2, name: "Handmade Corner", avatar: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=100", lastMessage: "Bạn có thể chọn màu theo yêu cầu.", time: "Hôm qua", unread: 0, online: false },
    { id: 3, name: "Góc Nhỏ Handmade", avatar: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100", lastMessage: "Cảm ơn bạn đã đặt hàng!", time: "Thứ 2", unread: 0, online: true },
    { id: 4, name: "Móc Len Xinh", avatar: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", lastMessage: "Shop đã gửi đơn hàng rồi ạ.", time: "20/11", unread: 0, online: false }
];

const initialMessages = {
    1: [
        { id: 1, sender: "shop", text: "Xin chào! Shop có thể giúp gì cho bạn?", time: "10:20" },
        { id: 2, sender: "user", text: "Shop cho mình hỏi mẫu túi tote này còn hàng không ạ?", time: "10:25" },
        { id: 3, sender: "shop", text: "Mẫu này còn hàng bạn nhé!", time: "10:30" }
    ],
    2: [
        { id: 1, sender: "shop", text: "Chào bạn, cảm ơn bạn đã quan tâm đến sản phẩm của shop.", time: "09:00" },
        { id: 2, sender: "user", text: "Mình muốn đặt một món quà handmade theo yêu cầu.", time: "09:15" },
        { id: 3, sender: "shop", text: "Bạn có thể chọn màu theo yêu cầu.", time: "09:20" }
    ],
    3: [
        { id: 1, sender: "user", text: "Mình đã nhận được hàng rồi ạ.", time: "14:00" },
        { id: 2, sender: "shop", text: "Cảm ơn bạn đã đặt hàng!", time: "14:10" }
    ],
    4: [
        { id: 1, sender: "shop", text: "Shop đã gửi đơn hàng rồi ạ.", time: "16:00" }
    ]
};

function Messages() {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);
    const [selectedChat, setSelectedChat] = useState(1);
    const [search, setSearch] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const currentChat = chats.find((chat) => chat.id === selectedChat);
    const currentMessages = messages[selectedChat] || [];

    const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));

    const handleSelectChat = (chat) => {
        setSelectedChat(chat.id);
        setChats(chats.map((item) => item.id === chat.id ? { ...item, unread: 0 } : item));
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!messageInput.trim()) return;

        const newMessage = { id: Date.now(), sender: "user", text: messageInput.trim(), time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) };

        setMessages({ ...messages, [selectedChat]: [...currentMessages, newMessage] });
        setChats(chats.map((chat) => chat.id === selectedChat ? { ...chat, lastMessage: newMessage.text, time: newMessage.time } : chat));
        setMessageInput("");
    };

    return (
        <div className="row g-4">
            <div className="col-12 col-md-4 col-lg-3">
                <ProfileMenu />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
        <div className="messages-page container py-4">
            <h2 className="messages-title">Tin nhắn</h2>

            <div className="messages-container">
                <div className="messages-sidebar">
                    <div className="messages-search"><input type="text" className="form-control" placeholder="Tìm kiếm cửa hàng..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>

                    <div className="messages-chat-list">
                        {filteredChats.map((chat) => (
                            <div className={`messages-chat-item ${selectedChat === chat.id ? "active" : ""}`} key={chat.id} onClick={() => handleSelectChat(chat)}>
                                <div className="messages-avatar-wrapper"><img src={chat.avatar} alt={chat.name} className="messages-avatar" />{chat.online && <span className="messages-online-dot"></span>}</div>
                                <div className="messages-chat-info"><div className="messages-chat-name">{chat.name}</div><div className="messages-last-message">{chat.lastMessage}</div></div>
                                <div className="messages-chat-meta"><span className="messages-chat-time">{chat.time}</span>{chat.unread > 0 && <span className="messages-unread">{chat.unread}</span>}</div>
                            </div>
                        ))}
                        {filteredChats.length === 0 && <div className="messages-no-chat">Không tìm thấy cuộc trò chuyện.</div>}
                    </div>
                </div>

                <div className="messages-main">
                    {currentChat ? (
                        <>
                            <div className="messages-main-header"><img src={currentChat.avatar} alt={currentChat.name} className="messages-avatar" /><div><div className="messages-chat-name">{currentChat.name}</div><span className="messages-status">{currentChat.online ? "Đang hoạt động" : "Ngoại tuyến"}</span></div></div>

                            <div className="messages-chat-content">
                                {currentMessages.map((message) => (
                                    <div className={`messages-row ${message.sender === "user" ? "messages-row-user" : "messages-row-shop"}`} key={message.id}>
                                        {message.sender === "shop" && <img src={currentChat.avatar} alt="" className="messages-small-avatar" />}
                                        <div className="messages-bubble"><div>{message.text}</div><span className="messages-time">{message.time}</span></div>
                                    </div>
                                ))}
                            </div>

                            <form className="messages-input-area" onSubmit={handleSendMessage}><input type="text" className="form-control" placeholder="Nhập tin nhắn..." value={messageInput} onChange={(e) => setMessageInput(e.target.value)} /><button type="submit" className="btn btn-dark" disabled={!messageInput.trim()}>Gửi</button></form>
                        </>
                    ) : (
                        <div className="messages-empty-main"><div className="messages-empty-icon">💬</div><h5>Chọn một cuộc trò chuyện</h5><p>Chọn cửa hàng để bắt đầu nhắn tin.</p></div>
                    )}
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Messages;