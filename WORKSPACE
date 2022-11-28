load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

###
# Setup rules_js
# https://github.com/aspect-build/rules_js/releases
###
http_archive(
    name = "aspect_rules_js",
    sha256 = "f58d7be1bb0e4b7edb7a0085f969900345f5914e4e647b4f0d2650d5252aa87d",
    strip_prefix = "rules_js-1.8.0",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.8.0.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = "16.9.0",
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
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
    sha256 = "5b501313118b06093497b6429f124b973f99d1eb5a27a1cc372e5d6836360e9d",
    strip_prefix = "rules_ts-1.0.2",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.0.2.tar.gz",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(ts_version_from = "//:package.json")

###
# Setup rules_swc
# https://github.com/aspect-build/rules_swc/releases
###
http_archive(
    name = "aspect_rules_swc",
    sha256 = "ad8e15e7714637b09a2e14e8ed3794b4de00e1da29259f93828c5bc80debb36b",
    strip_prefix = "rules_swc-0.19.3",
    url = "https://github.com/aspect-build/rules_swc/archive/refs/tags/v0.19.3.tar.gz",
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
    sha256 = "dd596891aa893048d2e8d210fce214459df33d454bf0e77906ebbfaee38f2bbc",
    strip_prefix = "rules_jest-0.12.1",
    url = "https://github.com/aspect-build/rules_jest/archive/refs/tags/v0.12.1.tar.gz",
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
    sha256 = "eea0f59c28a9241156a47d7a8e32db9122f3d50b505fae0f33de6ce4d9b61834",
    urls = ["https://github.com/bazelbuild/rules_pkg/releases/download/0.8.0/rules_pkg-0.8.0.tar.gz"],
)

load("@rules_pkg//:deps.bzl", "rules_pkg_dependencies")

rules_pkg_dependencies()

###
# Setup rules_go
# https://github.com/bazelbuild/rules_go/releases
# https://github.com/bazelbuild/rules_docker/pull/2035
###
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "099a9fb96a376ccbbb7d291ed4ecbdfd42f6bc822ab77ae6f1b5cb9e914e94fa",
    urls = ["https://github.com/bazelbuild/rules_go/releases/download/v0.35.0/rules_go-v0.35.0.zip"],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains(version = "1.19.3")

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
