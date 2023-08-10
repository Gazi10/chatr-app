import axios from "axios";

export const getInbox = async (email) => {
  const getAllMail = async (email) => {
    try {
      return await axios.get(
        `http://localhost:8000/email/mail/read/all/${email}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getMail = async (id) => {
    try {
      return await axios.get(`http://localhost:8000/email/mail/read/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to organize emails by sender
  async function organizeEmailsBySender() {
    const emailData = await getAllMail(email);
    const emailsBySender = {};

    const emailArray = emailData.data.messages;

    // Loop through each email object in the emailData
    if (emailArray != null) {
      for (let i = 0; i < emailArray.length; i++) {
        const email = await getMail(emailArray[i].id);
        const sender = emailSender(email.data);
        const receiver = emailReceiver(email.data);

        console.log([sender,receiver])

        const key = generateSenderReceiverKey(sender, receiver)
        console.log(key)

        // Check if the sender is already in the emailsBySender object
        if (!emailsBySender[key]) {
          emailsBySender[key] = [];
        }

        // Add the email object to the array of emails for the sender
        emailsBySender[key].push(email);
      }
    }

    const categorizedEmails = Object.fromEntries(
      Object.entries(emailsBySender).map(([key, value]) => [
        key,
        value.map((item) => item.data),
      ])
    );

    console.log(categorizedEmails);
    return categorizedEmails;
  }

  // Function to generate a consistent key for sender-receiver pair
  function generateSenderReceiverKey(sender, receiver) {
    // Sort the sender and receiver and join them with a delimiter
    const sortedPair = [sender, receiver].sort().join("-");
    return sortedPair;
  }

  // Function to extract the sender's email address from an email object
  function emailSender(email) {
    const headers = email.payload?.headers;
    const fromHeader = headers
      ? headers.find((header) => header.name === "From")
      : null;

    // Extract the sender's email address from the "From" header
    const sender = fromHeader ? fromHeader.value : "Unknown Sender";
    return sender;
  }

  function emailReceiver(email) {
    const headers = email.payload?.headers;
    const fromHeader = headers
      ? headers.find((header) => header.name === "To")
      : null;

    // Extract the sender's email address from the "From" header
    const sender = fromHeader ? fromHeader.value : "Unknown Receiver";
    return sender;
  }

  // async function saveConfiguredEmails(emails) {
  //   await UserModel.findOneAndUpdate(
  //     { id: currentUser.id },
  //     { $set: { inbox: emails } },
  //   );
  // }
  return organizeEmailsBySender();
};
