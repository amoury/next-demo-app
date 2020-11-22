import _get from 'lodash/get';

const Planets = ({ planets }) => {
  return (
    <div>
      <ul>
        {!!planets.length &&
          planets.map((res) => <li key={res.name}>{res.name}</li>)}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/planets')
  const data = await res.json()

  return {
    props: {
      planets: _get(data, 'results', [])
    },
  }
}

export default Planets;
