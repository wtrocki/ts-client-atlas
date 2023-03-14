#  Atlas Client for typescript

> NOTE: This project is just an experiment. It should not be used by general public.

Generated typescript client for atlas.

## Contents

Project contains:

- Github actions automation for OpenAPI processing and generation
- OpenAPI processing tool for transforming OpenAPI schema
- OpenAPI generator setup with various scripts helping with generation

See [tools](./tools) for more info.

## Installing 

```
npm install --save wtr-cloud-api-client
```

## Examples

Go to [./examples](./examples) folder


For more advanced examples please check github action:
https://github.com/wtrocki/atlas-github-action/blob/main/src/create/createCluster.js

## Limitations

1. Library relies on Digest-fetch community library for authentication.
For production usage we recomend to build your own digest provider
https://github.com/wtrocki/ts-client-atlas/blob/main/lib/digest-fetch.ts
2. Not all endpoints in client have been verified. Use at your own risks. 

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

## Example

```
npm run example
```

See [example](./example) folder for more information
