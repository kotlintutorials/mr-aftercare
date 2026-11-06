# mr-aftercare

A test fixture for after-care on merged changes: Node with Vitest, `CI` on PRs to any branch, and a stand-in deploy
to the `production` environment on every push to `main`, so GitHub records a deployment of each merge commit.

`release/1.x` takes backports. An issue labelled `incident` that names a PR links it to that PR's deploy.
