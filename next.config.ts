


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{
      hostname:"https://tse1.mm.bing.net"
    }]
  }
};

export default nextConfig;
/* membuat aplikasi next js : npx create-nex-app@latest 
 shortcut menampilkan terminal
 routing di  next js
 apa saja maksud dr file yang telah di generate saat membuat aplikasi di next js
 menampilkan gambar dr source luar  & setting next.config u/ hal tsb
 mengganti favicon aplikasi nextjs
 cara membuat function component di js : export defult function () {
 return (<div>ala ala</div>)
 }

 SEO = search engine optimazation
 function js yang di jalan kan setelah semua isi website
 di tampilkan kepda user
 9. server & client component di next js

 yang membedakan next js dengan framework yang lain, server component dikirim dulu ke web
 crawler nya baru secara asyncronous(melakukan suatu hal dengan bersamaan) dikirm ke user 

 10. membuat lient component di next js menjadi modular ada di dalam  server component
*/ 