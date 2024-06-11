import awsconfig from "../aws-exports";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { createAuthLink, AuthOptions, AUTH_TYPE } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

interface IClientProps {
  children: React.ReactNode;
}

const url = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;

const auth: AuthOptions = {
  type: awsconfig.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: awsconfig.aws_appsync_apiKey,
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({
    url,
    region,
    auth,
  }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          listEnglishSentences: {
            keyArgs: false,
            merge(existing = [], incoming: any) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

const Client = ({ children }: IClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
