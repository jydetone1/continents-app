import { useQuery, gql } from '@apollo/client';
import style from './DisplayContinents.module.css';
import DisplayContinentsList from './DisplayContinentsList';
import { DisplayContinentsType } from '../../types';

const CONTINENTS_QUERY = gql`
  query {
    continents {
      code
      name
      countries {
        name
        code
        languages {
          name
          code
        }
      }
    }
  }
`;

const DisplayContinents = () => {
  const { loading, error, data } = useQuery(CONTINENTS_QUERY);

  if (loading) return <div>laoding...</div>;
  if (error) return <div>Error...</div>;

  return (
    <main>
      <div className={style.container}>
        <section>
          {data.continents.map((continent: DisplayContinentsType) => {
            return (
              <DisplayContinentsList
                key={continent.code}
                continent={continent}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default DisplayContinents;
