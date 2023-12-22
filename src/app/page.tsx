import Image from "next/image";
import profilePic from "../images/avatar-square.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-md text-center ">
        <p className=" mb-8">
          I&apos;m a web developer with over two decades of front and back end
          experience. I currently specialize in single page javascript
          applications.
        </p>

        <Image
          src={profilePic}
          className="block mx-auto mb-8 rounded-full border-4 border-grey-darker"
          alt="Sean O'Hara"
        />

        <p className="mx-auto mb-8">Current location: Montréal, Canada</p>
      </div>
    </main>
  );
}
