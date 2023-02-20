import {number} from '@org/lib'
import * as express from 'express'

/**
 * Workaround to infer type
 * https://github.com/aspect-build/rules_ts/issues/159
 */
const app: ReturnType<typeof express> = express()

app.get('/', (_req, res) => {
  res.send({number})
})

export default app
