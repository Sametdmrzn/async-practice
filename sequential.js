async function getUserThenPosts() {
  try {
    console.log("1) Kullanıcı çekiliyor...");
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userRes.json();

    console.log("2) Kullanıcının postları çekiliyor...");
    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
    const posts = await postsRes.json();

    console.log("Kullanıcı:");
    console.log(user);

    console.log("Postlar:");
    console.log(posts);
  } catch (err) {
    console.log("Hata oluştu:", err);
  }
}

getUserThenPosts();
