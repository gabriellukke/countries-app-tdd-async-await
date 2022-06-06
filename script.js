const createFlagImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'country__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createCountryElement = (country) => {
  const section = document.createElement('section');
  section.className = 'country';

  section.appendChild(createCustomElement('span', 'country__name', country.name.common));
  section.appendChild(createCustomElement('span', 'country__capital', country.capital));
  section.appendChild(createFlagImageElement(country.flags.svg));

  return section;
};
