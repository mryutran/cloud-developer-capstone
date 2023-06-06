// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '4a6wrrf2af'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'mryutran.us.auth0.com',            // Auth0 domain
  clientId: 'mVjd8gxO8wASGTYOAFwUusERaUDUQGMk',          // Auth0 client id
  callbackUrl: 'http://todoclient-dev.us-east-1.elasticbeanstalk.com/callback'  // 3000
}
