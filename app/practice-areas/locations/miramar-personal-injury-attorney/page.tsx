import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Miramar',
  slug: 'miramar-personal-injury-attorney',
  metaTitle: 'Miramar Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Miramar, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Injured in a car accident, truck crash, or fall in Miramar? Nwahiri Law is licensed in both Florida and Georgia and represents Miramar residents and commuters injured along I-75, Miramar Parkway, and University Drive. Free consultation — no fee unless we win.',
  localContext: 'Miramar sits right on the Broward/Miami-Dade line, so cases here often involve multiple jurisdictions and insurers. Attorney Nwahiri handles the cross-county complexity so you don\'t have to. He represents Miramar residents in car accidents, truck accidents, slip and falls, and civil rights matters throughout Broward and Miami-Dade County.',
  zips: '33025 · 33027 · 33023\nBroward/Miami-Dade line',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
