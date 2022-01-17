import React, { useContext } from 'react';
import ContinentList from './ContinentList';
import style from './Continents.module.css';
import { ContinentContext } from '../../context/ContinentContext';
import MockToJson from '../MockToJson';
import { ContinentType } from '../../types';

const Continents = () => {
  const { continents } = useContext(ContinentContext);

  return (
    <main>
      <div className={style.container}>
        <section>
          {continents.data.map((continent: ContinentType) => {
            return <ContinentList key={continent.id} continent={continent} />;
          })}
        </section>
        <MockToJson />
      </div>
    </main>
  );
};

export default Continents;
