import Link from 'next/link';import { ReactNode } from 'react';
export function Button({children,href}:{children:ReactNode;href?:string}){const c='inline-flex rounded-full gold px-5 py-3 text-sm font-bold text-[#061326] shadow-glow transition hover:scale-105';return href?<Link className={c} href={href}>{children}</Link>:<button className={c}>{children}</button>}
export function Card({children,className=''}:{children:ReactNode;className?:string}){return <div className={`glass rounded-3xl p-6 shadow-glow ${className}`}>{children}</div>}
