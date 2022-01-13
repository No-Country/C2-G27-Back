# Fintech

### GET | _main path_

[https://fintech-no-contry.herokuapp.com](https://fintech-no-contry.herokuapp.com)

| AUTHORIZATION |
| ------------- |
| none          |

#### Example Request | _main path_

```js
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch('https://fintech-no-contry.herokuapp.com', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### POST | _login path_

[https://fintech-no-contry.herokuapp.com/api/v1/auth/login](https://fintech-no-contry.herokuapp.com/api/v1/auth/login)

| AUTHORIZATION | API Key |
| ------------- | ------- |
| Key           | api     |
| Value         | key     |

#### Example Request | login

```js
const raw = { username: 'username', password: 'password' };

const requestOptions = {
  method: 'POST',
  body: JSON.stringify(raw),
  redirect: 'follow',
  headers: {
    api: 'apiKey',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

fetch(
  'https://fintech-no-contry.herokuapp.com/api/v1/auth/login',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### GET | _users_

[https://fintech-no-contry.herokuapp.com/api/v1/users](https://fintech-no-contry.herokuapp.com/api/v1/users)
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | token |

#### Example Request | _users_

```js
const token = 'token';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/users', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### GET | _user_

[https://fintech-no-contry.herokuapp.com/api/v1/users](https://fintech-no-contry.herokuapp.com/api/v1/users)
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | token |

#### Example Request | _user_

```js
const token = 'token';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch(
  'https://fintech-no-contry.herokuapp.com/api/v1/users/{id}',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### POST | _user_

[https://fintech-no-contry.herokuapp.com/api/v1/users](https://fintech-no-contry.herokuapp.com/api/v1/users)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Create user_

```js
const raw= {
    "username": "username",
    "email": "example@example.com",
    "password": "password"
    "role": "admin"
    "peopleId":"peopleId"
};

const token = 'token';

const requestOptions = {
  method: 'POST',
  body: raw
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/users', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### PUT | Update users

[https://fintech-no-contry.herokuapp.com/api/v1/users](https://fintech-no-contry.herokuapp.com/api/v1/users)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Update user_

```js
const raw= {
    "username": "username",
    "email": "example@example.com",
    "password": "password"
    "role": "admin"
    "peopleId":"peopleId"
};

const token = 'token';

const requestOptions = {
  method: 'PUT',
  body: raw
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/users/{id}', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### DELETE | Delete user

[https://fintech-no-contry.herokuapp.com/api/v1/users](https://fintech-no-contry.herokuapp.com/api/v1/users)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Delete user_

```js
const token = 'token';

const requestOptions = {
  method: 'DELETE',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch(
  'https://fintech-no-contry.herokuapp.com/api/v1/users/{id}',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### GET | _people_

[https://fintech-no-contry.herokuapp.com/api/v1/people](https://fintech-no-contry.herokuapp.com/api/v1/people)
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | token |

#### Example Request | _people_

```js
const token = 'token';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/people', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### GET | _person_

[https://fintech-no-contry.herokuapp.com/api/v1/people](https://fintech-no-contry.herokuapp.com/api/v1/people)
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | token |

#### Example Request | _person_

```js
const token = 'token';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch(
  'https://fintech-no-contry.herokuapp.com/api/v1/people/{id}',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### POST | _person_

[https://fintech-no-contry.herokuapp.com/api/v1/people](https://fintech-no-contry.herokuapp.com/api/v1/people)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Create person_

```js
const raw= {
    "name":"name",
    "lastName":"lastname",
    "user":{
        "username": "username",
        "email": "example@example.com",
        "password": "password",
        "role": "admin"
        }
};

const token = 'token';

const requestOptions = {
  method: 'POST',
  body: raw
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/people/', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### PUT | Update people

[https://fintech-no-contry.herokuapp.com/api/v1/people](https://fintech-no-contry.herokuapp.com/api/v1/people)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Update person_

```js
const raw= {
    "name":"name",
    "lastName":"lastname",
    "user":{
        "username": "username",
        "email": "example@example.com",
        "password": "password",
        "role": "admin"
        }
};

const token = 'token';

const requestOptions = {
  method: 'PUT',
  body: raw
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch('https://fintech-no-contry.herokuapp.com/api/v1/people/{id}', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---

### DELETE | Delete person

[https://fintech-no-contry.herokuapp.com/api/v1/people](https://fintech-no-contry.herokuapp.com/api/v1/people)

| AUTHORIZATION | Bearer Token |
| ------------- | ------------ |
| Token         | token        |

#### Example Request | _Delete person_

```js
const token = 'token';

const requestOptions = {
  method: 'DELETE',
  redirect: 'follow',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
};

fetch(
  'https://fintech-no-contry.herokuapp.com/api/v1/people/{id}',
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
```

---
