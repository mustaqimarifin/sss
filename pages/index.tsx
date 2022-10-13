import { Intro } from 'components/Home/Intro';
import { ListDetailView } from 'components/Layouts';
import * as React from 'react';

export default function Home() {
  return <ListDetailView list={null} hasDetail detail={<Intro />} />;
}
