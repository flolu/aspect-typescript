<div align="center">
  <h1>rules_ts</h1>
  <p>Trying out Bazel rules for TypeScript by Aspect</p>
</div>

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
- `bazelisk run //app:bin` (Run app)
