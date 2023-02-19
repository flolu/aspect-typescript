load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

###
# Setup rules_js
# https://github.com/aspect-build/rules_js/releases
###
http_archive(
    name = "aspect_rules_js",
    sha256 = "9fadde0ae6e0101755b8aedabf7d80b166491a8de297c60f6a5179cd0d0fea58",
    strip_prefix = "rules_js-1.20.0",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.20.0/rules_js-v1.20.0.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    npmrc = "@//:.npmrc",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

###
# Setup rules_ts
# https://github.com/aspect-build/rules_ts/releases
###
http_archive(
    name = "aspect_rules_ts",
    sha256 = "db77d904284d21121ae63dbaaadfd8c75ff6d21ad229f92038b415c1ad5019cc",
    strip_prefix = "rules_ts-1.3.0",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.3.0/rules_ts-v1.3.0.tar.gz",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(ts_version_from = "//:package.json")

###
# Setup rules_swc
# https://github.com/aspect-build/rules_swc/releases
###
http_archive(
    name = "aspect_rules_swc",
    sha256 = "5d13b0123d91d4297f60d8da0ab5771615f6ad6829bdfe69e7dcda9e5c01bc54",
    strip_prefix = "rules_swc-1.0.0-rc0",
    url = "https://github.com/aspect-build/rules_swc/archive/refs/tags/v1.0.0-rc0.tar.gz",
)

load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")

rules_swc_dependencies()

load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains", LATEST_SWC_VERSION = "LATEST_VERSION")

swc_register_toolchains(
    name = "swc",
    swc_version = LATEST_SWC_VERSION,
)

###
# Setup rules_jest
# https://github.com/aspect-build/rules_jest/releases
###
http_archive(
    name = "aspect_rules_jest",
    sha256 = "fa103b278137738ef08fd23d3c8c9157897a7159af2aa22714bc71680da58583",
    strip_prefix = "rules_jest-0.16.1",
    url = "https://github.com/aspect-build/rules_jest/releases/download/v0.16.1/rules_jest-v0.16.1.tar.gz",
)

load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

load("@aspect_rules_jest//jest:repositories.bzl", "jest_repositories")

jest_repositories(name = "jest")

load("@jest//:npm_repositories.bzl", jest_npm_repositories = "npm_repositories")

jest_npm_repositories()

###
# Setup rules_pkg
# https://github.com/bazelbuild/rules_pkg/releases
###
http_archive(
    name = "rules_pkg",
    sha256 = "8c20f74bca25d2d442b327ae26768c02cf3c99e93fad0381f32be9aab1967675",
    urls = ["https://github.com/bazelbuild/rules_pkg/releases/download/0.8.1/rules_pkg-0.8.1.tar.gz"],
)

load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

rules_pkg_dependencies()

###
# Setup rules_docker
# https://github.com/bazelbuild/rules_docker/releases
###
http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "b1e80761a8a8243d03ebca8845e9cc1ba6c82ce7c5179ce2b295cd36f7e394bf",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.25.0/rules_docker-v0.25.0.tar.gz"],
)

load("@io_bazel_rules_docker//repositories:repositories.bzl", rules_docker_repositories = "repositories")

rules_docker_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", rules_docker_deps = "deps")

rules_docker_deps()

load("@io_bazel_rules_docker//container:container.bzl", "container_pull")

container_pull(
    name = "debian_amd64",
    architecture = "amd64",
    digest = "sha256:9a67b70d0ba1d7c7690f917eedd8d24974dd8fd493205368b1e555a90c954208",
    registry = "docker.io",
    repository = "debian",
)

###
# Setup rules_k8s
# https://github.com/bazelbuild/rules_k8s/releases
###
http_archive(
    name = "io_bazel_rules_k8s",
    sha256 = "ce5b9bc0926681e2e7f2147b49096f143e6cbc783e71bc1d4f36ca76b00e6f4a",
    strip_prefix = "rules_k8s-0.7",
    urls = ["https://github.com/bazelbuild/rules_k8s/archive/refs/tags/v0.7.tar.gz"],
)

load("@io_bazel_rules_k8s//k8s:k8s.bzl", "k8s_defaults", "k8s_repositories")

k8s_repositories()

k8s_defaults(
    name = "k8s_deploy",
    cluster = "gke_ies-3d-designer_europe-west3-a_cluster",
    image_chroot = "eu.gcr.io/ies-3d-designer",
    kind = "deployment",
)
