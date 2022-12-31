import Link from "next/link";
import { useRouter } from "next/router";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactId } = router.query;
  debugger
  console.log(contactId);
  const contactInfo = contacts.find((contactInfo) => contactInfo.id === contactId);
  console.log(contactInfo);
  return (
    <>
      <h1>Learn {contactInfo}</h1>
      <Link href={`/`}>
        <button>Go back</button>
      </Link>
      {/*  */}
    </>
  );
}
