import Image from "next/image";

export default function Logo({property, width=219.54, height=36}:{property?: string, width?: number, height?: number}) {
    return (
        <Image src="/logo.svg" alt="" width={width} height={height} 
        style={{
            width: 'auto',
            height: 'auto',
          }}
        priority className={property === 'white' ? "filter invert" : ""}/>        
    );
}