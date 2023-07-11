import contacts from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contacts.listContacts();
        return console.table(allContacts);
      case "get":
        const contactById = await contacts.getContactById(contactId);
        return console.log(contactById);
      case "remove":
        const removeContact = await contacts.removeContact(contactId);
        return console.log(removeContact);
      case "add":
        const addContact = await contacts.addContact({ name, email, phone });
        return console.log(addContact);
      default:
        console.log("Unknown action");
    }
  } catch (error) {
    console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("--action <type>")
  .option("--contactId <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);

// node index.js --action="list"
// node index.js --action="get" --contactId 05olLMgyVQdWRwgKfg5J6
// node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
// node index.js --action="remove" --contactId qdggE76Jtbfd9eWJHrssH
// node index.js --action="remove" --contactId AeHIrLTr6JkxGE6SN-0Rw

// invokeAction({ action: "list" });
// invokeAction({ action: "get", contactId: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "remove", contactId: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "fsdfsdf",
//   email: "aaaa@mail.com",
//   phone: "4656465464",
// });
