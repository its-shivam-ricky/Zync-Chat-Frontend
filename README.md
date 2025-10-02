# 🚀 Zync Chat

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
</div>

<div align="center">
  
  **🎯 A modern, real-time chat application built with cutting-edge web technologies**
  
  [🌟 Live Demo](your-demo-link) • [📖 Documentation](your-docs-link) • [🐛 Report Bug](your-issues-link) • [💡 Request Feature](your-feature-request-link)
  
</div>

---

## ✨ Features

### 💬 **Real-Time Communication**
- **Instant Messaging**: Lightning-fast message delivery with Socket.io
- **Typing Indicators**: See when others are typing
- **Online Status**: Real-time user presence indicators
- **Message Timestamps**: Precise message timing

### 🎨 **Modern UI/UX**
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Toggle between themes
- **Emoji Support**: Rich emoji picker and reactions
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Message Bubbles**: Clean, modern chat interface

### 🔐 **Security & Authentication**
- **JWT Authentication**: Secure user authentication
- **Password Encryption**: bcrypt for secure password hashing
- **Input Validation**: Comprehensive data validation
- **Rate Limiting**: Protection against spam and abuse

### 🌟 **Advanced Features**
- **File Sharing**: Upload and share images, documents
- **Message Search**: Find messages quickly
- **Chat History**: Persistent message storage
- **User Profiles**: Customizable user profiles with avatars
- **Group Chats**: Create and manage group conversations
- **Message Reactions**: React to messages with emojis

---

## 🛠️ Tech Stack

### **Frontend**
- **⚛️ React.js** - Modern component-based UI library
- **🎨 CSS3/SCSS** - Styling with modern CSS features
- **📱 Responsive Design** - Mobile-first approach
- **🔄 Axios** - HTTP client for API requests
- **🎭 React Router** - Client-side routing
- **⚡ Socket.io Client** - Real-time communication

### **Backend**
- **🟢 Node.js** - JavaScript runtime environment
- **🚀 Express.js** - Fast, unopinionated web framework
- **🔌 Socket.io** - Real-time bidirectional communication
- **🍃 MongoDB** - NoSQL database for scalability
- **🔐 JWT** - JSON Web Tokens for authentication
- **🛡️ bcrypt** - Password hashing
- **✅ Joi/Yup** - Data validation

### **Development Tools**
- **📦 npm/yarn** - Package management
- **🔧 Nodemon** - Development server auto-restart
- **🎯 ESLint** - Code linting
- **🎨 Prettier** - Code formatting
- **📁 dotenv** - Environment variable management

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-shivam-ricky/Zync-Chat.git
   cd Zync-Chat
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/zync-chat
   
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   
   # File Upload (if applicable)
   MAX_FILE_SIZE=5000000
   ```

4. **Start the application**
   ```bash
   # Start server (from root directory)
   npm run dev
   
   # Start client (from client directory)
   cd client && npm start
   ```

5. **Visit the application**
   Open your browser and navigate to `http://localhost:3000`

---

## 📂 Project Structure

```
Zync-Chat/
├── 📁 client/                 # React frontend
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 components/     # React components
│   │   ├── 📁 pages/          # Page components
│   │   ├── 📁 hooks/          # Custom hooks
│   │   ├── 📁 context/        # React context
│   │   ├── 📁 utils/          # Utility functions
│   │   ├── 📁 services/       # API services
│   │   └── 📁 styles/         # CSS/SCSS files
│   └── 📄 package.json
├── 📁 server/                 # Node.js backend
│   ├── 📁 controllers/        # Route controllers
│   ├── 📁 models/            # Database models
│   ├── 📁 routes/            # API routes
│   ├── 📁 middleware/        # Custom middleware
│   ├── 📁 utils/             # Server utilities
│   ├── 📁 config/            # Configuration files
│   └── 📄 server.js          # Entry point
├── 📄 .env                   # Environment variables
├── 📄 .gitignore
└── 📄 README.md
```

---

## 🎯 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | User logout |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages` | Get messages |
| POST | `/api/messages` | Send message |
| DELETE | `/api/messages/:id` | Delete message |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user profile |

---

## 🎨 UI Components

### Core Components
- **💬 ChatWindow** - Main chat interface
- **📝 MessageInput** - Message composition area
- **👤 UserList** - Online users sidebar
- **🔔 Notification** - Toast notifications
- **🖼️ Avatar** - User profile pictures
- **😊 EmojiPicker** - Emoji selection component

### Layout Components
- **🏠 Header** - Navigation header
- **📱 Sidebar** - Collapsible sidebar
- **🔄 Loading** - Loading animations
- **⚠️ ErrorBoundary** - Error handling

---

## 🔧 Configuration

### Socket.io Events
```javascript
// Client Events
'join-room'         // Join a chat room
'send-message'      // Send a message
'typing'           // User typing indicator
'stop-typing'      // Stop typing indicator

// Server Events
'message'          // Receive message
'user-joined'      // User joined notification
'user-left'        // User left notification
'typing-indicator' // Show typing indicator
```

### Database Schema
```javascript
// User Model
{
  username: String,
  email: String,
  password: String (hashed),
  avatar: String,
  isOnline: Boolean,
  lastSeen: Date
}

// Message Model
{
  content: String,
  sender: ObjectId (ref: User),
  room: String,
  timestamp: Date,
  messageType: String // text, image, file
}
```

---

## 🚦 Available Scripts

### Development
```bash
npm run dev          # Start both client and server
npm run server       # Start server only
npm run client       # Start client only
npm run build        # Build for production
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
```

### Testing
```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

---

## 🌟 Features Showcase

### Real-Time Messaging
```javascript
// Socket.io implementation
socket.on('message', (data) => {
  setMessages(prev => [...prev, data]);
});
```

### JWT Authentication
```javascript
// Protected route middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  // Verify token...
};
```

---

## 📱 Screenshots
<div align="center">
login page
 <img width="2880" height="1800" alt="Screenshot 2025-10-02 204706" src="https://github.com/user-attachments/assets/da7595e6-2325-4f0a-be31-7d0887acd8e7" />
Sign Up page
<img width="2880" height="1800" alt="Screenshot 2025-10-02 204722" src="https://github.com/user-attachments/assets/73723fbe-0dc5-4709-9840-d628ee2a247c" />
onboarding page
<img width="2880" height="1800" alt="Screenshot 2025-10-02 204824" src="https://github.com/user-attachments/assets/504920a3-4264-46bb-9763-9111df6b8748" />
Home Page
<img width="2880" height="1800" alt="Screenshot 2025-10-02 205039" src="https://github.com/user-attachments/assets/55e48f68-d83b-42b1-a02c-7411910898fa" />
Theme selector
<img width="2880" height="1800" alt="Screenshot 2025-10-02 205113" src="https://github.com/user-attachments/assets/6f61723e-15f0-457a-871d-34d2b25b8292" />
change theme
<img width="2880" height="1800" alt="Screenshot 2025-10-02 205150" src="https://github.com/user-attachments/assets/de15b4e8-a134-4cd9-9715-13985cbb548f" />
Chat page
<img width="2880" height="1800" alt="Screenshot 2025-10-02 205232" src="https://github.com/user-attachments/assets/98f13f82-28ab-4ac0-aead-46bd28a798e4" />
video call Page
<img width="2880" height="1800" alt="Screenshot 2025-10-02 205333" src="https://github.com/user-attachments/assets/4d04cde2-c880-42f6-973d-bab2524d99b8" />


</div>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **💻 Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** to the branch (`git push origin feature/AmazingFeature`)
5. **🔀 Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Socket connection fails | Check if server is running on correct port |
| Messages not loading | Verify MongoDB connection |
| Authentication errors | Check JWT secret in environment variables |

---

## 📋 TODO

- [ ] 🎵 Voice messages
- [ ] 📹 Video calling
- [ ] 🌐 Multi-language support
- [ ] 🤖 Bot integration
- [ ] 📊 Analytics dashboard
- [ ] 🔒 End-to-end encryption
- [ ] 📱 Mobile app (React Native)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shivam Ricky**
- GitHub: [@its-shivam-ricky](https://github.com/its-shivam-ricky)

---

## 🙏 Acknowledgments

- **Socket.io** for real-time communication
- **React** community for amazing components
- **MongoDB** for flexible database solutions
- **Node.js** for powerful backend capabilities
- All contributors and testers

---

## 📞 Support

If you like this project, please consider:

- ⭐ **Starring** the repository
- 🐛 **Reporting** bugs
- 💡 **Suggesting** new features
- 🤝 **Contributing** to the codebase

---

<div align="center">
  
  **🚀 Built with ❤️ by [Shivam Ricky](https://github.com/its-shivam-ricky)**
  
  ![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=its-shivam-ricky.Zync-Chat)
  
</div>

