import InvLayout from "@/components/Layout/InvLayout";
import RecLayout from "@/components/Layout/RecLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <InvLayout />
      </div>
      <div className="flex-1">
        <RecLayout />
      </div>
    </div>
  );
}
