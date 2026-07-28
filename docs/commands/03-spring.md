# 03 — Spring Boot

Commands executed in milestone M0.1 — Spring Boot Bootstrap.

All commands are run from the `backend/` directory.

---

## Build

Compile sources and run tests, producing the executable JAR in `target/`.

```bash
cd backend
mvn clean package
```

| Flag | Purpose |
|------|---------|
| `clean` | Delete the `target/` directory before building |
| `package` | Compile, test, and package the application into a JAR |

**Result (M0.1):** BUILD SUCCESS — context loads, 1 test passed.

---

## Run

Start the application using the Maven Spring Boot plugin. Uses the `local` profile by default.

```bash
cd backend
mvn spring-boot:run
```

The application starts on `http://localhost:8080`.

---

## Skip tests

Build without executing tests (useful during rapid iteration).

```bash
cd backend
mvn clean package -DskipTests
```

---

## Run tests only

```bash
cd backend
mvn test
```

---

## Clean

Remove all build output.

```bash
cd backend
mvn clean
```
