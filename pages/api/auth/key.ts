// NEXT
import { NextApiRequest, NextApiResponse } from 'next/types'

// FETCH
import axios from 'axios'

// SESSION
import { withSession } from '../../../src/util/withSession'

interface ApiRequest extends NextApiRequest {
  body: {
    apiKey: string
    apiSecret: string
  }
}

const handler = async (req: ApiRequest, res: NextApiResponse) => {
  const { apiKey, apiSecret } = req.body
  const GATEWAY_URL = process.env.GATEWAY_URL as string

  try {
    const gatewayRes = await axios.post(`${GATEWAY_URL}/sign_in`, {
      apiKey,
      apiSecret,
    })
    const { authToken } = gatewayRes.data
    req.session.apiKeyToken = authToken
    await req.session.save()

    res.send({ message: 'Successfully authenticated key pair' })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Error authenticating key pair' })
  }
}

export default withSession(handler)