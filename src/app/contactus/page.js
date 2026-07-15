import link from "next/link";
export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <link href="/contactus/1">Contact 1</link>
      <link href="/contactus/2">Contact 2</link>
      <link href="/contactus/3">Contact 3</link>
    </div>
  );
}