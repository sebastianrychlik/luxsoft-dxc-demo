# M0.0A — Enterprise Repository Foundation

## IMPORTANT

This milestone is intentionally small.

Its purpose is ONLY to prepare the repository foundation.

DO NOT bootstrap Spring Boot.

DO NOT bootstrap Angular.

DO NOT execute Spring Initializr.

DO NOT call start.spring.io.

DO NOT install npm packages.

DO NOT download anything from the Internet.

DO NOT execute any command that depends on an external service.

This milestone must be completely deterministic.

-------------------------------------------------------------------------------
RULES
-------------------------------------------------------------------------------

- Edit source files directly.
- Never generate Python patch scripts.
- Never generate Bash patch scripts.
- Never use python <<EOF heredocs.
- Never create *.spec.ts files.
- Never create commits.
- Never push.
- Never execute HTTP or WebSocket tests.
- Never execute Docker builds.
- Never execute Maven builds.
- Never execute npm install.
- Never execute ng new.
- Never execute Spring Initializr.
- Never download project templates.
- Never continue after a failed command.
- If any command fails, STOP immediately.
- Do not attempt alternative solutions automatically.
- Explain the failure.
- Wait for the next prompt.

-------------------------------------------------------------------------------
TASKS
-------------------------------------------------------------------------------

Create ONLY the repository foundation.

Create directories:

backend/

frontend/

docker/

scripts/

docs/

docs/architecture/

docs/commands/

docs/guides/

docs/adr/

docs/interview/

docs/diagrams/

.github/workflows/

.vscode/

-------------------------------------------------------------------------------
Create files
-------------------------------------------------------------------------------

README.md

.gitignore

.editorconfig

.nvmrc

LICENSE

-------------------------------------------------------------------------------
Create scripts
-------------------------------------------------------------------------------

scripts/

build.sh

clean.sh

deploy-local.sh

deploy-cloud-run.sh

format.sh

lint.sh

test.sh

All scripts may initially contain only:

- shebang
- header
- TODO comment

Do not implement them yet.

-------------------------------------------------------------------------------
VSCode
-------------------------------------------------------------------------------

Create

.vscode/extensions.json

.vscode/settings.json

Populate with recommended enterprise extensions only.

-------------------------------------------------------------------------------
README
-------------------------------------------------------------------------------

Expand README with headings only.

Project Overview

Architecture

Technology Stack

Folder Structure

Development

Deployment

Documentation

Do not describe implementation details yet.

-------------------------------------------------------------------------------
Documentation
-------------------------------------------------------------------------------

Create

docs/commands/

01-project-bootstrap.md

02-angular.md

03-spring.md

04-docker.md

05-cloud-run.md

06-git.md

Each file may initially contain only its title and a TODO placeholder.

-------------------------------------------------------------------------------
Definition of Done
-------------------------------------------------------------------------------

Repository structure exists.

Documentation skeleton exists.

Scripts exist.

VSCode configuration exists.

README exists.

No frameworks have been generated.

No external commands have been executed.

No package installation has been attempted.

No Docker build has been attempted.

No commits have been created.

-------------------------------------------------------------------------------
FINAL OUTPUT
-------------------------------------------------------------------------------

Print only:

1. Created directories

2. Created files

3. Tasks intentionally skipped

Then STOP.

Wait for code review.
