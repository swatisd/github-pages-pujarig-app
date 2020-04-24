
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
        
        loginURI() {
          return "https://auth.pujarig.com/login?response_type=token&client_id=4f2mhs8n77ceod461gt5cvvhbt&redirect_uri=" +  this.getCallbackUrl();
        }

        logoutURI () {
          return "https://auth.pujarig.com/logout?client_id=4f2mhs8n77ceod461gt5cvvhbt&logout_uri=" + this.getCallbackUrl();
        }

        isProd() {
          return window.location.href.indexOf('localhost') < 0;
        }
        
        getCallbackUrl() {
          return (this.isProd() ? 'https://pujarig.com/booknow' : 'http://localhost:3000/booknow');
        }
}

export default PujariGCommon;