# 12 Factor App Checklist

The [twelve-factor app](https://12factor.net/) is a methodology for building software-as-a-service apps that:

- Use **declarative** formats for setup automation, to minimize time and cost for new developers joining the project;
- Have a **clean contract** with the underlying operating system, offering **maximum portability** between execution environments;
- Are suitable for **deployment** on modern **cloud platforms**, obviating the need for servers and systems administration;
- **Minimize divergence** between development and production, enabling **continuous deployment** for maximum agility;
- And can **scale up** without significant changes to tooling, architecture, or development practices.

The following is from [Cloudposse - 12 Factor App Checklist](https://cloudposse.com/12-factor-app/) which are practical considerations to help determine the 12-factor readiness of an application for deployment. Applications that match the characteristics below will make best use of the High Availability and Scaling features Kubernetes and other cloud providers have to offer. These may not follow the precise official/canonical definitions of the "12-factor" app.

## [Codebase](https://12factor.net/codebase)

- One-repo-per-service (poly-repo) architectures (preferred, not required)
- Use a Git-based workflow with PRs & approval process
- Dockerized with a `Dockerfile`
- Automated tests exist to validate application works

## [Dependencies](https://12factor.net/dependencies)

- Service dependencies are explicitly declared in the configuration (e.g. `DB_HOST`)
- Services are loosely coupled so that they can be started in any order
- Application dependencies are explicitly pinned in manifests (E.g. `package.json`);
- Use [semver] rather than commit SHAs for pinning, where possible

## [Config](https://12factor.net/config)

- All configuration settings are passed via environment variables and not hardcoded.
- Services can be dynamically reconfigured without recompilation (e.g. by changing settings)
- Use DNS-based service discovery (instead of IPs or depend on `consul`); use short-dns names with search domains rather than FQHN
- Use AWS SDK's automatic AWS configuration (E.g. do not validate `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` variables are configured)

## [Backing Services](https://12factor.net/backing-services)

- Use object storage where files are needed (not local storage)
- Use external databases (e.g. Postgres, MySQL, Redis, etc) to persist state
- Use environment variables for configuration (e.g. timeouts, endpoints, etc)
- Use configurable timeouts on connections, responses from backends

## [Build, Release, Run](https://12factor.net/build-release-run)

- Well-defined process to build (e.g. compile) the application and start it (e.g. a `Makefile`)
- `Dockerfile` defines `ENTRYPOINT` to run the application
- Docker composition (`docker-compose.yml`) can bring up the environment for automated testing
- Cut releases on merge to master (preferred, not required); use [semver]

## [Processes](https://12factor.net/processes)

- All processes must expose health check endpoints (`/healthz`)
- Should not depend on a process manager (e.g. `pm2`)
- Should exit non-zero upon fatal errors
- Must respond to `SIGTERM` and exit gracefully
- Health checks should not depend on the health of the backing services
- Does not require privileged execution (e.g. `root`)

## [Port binding](https://12factor.net/port-binding)

- `Dockerfiles` define a `PORT` definition
- Services should listen on a preconfigured bind-address and port (e.g. `0.0.0.0:8000`)
- Should listen on [non-privileged ports](https://www.w3.org/Daemon/User/Installation/PrivilegedPorts.html) (`> 1024`)

## [Concurrency](https://12factor.net/concurrency)

- Application can be run any number of times in parallel (e.g. no expectation of locking)
- Application does not maintain a large pool of persistent database connections (e.g. configurable pool size)
- Application uses database transactions, if applicable; avoids deadlocks
- Application does not depend on sticky sessions; requests can hit any process

## [Disposability](https://12factor.net/disposability)

- Should be entirely stateless (e.g. not maintain any local state, all state offloaded to backing services)
- Processes can be easily created or destroyed without any orchestrated shutdown process
- No POSIX filesystem required for persistence (local caching/buffering okay)

## [Dev/prod parity](https://12factor.net/dev-prod-parity)

- All environments function the same way when configured with the same settings
- Flags should enable/disable functionality without knowledge of stage or environment (e.g. **do not use** `if ($environment == 'dev') { ... })`
- Do not use hostnames for conditional/routing logic (that's the job of `Ingress`)

## [Logs](https://12factor.net/logs)

- Logs are emitted to `stdout`
- Events are structured event streams (e.g. JSON)
- Do not write logs to disk (to mitigate the need for log rotation)

## [Admin processes](https://12factor.net/admin-processes)

- Database migrations should be automated and run as a separate container
- Cronjobs can be run as a separate container
- Batch processing should run as a separate container

<!-- MARKDOWN REFERENCES -->

[semver]: https://semver.org/
