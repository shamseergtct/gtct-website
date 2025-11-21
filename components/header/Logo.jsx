import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo/gtct-logo.png"
        alt="GTCT Logo"
        width={160}
        height={60}
        priority
      />
    </Link>
  );
}
