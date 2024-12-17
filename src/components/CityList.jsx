import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import { useCities } from "../Contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map shown in the right side ➡" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
