import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key');
export type Contestant={id:string;contestant_number:number;full_name:string;country:string;age:number;profile_image:string|null;created_at:string};
export type ScoreCategory='Welcome Ceremony'|'National Costume'|'Preliminary Swimsuit Competition'|'Preliminary Evening Gown Competition'|'Final Swimsuit Competition'|'Final Evening Gown Competition'|'Final Question';
export const categories:ScoreCategory[]=['Welcome Ceremony','National Costume','Preliminary Swimsuit Competition','Preliminary Evening Gown Competition','Final Swimsuit Competition','Final Evening Gown Competition','Final Question'];
