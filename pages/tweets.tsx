import { ListDetailView, SiteLayout } from 'components/Layouts';
import { withProviders } from 'components/Providers/withProviders';
import Tweet from 'components/teets';
import TweetPage from 'components/Tweets/Tweetpage';
import routes from 'config/routes';
import { getTweets } from 'lib/twitter';
import { NextSeo } from 'next-seo';

function Tweetx({ tweets }) {
  return (
    <TweetPage>
      <NextSeo
        title={routes.tweets.seo.title}
        description={routes.tweets.seo.description}
        openGraph={routes.tweets.seo.openGraph}
      />
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </TweetPage>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1189444653059174401',
    '935857414435495937',
    '1334528781139259400',
    '1334334544598740994',
    '826528907381739520',
    '1308509070140162048',
    '1385236589547331589',
    '1402689156434776069',
    '997895977179721728',
    '1341090253864542208',
    '1383873047619276812',
    '1435677021590351873',
    '1026872652290379776',
    '1346113149112619016',
    '1340107217970683906',
    '992629481578745856',
    '989142253468708864',
    '807626710350839808',
    '1341962177272537089',
    '1342869937841266688',
    '1116362674319908864',
    '1471558914579722245',
    '1331380003716681728',
    '1002104154737684480'
  ]);

  return { props: { tweets } };
}

Tweetx.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={page} />
    </SiteLayout>
  );
});

export default Tweetx;
