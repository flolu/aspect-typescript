<div align="center">
  <h1>🌿 aspect-typescript</h1>
  <p>Minimal example of Bazel rules for TypeScript</p>
</div>

# Features

- Import internal dependencies with `@org/`
- Intellisense for VSCode
- Fast compilation with SWC
- Run tests with Jest
- Build Docker image from app

# Usage

**Requirements**

- Linux
- Node.js
- pnpm (`npm install -g pnpm`)
- Bazelisk (`npm install -g @bazel/bazelisk`)
- Buildifier (`npm install -g @bazel/buildifier`)

**Setup**

- `pnpm i` (Install Node dependencies)

**Commands**

- `bazelisk build //...` (Build everything)
- `bazelisk test //...` (Test everything)
- `bazelisk run //app:bin` (Run app)
- `bazelisk run //app:image` (Build docker image)
- `docker run --rm -it bazel/app:image` (Run docker image)
