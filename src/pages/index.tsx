// Static Side Generation

export default function Home(props) {
  return (
    <h1>Hello World</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data
    },
    // the page only updates every 8 hours
    revalidate: 60 * 60 * 8
  }

}
