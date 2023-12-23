import Image from "next/image";
import profilePic from "../images/avatar-square.jpg";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl text-center ">
      <p className=" mb-8">
        I&apos;m a web developer with over two decades of front and back end
        experience. I currently specialize in single page javascript
        applications.
      </p>

      <Image
        src={profilePic}
        className="block mx-auto mb-8 rounded-full border-4 border-gray-600"
        alt="Sean O'Hara"
      />

      <p className="mx-auto mb-8">Current location: Montréal, Canada</p>
    </div>
  );
}
