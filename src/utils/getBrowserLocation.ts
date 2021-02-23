export function getGeolocation():Promise<{coords:{latitude:number, longitude:number}}>{
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( pos => resolve(pos));
    } else {
        alert("Geolocation is not supported by this browser.");
        reject(false);
    }
  })
}

// export const  searchLocationByGeo = async ({latitude, longitude}) => {
//   const res = await fetch(`'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=(${latitude}),(${longitude})'`, {
//   });

//   console.log(res);
//   return res.status === 200 ? res : [];
// }