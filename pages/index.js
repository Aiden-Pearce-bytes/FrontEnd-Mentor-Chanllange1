import Image from "next/image";
import Qrcode from "../public/assets/image-qr-code.png";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1440px] flex h-full mx-auto justify-center items-center">
        <div className="rounded-xl p-4 bg-white h-auto flex flex-col">
          <Image src={Qrcode} width="250" />
          <h1 className="max-w-[250px] font-bold text-xl text-center p-2 py-2">
            Improve your front-end skills by building projects
          </h1>
          <p className="max-w-[250px] font-light text-center py-2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}
