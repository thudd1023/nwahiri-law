import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Miami Gardens',
  slug: 'miami-gardens-personal-injury-attorney',
  metaTitle: 'Miami Gardens Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Miami Gardens, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Miami Gardens sees a high volume of serious car and truck accidents along I-95, the Palmetto Expressway, and NW 27th Avenue. If you were injured, Nwahiri Law offers a free, no-obligation consultation and handles your case on contingency — you pay nothing unless we win.',
  localContext: 'Attorney Nwahiri represents Miami Gardens residents in personal injury claims arising from high-traffic corridors including I-95 and the Palmetto Expressway, as well as civil rights and excessive force cases involving local law enforcement. He is not afraid to sue the police when officers cross the line, and handles the full claims process from investigation through settlement or trial.',
  zips: '33054 · 33056 · 33169\nHigh traffic-accident volume\n(I-95 corridor)',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
