import { environment } from '../environments/environment';

const BASEURL = environment.ApiUrl + '/api/v1';

export const EndPoints = {
    USERS: BASEURL + '/users',
    LOGINURL: BASEURL + '/auth'

};

export const SystemConstant: any = {
    EMAILREGEX: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    ENCRYPTIONSECRETKEY: '</#%!Spe@rHe@d!%#/>Zci>b"T|aM<tB5R|dsMMR-83q2:oc@qYix{b.vrI=n',
    HEADER: {
      'Content-Type': 'application/json',
      'spearhead-client-apiKey': 'We@ReDGre@teSt',
      'Authorization': 'Bearer',
      'Accept': 'application/json'
    },
    SERVICEURL : environment.ServiceUrl,
    APPNAME : environment.appName,
  
    SESSIONKEY: '_1@amOneW1ThGod_'
  
  };
  