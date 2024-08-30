import Image from "next/image";

export default function Logo({property}:{property?: string}) {
    return (
        <Image src="/logo.svg" alt="" width={1} height={1} 
        style={{
            width: 'auto',
            height: 'auto',
          }}
        className={property === 'white' ? "filter invert" : ""} priority/>        
    );
}