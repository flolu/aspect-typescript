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
- Deploy app to Kubernetes cluster
- Run tests in GitHub Action

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

<!-- TODO bazel build ... works with bash but not with zsh -->

- `bazel build //...` (Build everything)
- `bazel test //...` (Test everything)
- `bazel run //app:bin` (Run app)
- `bazel run //app:image` (Build docker image)
- `docker run --rm -it -p 3000:3000 bazel/app:image` (Run docker image)
- `bazel run //:kubernetes.apply` (Deploy app to Kubernetes cluster)
