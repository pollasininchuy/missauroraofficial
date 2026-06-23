import { z } from 'zod';
export const scoreSchema=z.number().min(1).max(10).multipleOf(.1);
export function rank<T extends { total:number }>(rows:T[]){return [...rows].sort((a,b)=>b.total-a.total).map((r,i)=>({...r,rank:i+1}));}
export function scoreValid(value:number){return Number.isFinite(value)&&value>=1&&value<=10&&Math.round(value*10)===value*10;}
