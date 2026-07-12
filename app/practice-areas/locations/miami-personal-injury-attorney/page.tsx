import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Miami',
  slug: 'miami-personal-injury-attorney',
  metaTitle: 'Miami Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Miami, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'If you were hurt in a car accident, truck crash, slip and fall, or by the misconduct of a government agency in Miami, Attorney Tobechuku Nwahiri can review your case for free. Nwahiri Law represents injured people throughout Miami-Dade County, including patients treated at Jackson Memorial Hospital and the Miami Health District, on a no-fee-unless-we-win basis.',
  localContext: 'Miami is home to Jackson Memorial Hospital, one of the busiest trauma centers in the country — and one of the most misunderstood when it comes to legal claims. Because Jackson Memorial is operated by the Public Health Trust, a government entity, claims against it are governed by Florida\'s sovereign immunity law (Fla. Stat. § 768.28), not standard negligence rules. Attorney Nwahiri has written and spoken publicly about how these claims work and is not afraid to take on government defendants when they have caused harm.',
  zips: '33101 · 33125 · 33128\n33136 · 33137\nIncludes Jackson Memorial\nmain campus / Health District',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
