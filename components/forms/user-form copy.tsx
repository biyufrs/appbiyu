// "use client"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { User } from "@/db/schema"
// import { createUser, updateUser } from "@/server/users"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useRouter } from "next/router"
// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { toast } from "sonner"
// import { z } from "zod"
// interface TipeDataDariSkemaUser{
//     user?:User
// }


// const formSchema = z.object({
//   username: z.string().min(2).max(50),
//   email: z.email(),
// //   pr kasih password
// })

// export default function UserForm(
//     {user}:TipeDataDariSkemaUser
// ) {
//     const router = useRouter()  //router untuk refresh page otomatis
//     const [isLoading,setIsLoading] = useState(false)  //tujuan false untuk mencegah form kesubmit berkali kali
//     //mencegah
//         const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//         username: user?.username||"", // untuk mengambil input dari username
//         email: user?.email||"", // untuk mengambil input dari email
//          //pr pass// untuk mengambil input dari pass 
//     },
//   })
 
//     // 2. Define a submit handler.
//     async function onSubmit(values: z.infer<typeof formSchema>) {
//         // Do something with the form values.
//         // ✅ This will be type-safe and validated.
//         setIsLoading(true)
//         try {
//             const userData = {
//                 ...values, //seluruh data dari input form
//                 password:"inipasswordalaala"
//             }
//         if(user){
//                 await updateUser({
//                     ...userData,
//                     id:user.id
//                 })
//             }else{
//                 await createUser(userData)
//             }
//             form.reset() //setelah data tersubmit input dikosongkan 
//             toast.success('alhamdulillah ${user? "update":"penambahan"} data santri,telah berhasil dan allah mudahkan') //popup notifikasi yang menandakan prosesnya aman
//         } catch (error) {
//             toast.success('astagfirullah ${user? "update":"penambahan"} data santri,mau ngapain') //popup notifikasi yang menandakan prosesnya aman
            
//         }finally {
//             setIsLoading(false) //proses komunikasi api database berakhir
//         }
//   }
//     return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//     )
// }