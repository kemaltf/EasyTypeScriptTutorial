interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalcode: number;
}

let primaryContact: Contact = {
  id: 123,
  name: "kemal",
  line1: "your address",
  line2: "your address",
  province: "your province",
  region: "your region",
  postalcode: 12345,
};
