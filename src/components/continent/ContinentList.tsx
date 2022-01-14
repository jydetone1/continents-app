import React, { FC, useState, useContext } from 'react';
import { ContinentContext } from '../../context/ContinentContext';
import style from './Continents.module.css';
import { ContinentProps } from '../../types';

const ContinentList: FC<ContinentProps> = ({ continent }): JSX.Element => {
  const { accordionOpened, toggleAccordionOpened } =
    useContext(ContinentContext);

  const collapseAccordion = () => {
    toggleAccordionOpened(continent.id);
  };

  const isOpened = continent.id === accordionOpened;

  return (
    <div className={style.continent}>
      <header>
        <span className={style.continent__name} onClick={collapseAccordion}>
          {continent.name}
        </span>
      </header>
      <section>
        {isOpened &&
          continent.children.map((country, index) => {
            return (
              <div key={index}>
                <p>{country.name}</p>
                {country.children.map((languages, index) => {
                  return (
                    <p className={style.lang__name} key={index}>
                      {languages.name}
                    </p>
                  );
                })}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default ContinentList;
