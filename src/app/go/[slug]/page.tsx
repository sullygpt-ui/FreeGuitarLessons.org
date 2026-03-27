import { redirect } from 'next/navigation';
import { getAffiliateLink } from '@/lib/affiliateLinks';

export default async function GoRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const url = getAffiliateLink(slug);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <script dangerouslySetInnerHTML={{ __html: `
        if(typeof gtag!=='undefined'){gtag('event','affiliate_click',{slug:'${slug}',url:'${url}'});}
        window.location.href='${url}';
      `}} />
      <p className="text-gray-400">Redirecting to {url}...</p>
      <meta httpEquiv="refresh" content={`1;url=${url}`} />
    </div>
  );
}
