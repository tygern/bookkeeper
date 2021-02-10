# Bookkeeper

A loan calculator build with [Svelte](https://svelte.dev) and [Ktor](https://ktor.io).

## Build

Run the _build_ command run all tests and build a jar.

```bash
./gradlew build
```

## Local development

Build the app then run the jar.

```bash
PORT=8081 java -jar applications/bookkeeper-app/build/libs/bookkeeper-app.jar
```

## Deploy to Heroku

1.  Login to Heroku.
    ```bash
    heroku login
    ```

1.  Install the Java plugin.
    ```bash
    heroku plugins:install java
    ```

1.  Push the web app jar to Heroku.
    ```bash
    heroku deploy:jar applications/bookkeeper-app/build/libs/bookkeeper-app.jar --app bookkeeper-app
    ```
