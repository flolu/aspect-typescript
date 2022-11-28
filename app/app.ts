import {number} from '@org/lib'
import * as express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send({number})
})

/**
 * TODO The inferred type of 'app' cannot be named without a reference
 * to @types/express-serve-static-core
 *
 * https://github.com/aspect-build/rules_ts/issues/159
 * https://github.com/microsoft/TypeScript/issues/42873
 */
export default app as any
