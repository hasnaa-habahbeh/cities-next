import HeadInfo from '../components/HeadInfo';
import Filters from '../components/Home/Filters';
import CountriesContainer from '../components/Home/CountriesContainer';
import { GET_ALL_ENDPOINT } from '../constants/urls';
import { setInitialCountriesList } from '../store/actions/countriesList';
import { wrapper } from '../store';

const Home = () => (
  <div>
    <HeadInfo />
    <Filters />
    <CountriesContainer />
  </div>
);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(GET_ALL_ENDPOINT);
    const fullList = await res.json();
    store.dispatch(setInitialCountriesList(fullList));
  }
);

export default Home;
