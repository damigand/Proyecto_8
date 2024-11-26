# PROYECTO 8 | David Miguel Andrés

Este proyecto es el Backend de una aplicación de perros y gatos.

## Estructuras de datos

### Cat

| Name     | Type            | Required | default |
| -------- | --------------- | -------- | ------- |
| name     | String          | ✓        | -       |
| age      | String          | ✓        | -       |
| breed    | String          | ✓        | -       |
| img      | String          | x        | -       |
| siblings | [String(CatID)] | x        | -       |

### Dog

| Name     | Type            | Required | default |
| -------- | --------------- | -------- | ------- |
| name     | String          | ✓        | -       |
| age      | String          | ✓        | -       |
| breed    | String          | ✓        | -       |
| img      | String          | x        | -       |
| siblings | [String(DogID)] | x        | -       |

## SCRIPTS

`npm run dog-seed`: Crea tres perros en la base de datos. `npm run cat-seed`: Crea tres gatos en la base de datos. `npm run all-seeds`:
Ejecuta los dos scripts anteriores, uno tras otro. `npm run server`: Ejecuta el backend.

## ASSETS

En la carpeta `assets` del proyecto se pueden encontrar fotos de perros y gatos para facilitar el _testeo_ del backend.

## API

### Cat endpoints

Todos los endpoints de "Cat" van precedidos de "/cat".

[GET] **`/`**

Devuelve un `json` con objetos de todos los gatos.

[GET] **`/:id`**

Devuelve un `json` con el objeto de un gato cuyo `id` es especificado por parámetro.

[GET] **`/name/:name`**

Devuelve un `json` con un array de objetos cuyo `name` coincide con el introducido por parámetro. Es **case insensitive**.

[GET] **`/age/:age`**

Devuelve un `json` con un array de objetos cuyo `age` sea mayor o igual al introducido por parámetro.

[GET] **`/breed/:breed`**

Devuelve un `json` con un array de objetos cuyo `breed` coincide con el introducido por parámetro. Es **case insensitive**.

[POST] **`/create/`**

Permite crear un gato con la estructura de datos definida y una foto opcional. Devuelve un objeto `json` del gato una vez creado.

[PUT] **`/edit/:id`**

Permite editar un gato indicando su `id` por parámetro. Devuelve un objeto `json` del gato una vez actualizado. Si se edita la imagen, la
anterior quedará borrada de _Cloudinary_.

[DELETE] **`/delete/:id`**

Permite eliminar un gato indicando su `id` por parámetro. Se borrará también su imagen en _Cloudinary_.

### Dog endpoints

Todos los endpoints de "Dog" van precedidos de "/dog".

[GET] **`/`**

Devuelve un `json` con objetos de todos los perros.

[GET] **`/:id`**

Devuelve un `json` con el objeto de un perro cuyo `id` es especificado por parámetro.

[GET] **`/name/:name`**

Devuelve un `json` con un array de objetos cuyo `name` coincide con el introducido por parámetro. Es **case insensitive**.

[GET] **`/age/:age`**

Devuelve un `json` con un array de objetos cuyo `age` sea mayor o igual al introducido por parámetro.

[GET] **`/breed/:breed`**

Devuelve un `json` con un array de objetos cuyo `breed` coincide con el introducido por parámetro. Es **case insensitive**.

[POST] **`/create/`**

Permite crear un perro con la estructura de datos definida y una foto opcional. Devuelve un objeto `json` del perro una vez creado.

[PUT] **`/edit/:id`**

Permite editar un perro indicando su `id` por parámetro. Devuelve un objeto `json` del perro una vez actualizado. Si se edita la imagen, la
anterior quedará borrada de _Cloudinary_.

[DELETE] **`/delete/:id`**

Permite eliminar un perro indicando su `id` por parámetro. Se borrará también su imagen en _Cloudinary_.
