import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Hialeah',
  slug: 'hialeah-personal-injury-attorney',
  metaTitle: 'Hialeah Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Hialeah, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Hialeah is one of the largest cities in Miami-Dade County — and one of the busiest for car accidents, truck accidents, and slip and fall claims. Nwahiri Law represents Hialeah residents throughout the claims process, from the initial consultation through settlement or trial. Free consultation, no fee unless we win.',
  localContext: 'Whether your accident happened on the Palmetto Expressway, Okeechobee Road, or a local parking lot, Attorney Nwahiri handles the insurance company so you can focus on recovery. He also represents Hialeah residents in civil rights and excessive force cases involving local law enforcement — and is not afraid to take those cases to trial.',
  zips: '33010 · 33012 · 33013\n33014 · 33016\nLargest city in target area',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
