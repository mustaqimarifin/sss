import { ListDetailView } from 'components/Layouts';
import { Detail } from 'components/ListDetail/Detail';
import * as React from 'react';

function MissingPage() {
  return <Detail.Null />;
}

export default function Home() {
  return <ListDetailView list={null} hasDetail detail={<MissingPage />} />;
}
