import type { Metadata } from 'next';
import LocationPage, { buildMetadata, LocationPageProps } from '@/components/LocationPage';

const props: LocationPageProps = {
  city: 'Kendall',
  slug: 'kendall-personal-injury-attorney',
  metaTitle: 'Kendall Personal Injury Attorney | Nwahiri Law',
  metaDescription: 'Injured in Kendall, FL? Attorney Tobechuku Nwahiri handles car accidents, truck accidents, slip and falls, and civil rights cases. Free consultation, no fee unless we win. Call (305) 345-4117.',
  introParagraph: 'Injured in Kendall? Nwahiri Law handles car accidents, truck accidents, slip and falls, and premises liability claims throughout Kendall and West Kendall, including cases involving treatment at Jackson South Medical Center. Free, confidential consultations.',
  localContext: "Kendall's dense retail corridors along Kendall Drive and the Falls make premises liability and slip-and-fall claims common. Attorney Nwahiri evaluates property owner negligence and pursues full compensation for medical bills, lost wages, and pain and suffering. If your injury involved treatment at a public hospital such as Jackson South, he can also advise you on Florida's sovereign immunity notice requirements.",
  zips: '33156 · 33173 · 33176\n33183\nNear Jackson South\nMedical Center',
};

export const metadata: Metadata = buildMetadata(props);

export default function Page() {
  return <LocationPage {...props} />;
}
