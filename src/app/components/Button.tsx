import clsx from "clsx";
import Link from "next/link";
export default function Button({property, href, label}:{property: string, href: string, label: string}) {
  return (
    <Link href={href} className={clsx(
        "font-normal text-xl w-fit h-fit rounded-[14px] px-[35px] py-5",
        {
            "bg-dark text-white": property === "primary",
            "bg-transparent border border-dark": property === "secondary",
            "bg-green ": property === "tertiary",

        }
    )}>{label}</Link>
  );

}