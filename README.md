# luxsoft-dxc-demo

Purpose-built technical interview demo showcasing end-to-end enterprise application development with Angular, Spring Boot, PostgreSQL, Docker, Cloud Run, REST APIs, SSE, testing and clean architecture.

---

## Project Overview

<!-- TODO: Describe the business context, goals, and scope of the demo application. -->

## Architecture

<!-- TODO: Describe the high-level architecture (frontend, backend, database, cloud). Link to docs/architecture/. -->

## Technology Stack

<!-- TODO: List the technologies used (Angular, Spring Boot, PostgreSQL, Docker, Cloud Run, etc.). -->

## Folder Structure

<!-- TODO: Document the top-level directory layout and the purpose of each folder. -->

## Development

### Backend

#### Prerequisites

| Tool | Version |
|------|---------|
| Java | 21 (Eclipse Temurin recommended) |
| Maven | 3.9+ |

#### Build

```bash
cd backend
mvn clean package
```

#### Run

```bash
cd backend
mvn spring-boot:run
```

The application starts on `http://localhost:8080` with the `local` profile active.

#### Health endpoint

```
GET http://localhost:8080/api/health
```

Example response:

```json
{
  "status": "UP",
  "application": "luxsoft-dxc-demo",
  "version": "0.1.0"
}
```

Spring Boot Actuator is also available at:

```
GET http://localhost:8080/actuator/health
```

#### Project structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/luxsoft/dxc/
│   │   │   ├── LuxsoftDxcDemoApplication.java   # Application entry point
│   │   │   ├── config/                           # Spring configuration classes
│   │   │   ├── controller/                       # REST controllers
│   │   │   ├── dto/                              # Data Transfer Objects
│   │   │   ├── entity/                           # JPA entities (future)
│   │   │   ├── exception/                        # Global exception handling
│   │   │   ├── mapper/                           # MapStruct mappers (future)
│   │   │   ├── model/                            # Domain model classes (future)
│   │   │   ├── repository/                       # Spring Data repositories (future)
│   │   │   ├── service/                          # Business logic services
│   │   │   └── util/                             # Utility classes (future)
│   │   └── resources/
│   │       ├── application.yml                   # Base configuration
│   │       ├── application-local.yml             # Local profile
│   │       └── application-prod.yml              # Production profile
│   └── test/
│       └── java/com/luxsoft/dxc/
│           └── LuxsoftDxcDemoApplicationTests.java
└── pom.xml
```

## Deployment

<!-- TODO: Describe local Docker Compose deployment and Cloud Run deployment. -->

## Documentation

<!-- TODO: Link to all documents under docs/ (architecture, commands, guides, ADRs, interview notes). -->
