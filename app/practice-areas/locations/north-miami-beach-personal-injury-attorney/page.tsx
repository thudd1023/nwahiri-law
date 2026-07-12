import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'North Miami Beach',
  slug: 'north-miami-beach-personal-injury-attorney',
  metaTitle: 'North Miami Beach Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in North Miami Beach, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'If you or a loved one was injured in North Miami Beach — in a car accident on 163rd Street, a slip and fall at a local business, or while receiving care at Jackson North Medical Center — Attorney Tobechuku Nwahiri can help you understand your rights and pursue full compensation.',
  localContext: 'Jackson North Medical Center serves much of North Miami Beach. Claims involving public hospitals and government-run facilities carry strict notice deadlines and damage caps under Florida law — Nwahiri Law is not afraid to sue the government or the police when they have caused harm, and can explain exactly how those claims differ from a standard injury case.',
  zips: '33160 · 33162 · 33179\nNear Jackson North\nMedical Center',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
