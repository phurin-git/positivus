import Image from "next/image";

export default function Logo({property, className=""}:{property?: string, className?: string}) {
    return (
        <Image src="/logo.svg" alt="" width={220} height={36}
        className={`${property === 'white' ? "filter invert" : ""} ${className}`} priority/>        
    );
}