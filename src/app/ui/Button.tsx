import clsx from "clsx";
import Link from "next/link";
export default function Button({property, href, label, className=""}:{property: string, href: string, label: string, className?: string}) {
  return (
    <Link href={href} className={clsx(
        `${className} font-normal text-center text-xl w-full sm:w-fit rounded-[14px] px-[35px] py-5`,
        {
            "bg-dark text-white": property === "primary",
            "bg-transparent border border-dark": property === "secondary",
            "bg-green ": property === "tertiary",

        }
    )}>{label}</Link>
  );

}