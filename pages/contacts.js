import contacts from "./api/contacts";
import Link from "next/link";

export default function Contacts() {
  return (
    <ol>
      {contacts.map((contact) => {
        return (
          <li>
            <Link href={`/contacts/${contact.id}`} key={contact.id}>
              {contact.name}
              <span>-&gt;</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
