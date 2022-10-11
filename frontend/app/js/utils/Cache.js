/** Composante  de TimTools */
export default class Cache {
  static set(key, value, force) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le local Storage");
    } else if (value === undefined) {
      console.error("Vous n'avez pas fourni de valeur pour le local Storage");
    } else if (Cache.isLocalStorageAvailable()) {
      if (!Cache.get(key) || force === true) {
        key = `TT_${key}`; //mettre un préfixe
        localStorage.setItem(key, value);
      } else {
        console.error('La clé choisie est déjà utilisée. Forcez au besoin.');
      }
    }
  }

  static get(key, DefaultValue) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le local Storage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`; //mettre un préfixe
      return localStorage.getItem(key) ? localStorage.getItem(key) : DefaultValue;
    }
  }

  static remove(key) {
    if (key === undefined) {
      console.error("Vous n'avez pas fourni de clé pour le local Storage");
    } else if (Cache.isLocalStorageAvailable()) {
      key = `TT_${key}`; //mettre un préfixe
      localStorage.removeItem(key);
    }
  }

  static isLocalStorageAvailable() {
    //on lance un theme pour voir si il y a un local storage
    const test = '___timTools___';

    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      console.error("Local Storage n'est pas disponible sur votre navigateur");
    }
  }
}
