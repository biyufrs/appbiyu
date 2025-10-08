import { getUsers } from "@/server/users"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import UserForm from "./forms/user-form"
import DeleteUserButton from "./delete-user-button"
import { Pencil } from "lucide-react"
export default async function UsersTable(){
    const users = await getUsers()
    return(
      <Table>
        <TableCaption>Data Hafalan al-Quran Santri</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user)=>(
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
            <TableCell>{user.updatedAt?.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost">
                    <Pencil className="size-4" />  
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Perubahan Data Santri</DialogTitle>
                    <UserForm  user={user}/>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <DeleteUserButton userId={user.id} />
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
