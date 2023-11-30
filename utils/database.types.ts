export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      business: {
        Row: {
          description: string | null
          id: string
          logo: string | null
          name: string
          profileId: string
        }
        Insert: {
          description?: string | null
          id?: string
          logo?: string | null
          name: string
          profileId: string
        }
        Update: {
          description?: string | null
          id?: string
          logo?: string | null
          name?: string
          profileId?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          id: string
          image: string | null
          name: string
          price: number
          storeId: string
        }
        Insert: {
          id?: string
          image?: string | null
          name: string
          price: number
          storeId: string
        }
        Update: {
          id?: string
          image?: string | null
          name?: string
          price?: number
          storeId?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_storeId_fkey"
            columns: ["storeId"]
            isOneToOne: false
            referencedRelation: "store"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          createdAt: string
          email: string
          id: string
          profile_photo: string | null
          username: string | null
        }
        Insert: {
          createdAt?: string
          email: string
          id?: string
          profile_photo?: string | null
          username?: string | null
        }
        Update: {
          createdAt?: string
          email?: string
          id?: string
          profile_photo?: string | null
          username?: string | null
        }
        Relationships: []
      }
      store: {
        Row: {
          businessId: string
          description: string | null
          id: string
          location: string | null
          logo: string | null
          name: string
        }
        Insert: {
          businessId: string
          description?: string | null
          id?: string
          location?: string | null
          logo?: string | null
          name: string
        }
        Update: {
          businessId?: string
          description?: string | null
          id?: string
          location?: string | null
          logo?: string | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_businessId_fkey"
            columns: ["businessId"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
