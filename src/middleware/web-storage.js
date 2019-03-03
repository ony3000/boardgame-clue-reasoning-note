// reference - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    const storage = window[type];
    const x = '__storage_test__';

    try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (err) {
        return err instanceof DOMException && (
            // everything except Firefox
            err.code === 22 ||
            // Firefox
            err.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            err.name === 'QuotaExceededError' ||
            // Firefox
            err.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

function getStorage(type) {
    return (storageAvailable(type) ? window[type] : null);
}

export default getStorage('localStorage');
