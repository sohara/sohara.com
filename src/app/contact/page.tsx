export const metadata = {
  title: "Contact - Sean O'Hara",
};

export default function Contact() {
  return (
    <p className="text-center">
      I can be reached at{" "}
      <a
        href="mailto:sohara@sohara.com"
        className="text-gray-600 font-bold no-underline"
      >
        sohara@sohara.com
      </a>
      .
    </p>
  );
}
