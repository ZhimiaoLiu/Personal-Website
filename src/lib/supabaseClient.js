import { createClient } from '@supabase/supabase-js'

// 在 Supabase 项目设置的 API 页面找这两个值
const supabaseUrl = 'https://kwrgvabbsqzrkbyyrqpy.supabase.co'
const supabaseAnonKey = 'sb_publishable_3_5ar9tPthrImTJPhIpQ2A_DAWubP89'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)