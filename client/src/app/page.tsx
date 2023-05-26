async function getHello() {
  const res = await fetch(`http://${process.env.HOST}:8080`);
  return res.json();
}

export default async function Home() {
  const data = await getHello();
  console.log(data);

  return <h1>{data.text}</h1>;
}
