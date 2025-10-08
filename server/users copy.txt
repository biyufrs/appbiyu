"use server"

import { db } from "@/db/drizzle"
import { User, users } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getUsers() {
    try{
        const allUsers = await db.select().from(users)
        return allUsers
    } catch (error){
     console.error(error)
    throw error
    }
   
}
// api create untuk membuat data baru ke table atau database
export async function createUser(user:Omit<User,"id"|"createdAt"|"updateAt">) {
    try{
        await db.insert(users).values(user)
    }catch (error){
        console.error(error)
        return{error:'pembuatan user baru gagal'}
    }

}
// 
export async function updateUser(id:string,user:Omit<User,"createdAt"|"updateAt">) {
    try{
        await db.update(users).set(user).where(eq(users.id,user.id))
    }catch (error){
        console.error(error)
        return{error:'pembuatan user baru gagal'}
    }
}
// api delete untuk menghapus data yang yg telah ada di table / database
export async function deleteUser(id:string) {
    try{
        // dr db table users di neo delete dimana id nya sama (equal dg id yang kita pilih)
        await db.delete(users).where(eq(users.id,id))
    }catch (error){
        console.error(error)
        return{error:'pembuatan user baru gagal'}
    }
}