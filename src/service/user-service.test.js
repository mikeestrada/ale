import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {getUsers} from "./user-service";

describe('Given a request to the user service, when getUsers is invoked then ', () => {
  it('should return user data', () => {
    let mock = new MockAdapter(axios);
    const expected = {
      response: [
        {
          user: {
            first_name: 'Mike'
          }
        }
      ]
    };
    mock.onGet('https://reqres.in/api/users').reply(200, expected);

    return getUsers().then(actual => {
      expect(actual.data).toEqual(expected);
    });
  });
});