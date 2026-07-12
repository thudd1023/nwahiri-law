import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Homestead',
  slug: 'homestead-personal-injury-attorney',
  metaTitle: 'Homestead Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Homestead or Goulds, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Nwahiri Law represents injured individuals and families throughout Homestead and South Miami-Dade, including the Goulds community, after car accidents, agricultural and commercial vehicle collisions, and slip and falls. Free consultation — no fee unless we win.',
  localContext: 'Homestead and Goulds are served by Jackson South Medical Center. If your injury involved care at a public hospital or a government agency, Attorney Nwahiri can walk you through Florida\'s sovereign immunity rules and whether you have a claim — he is not afraid to sue the government when it is warranted. He also handles serious truck and commercial vehicle accidents common throughout the agricultural corridors of South Miami-Dade.',
  zips: '33030 · 33032 · 33033\n33170 (Goulds)\nNear Jackson South\nMedical Center',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
