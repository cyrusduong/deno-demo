import blog from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Cyrus Duong",
  title: "My Blog",
  description: "Here is where I demo deno with blog module",
  avatar: "me.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:cyrusduong@gmail.com" },
    { title: "GitHub", url: "https://github.com/cyrusduong" },
  ],
});
