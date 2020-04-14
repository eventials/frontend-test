import countries, { ICountry } from "../configs/country";

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
export default (): Promise<Array<ICountry>> =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (Math.round(Math.random()) === 0 ? resolve(countries) : reject()),
      1000
    );
  });
