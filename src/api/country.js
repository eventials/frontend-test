import Countries from "../configs/country";

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
// export default () =>
//   new Promise((resolve, reject) => {
//     setTimeout(
//       () => (Math.round(Math.random()) === 0 ? resolve(countries) : reject()),
//       100
//     );
//   });

// const addPop = new Promise((resolve, reject) => {
//   Countries.push({ name: "teste", code: "teste" });
//   resolve(Countries);
// });

// const addPop = new Promise((resolve, reject) => {
//   //Countries: [...Countries, "arquivo2"];
// });

const getAll = new Promise((resolve, reject) => {
  setTimeout(
    () => (Math.round(Math.random()) === 0 ? resolve(Countries) : reject()),
    100
  );
});

export { getAll };
