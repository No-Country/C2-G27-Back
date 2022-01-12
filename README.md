# Fintech

### GET main

```sh
http://localhost:3000
```

#### Example Request

```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### POST login

<Security>
```sh
http://localhost:3000/api/v1/auth/login
```

| AUTHORIZATION | API Key |
| ------------- | ------- |
| Key           | <key>   |
| Value         | <value> |

|BODY raw

```
{
    "username":"admin",
    "password":"mdr@tRa%%E$Y2Ke%M?4vxuaZGDYbMk"
}
```

#### Example Request | login

```
var raw = "{\r\n    \"username\":\"admin\",\r\n    \"password\":\"mdr@tRa%%E$Y2Ke%M?4vxuaZGDYbMk\"\r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://fintech-no-contry.herokuapp.com/api/v1/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### GET users

<Security>
```sh
{{API}}users
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

#### Example Request | users

```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("{{API}}users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### GET users

<Security>
```sh
http://localhost:3000/api/v1/users
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

#### Example Request | users

```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### POST users

<Security>
```sh
http://localhost:3000/api/v1/users
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |
|  BODYraw |   |

```
{
    "username": "ernestico6",
    "email": "ernesto6@example.com",
    "password": "ernestoernesto",
    "role": "admin"
}
```

#### Example Request | Create user

```
var raw = "{\r\n    \"username\": \"ernestico6\",\r\n    \"email\": \"ernesto6@example.com\",\r\n    \"password\": \"ernestoernesto\",\r\n    \"role\": \"admin\"\r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### PUT Update users

<Security>
```sh
http://localhost:3000/api/v1/users/145663aa-ea8a-4387-9612-752bd83296bd
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |
|  BODYraw |   |

```
{
    "username": "bob443",
    "email": "bobtheboss443@example.com",
    "password": "$2b$15$ZYbrj0N4UywUZOy5G3ffCe2VclXo9s./x/Vju4w2CpqzhubZVmmGG",
    "role": "admin",
    "peopleId": "078d8b0b-4c19-4694-be81-8dde701331a1"
}
```

#### Example Request | Update user

```
var raw = "{\r\n    \"username\": \"bob443\",\r\n    \"email\": \"bobtheboss443@example.com\",\r\n    \"password\": \"$2b$15$ZYbrj0N4UywUZOy5G3ffCe2VclXo9s./x/Vju4w2CpqzhubZVmmGG\",\r\n    \"role\": \"admin\",\r\n    \"peopleId\": \"078d8b0b-4c19-4694-be81-8dde701331a1\"\r\n}";

var requestOptions = {
  method: 'PUT',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/users/145663aa-ea8a-4387-9612-752bd83296bd", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### DEL Delete user

<Security>
```sh
http://localhost:3000/api/v1/users/03218889-52ff-4106-9260-0e51ee53b0d6
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

#### Example Request | Delete user

```
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/users/03218889-52ff-4106-9260-0e51ee53b0d6", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### GET people

<Security>
```sh
http://localhost:3000/api/v1/people
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

#### Example Request | people

```
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/people", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### GET person

<Security>
```sh
http://localhost:3000/api/v1/users/03218889-52ff-4106-9260-0e51ee53b0d6
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

#### Example Request | person

```
vvar requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/users/03218889-52ff-4106-9260-0e51ee53b0d6", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### POST Create person

<Security>
```sh
http://localhost:3000/api/v1/people
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |
| BODYraw |  |

```
{
    "name":"alice",
    "lastName":"marley",
    "user":{
        "username": "marley21",
        "email": "marley21@example.com",
        "password": "121225",
        "role": "admin"
        }
}
```

#### Example Request | Create person

```
var raw = "{\r\n    \"name\":\"alice\",\r\n    \"lastName\":\"marley\",    \r\n    \"user\":{        \r\n        \"username\": \"marley21\",\r\n        \"email\": \"marley21@example.com\",\r\n        \"password\": \"121225\",\r\n        \"role\": \"admin\"\r\n        }\r\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/people", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### PUT Update person

<Security>
```sh
http://localhost:3000/api/v1/people/e90aa187-beac-4d27-8d10-d8565ace579b
```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |
| BODYraw |  |

```
{
    "name":"alice",
    "lastName":"speckter"
}
```

#### Example Request | Update person

```
var raw = "{\r\n    \"name\":\"alice\",\r\n    \"lastName\":\"speckter\"\r\n}";

var requestOptions = {
  method: 'PUT',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/people/e90aa187-beac-4d27-8d10-d8565ace579b", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

---

### DEL Delete person

<Security>
```sh
http://localhost:3000/api/v1/people/9fa03c99-8559-44a5-866a-41ea55a5c7b9

```
| AUTHORIZATION | Bearer Token |
| ------ | ------ |
| Token | <Token> |

```

#### Example Request | Delete person

var requestOptions = {
method: 'DELETE',
redirect: 'follow'
};

fetch("http://localhost:3000/api/v1/people/9fa03c99-8559-44a5-866a-41ea55a5c7b9", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));

```

```
