function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("1) Başladı");

  await wait(1000);
  console.log("2) 1 saniye bekledikten sonra");

  await wait(2000);
  console.log("3) 2 Saniye bekledikten sonra ");

  console.log("4) Bitti");
}

process();
