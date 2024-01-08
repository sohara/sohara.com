import Image from "next/image";
import profilePic from "../images/avatar-square.jpg";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl text-center ">
      <p className=" mb-8">
        A skilled full-stack engineer with over two decades of experience in
        multiple platforms and frameworks, I value pragmatic decision-making
        applied to products that embody sound design and long-term
        maintainability. Most recently I have focussed on application
        development with React, Typescript and Node.js.
      </p>

      <Image
        src={profilePic}
        width={600}
        height={600}
        className="block mx-auto mb-8 rounded-full border-4 border-gray-600"
        alt="Sean O'Hara"
      />

      <p className="mx-auto mb-8">Current location: Montréal, Canada</p>
    </div>
  );
}
