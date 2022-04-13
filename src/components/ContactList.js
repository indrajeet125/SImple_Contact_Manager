import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts=[
  //   {
  //     id: "1",
  //     name:"indra",
  //     email:"indra@gamil.com",
  //   }
  // ]
  const renderContactList =props.contacts.map((contact) => {
    return (
     
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />

    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
