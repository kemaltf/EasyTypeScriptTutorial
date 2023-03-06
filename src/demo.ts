interface Contact {
  id: number;
  name: string;
  birthDate?: Date;
}

// if we decided to not filled the birthDate, we can add "?" on the property
let primaryContact: Contact = {
  id: 123,
  name: "kemal",
};
