const Planet = ({ planet }) => {
  return <p>{JSON.stringify(planet, null, 2)}</p>
}

export async function getStaticPaths() {
  const res = await fetch('https://swapi.dev/api/planets');
  const data = await res.json();

  const { results } = data;

  const paths = results.map((res, i) => `/planets/${Number(i) + 1}`);
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://swapi.dev/api/planets/${params.id}`);
  const planet = await res.json();

  return { props: { planet }}
}

export default Planet;