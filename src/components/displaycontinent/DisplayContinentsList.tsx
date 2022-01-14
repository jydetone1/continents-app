import React, { FC, useState } from 'react';
import style from './DisplayContinents.module.css';
import { DisplayContinentsProps } from '../../types';

const DisplayContinentsList: FC<DisplayContinentsProps> = ({
  continent,
}): JSX.Element => {
  const [displayContinents, setDisplayContinents] = useState(false);

  const collapseContinentsAccordion = () => {
    setDisplayContinents(!displayContinents);
  };

  return (
    <div className={style.displaycontinent}>
      <header>
        <span onClick={collapseContinentsAccordion}>{continent.name}</span>
      </header>
      <section>
        {displayContinents &&
          continent.countries.map((country) => {
            return (
              <div key={country.code}>
                <p> {country.name}</p>
                {country.languages.map((language) => {
                  return (
                    <p className={style.lang__name} key={language.code}>
                      {language.name}
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

export default DisplayContinentsList;
