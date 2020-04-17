
class PujariGCommon {
    constructor() {
    }

    loginHelper (state){

        let currentURL = window.location.href;
        let data;
        if (currentURL.indexOf('state') > 0) {
          data = JSON.parse(atob(currentURL.split('state=')[1].split('&')[0]));
          data.datetime = new Date(state.datetime);
        } else {
            data = Object.assign({}, state);
        }
        
        if (currentURL.indexOf('id_token') > 0) {
          let params = currentURL.split('#')[1];
          const idToken = params.split('id_token=')[1].split('&')[0];
          data.idToken = idToken;
          const req = new XMLHttpRequest();
          req.open("GET", "https://api.pujarig.com/d1/user");
          req.setRequestHeader('Authorization', idToken);
          req.send();
          req.onreadystatechange = (e) => {
            if (req.readyState === 4) {
              // console.log(req.responseTex);
              const user = JSON.parse(req.responseText);
            }
          }
        }
        return data;
        }
}

export default PujariGCommon;