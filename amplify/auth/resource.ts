import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  // userPoolClient: {
  //   accessTokenValidity: 1, // Access token valid for 1 hour (default unit is hours)
  //   idTokenValidity: 1, // ID token valid for 1 hour (default unit is hours)
  //   refreshTokenValidity: 7, // Refresh token valid for 7 days (default unit is days)
  //   // You can also specify the units explicitly
  //   tokenValidityUnits: {
  //     accessToken: "hours",
  //     idToken: "hours",
  //     refreshToken: "days",
  //   }
  // }
});
