# Chatr

This is a chat-style email client application that allows users to view their Gmail messages in a conversation-like format. The application is built using React for the front-end and Node.js for the back-end, integrating the Gmail API to fetch and display emails.

## Features

- **Chat-based Interface:** Display emails in a conversational format, making it more intuitive and user-friendly.
- **Gmail Integration:** Utilizes the Gmail API to fetch emails directly from the user's Gmail account.
- **Threaded Conversations:** Group emails into threads for a more organized view, similar to a messaging app.
- **Responsive Design:** Built with a responsive design to ensure compatibility across various devices and screen sizes.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js
- **API:** Gmail API

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- NPM (Node Package Manager)
- Google Cloud Platform Project with Gmail API enabled
- OAuth 2.0 credentials for Gmail API

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Gazi10/chatr-app.git
2. Go to the folder
   ```bash
   cd chatr-app
3. Install frontend dependencies
    ```bash
    cd client
    npm install
4. Install backend dependencies
    ```bash
    cd ../server
    npm install
5. Access the application in your web browser at http://localhost:3000 by default.

## Usage
- On accessing the application, users will be prompted to authenticate their Gmail account to grant access to the application.
- Once authenticated, the emails will be fetched and displayed in a chat-style interface.
Users can navigate through their emails, view threaded conversations, and perform typical email actions like reading, and replying.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
