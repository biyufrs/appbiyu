// "use client" //client component
             //server component berfungsi untuk menampilkan data dari API
            //  sekaligus untuk menampilkan isi website & server component bersamaan
import ButtonComponent from "./tombol"
// asynchronous component 
type post = {
  id:number
  title:string
  body:string
}
export default  async function apaaja () {
    console.log("dikirim dari halaman contact")
    // response adalah mentahan API dr db
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts:post[] = await response.json()
    console.log(posts)
    return (
        <div> 
            {/*ciri ciri komponen modular adalah satu tag saja*/ }
              <ButtonComponent/>
    <div>halaman kontak disini</div>
          <h1>
            Post Title List
          </h1>
          <ul>
         {posts.map(post => (
    <li key={post.id}>
      {post.title}
    </li>
))}

            {/* map itu memotong motong posts */}
          </ul>
      </div>
    )
}