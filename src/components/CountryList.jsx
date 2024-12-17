import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../Contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map shown in the right side ➡" />
    );

  const countries = cities.reduce((accArr, curr) => {
    if (!accArr.map((el) => el.country).includes(curr.country))
      return [...accArr, { country: curr.country, emoji: curr.emoji }];
    else return accArr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
