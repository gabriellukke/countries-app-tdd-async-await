const fetchCountries = async (region) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchCountries,
  };
}
