import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'North Miami',
  slug: 'north-miami-personal-injury-attorney',
  metaTitle: 'North Miami Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in North Miami, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Nwahiri Law is headquartered in North Miami at 13499 Biscayne Blvd, Suite 107 — so if you were injured in a car accident, slip and fall, or rideshare crash right here in North Miami, your attorney is local, not a call center three states away. Free consultations, no fee unless we win.',
  localContext: 'Because the firm is based in North Miami, clients get faster case intake, easier in-person meetings, and an attorney who already knows the local courts, insurers, and hospitals — including Jackson North Medical Center just up Biscayne Blvd. Attorney Nwahiri represents North Miami residents in personal injury and civil rights cases and is not afraid to sue the police or a government agency when they have caused harm.',
  zips: '33161 · 33168 · 33181\nFirm\'s home base —\n13499 Biscayne Blvd',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
