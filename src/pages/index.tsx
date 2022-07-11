import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useApolloClient } from '@apollo/client';

import { LanguageSwitcher, Launches } from '../components';

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: t('greetings', { version: apolloClient.version }),
        }}
      />
      <LanguageSwitcher />

      <br />
      <Launches />
    </div>
  );
};

export default IndexPage;
