// LOCAL STORAGE

export const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key, defaultValue = undefined) => {
  let parsedValue = '';

  try {
    const value = localStorage.getItem(key);

    parsedValue = JSON.parse(value);
  } catch (e) {
    parsedValue = defaultValue;

    return parsedValue;
  }

  return parsedValue;
};

// SESSION STORAGE

export const setSessionStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const getSessionStorage = (key, defaultValue = undefined) => {
  let parsedValue = '';

  try {
    const value = localStorage.getItem(key);

    parsedValue = JSON.parse(value);
  } catch (e) {
    parsedValue = defaultValue;

    return parsedValue;
  }

  return parsedValue;
};
