import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateCTA from '@/components/AffiliateCTA';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Easy Songs to Play on Guitar for Beginners',
  description: 'Learn 15+ easy guitar songs perfect for beginners. Simple chords, step-by-step breakdowns, and tips to start playing real music fast.',
  keywords: ['easy guitar songs', 'beginner guitar songs', 'simple songs guitar', 'first guitar songs', 'easy songs to play on guitar'],
  openGraph: { title: 'Easy Songs to Play on Guitar for Beginners', description: 'Start playing real songs on guitar today with these beginner-friendly picks.' },
};

export default function EasySongsGuitarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/playing-guitar.jpg" alt="Playing guitar" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Easy Songs on Guitar</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Lessons', href: '/lessons' }, { label: 'Easy Songs for Guitar' }]} />
      <article className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">Easy Songs to Play on Guitar for Beginners</span></h1>
        <p className="text-gray-400 text-sm mb-8">12 min read · Beginner · Updated February 2026</p>

        <p>There&apos;s nothing more motivating than playing a real song on guitar. Forget exercises and drills for a moment — once you can strum through an actual tune that people recognize, everything clicks. The good news? Dozens of iconic songs use just two to four simple chords.</p>
        <p>This guide covers 15+ easy songs organized by how many chords you need. If you haven&apos;t learned your open chords yet, start with our <Link href="/lessons/easy-guitar-chords">Easy Guitar Chords</Link> lesson first.</p>

        <h2>Two-Chord Songs</h2>
        <p>Yes, real songs exist that only need two chords. These are perfect for your very first week of playing.</p>

        <h3>&ldquo;Horse With No Name&rdquo; — America</h3>
        <p><strong>Chords: Em, D6/9</strong> (or simplified to Em and Dsus2)</p>
        <p>This classic from 1971 alternates between just two chord shapes that are almost identical — you only need to move two fingers one string each. The strumming pattern is a steady down-down-up-up-down-up. It&apos;s hypnotic and incredibly satisfying to play, even on day one.</p>

        <h3>&ldquo;Something in the Way&rdquo; — Nirvana</h3>
        <p><strong>Chords: Em, C</strong></p>
        <p>Kurt Cobain was a master of simple, powerful songwriting. This haunting track from Nevermind uses a gentle Em to C progression with a soft, fingerpicked or lightly strummed approach. It&apos;s a great introduction to playing with dynamics — keeping things quiet and controlled.</p>

        <h3>&ldquo;Achy Breaky Heart&rdquo; — Billy Ray Cyrus</h3>
        <p><strong>Chords: A, E</strong></p>
        <p>Love it or hate it, this two-chord country hit is undeniably fun to strum. The rhythm is upbeat and the chord changes are predictable, making it perfect for practicing your timing.</p>

        <h2>Three-Chord Songs</h2>
        <p>Three chords open up a massive catalog of songs. The combinations G-C-D, E-A-B7, and Am-G-F cover hundreds of hits.</p>

        <h3>&ldquo;Knockin&apos; on Heaven&apos;s Door&rdquo; — Bob Dylan</h3>
        <p><strong>Chords: G, D, Am (and C)</strong></p>
        <p>One of the most-covered songs in history. The progression is G-D-Am for the verses, with G-D-C for the chorus. Play it slowly with a steady strum and you&apos;ll sound great. The Guns N&apos; Roses version uses the same chords with more power.</p>

        <h3>&ldquo;Sweet Home Alabama&rdquo; — Lynyrd Skynyrd</h3>
        <p><strong>Chords: D, C, G</strong></p>
        <p>The iconic opening riff is a bit more advanced, but the rhythm guitar part is pure D-C-G the entire song. Strum along with a confident down-strum pattern and you&apos;ve got an instant crowd-pleaser.</p>

        <h3>&ldquo;Love Me Do&rdquo; — The Beatles</h3>
        <p><strong>Chords: G, C, D</strong></p>
        <p>The Beatles&apos; first hit single is a masterclass in simplicity. Three chords, a catchy melody, and a harmonica break. Focus on making your chord transitions smooth — this song has a steady tempo that rewards clean playing.</p>

        <h3>&ldquo;Bad Moon Rising&rdquo; — Creedence Clearwater Revival</h3>
        <p><strong>Chords: D, A, G</strong></p>
        <p>Upbeat, energetic, and only three chords throughout. The strumming pattern has a driving, almost shuffle-like feel. Try alternating between all downstrokes and a standard down-up pattern to see which feels more natural.</p>

        <AffiliateCTA
          slug="rrg1"
          courseName="Real Rhythm Guitar Level 1"
          price="$45"
          description="Learn the strumming patterns and rhythm techniques that make these songs sound great. Structured lessons with practice tracks included."
        />

        <h2>Four-Chord Songs</h2>
        <p>The famous &ldquo;four-chord song&rdquo; phenomenon is real. An enormous number of pop, rock, and country hits use the same four-chord progression: I-V-vi-IV. In the key of G, that&apos;s G-D-Em-C. In C, it&apos;s C-G-Am-F.</p>

        <h3>&ldquo;Let It Be&rdquo; — The Beatles</h3>
        <p><strong>Chords: C, G, Am, F</strong></p>
        <p>Perhaps the most beautiful four-chord song ever written. The progression C-G-Am-F repeats throughout. If F is tricky (it is for most beginners), use a simplified Fmaj7 — just play a standard C chord shape and lift your index finger off the B string. It sounds close enough and is much easier.</p>

        <h3>&ldquo;Zombie&rdquo; — The Cranberries</h3>
        <p><strong>Chords: Em, C, G, D</strong></p>
        <p>This 90s alt-rock anthem is driven by a powerful, repetitive chord progression that repeats for the entire song. The strumming is aggressive downstrokes — perfect for building right-hand endurance and confidence.</p>

        <h3>&ldquo;Stand By Me&rdquo; — Ben E. King</h3>
        <p><strong>Chords: G, Em, C, D</strong></p>
        <p>One of the most recognizable songs in the world. The chord progression never changes. Play it with a gentle, swinging strum and you&apos;ll immediately hear the magic. This one sounds especially good if you can add a basic bass note walk between chords.</p>

        <h3>&ldquo;Riptide&rdquo; — Vance Joy</h3>
        <p><strong>Chords: Am, G, C (with F)</strong></p>
        <p>A modern acoustic hit that&apos;s become a campfire staple. The verse uses Am-G-C and the chorus brings in F. The strumming has a muted, percussive quality — try lightly resting your strumming hand on the strings between strums for that choppy sound.</p>

        <h3>&ldquo;Wonderwall&rdquo; — Oasis</h3>
        <p><strong>Chords: Em7, G, Dsus4, A7sus4 (or simplified)</strong></p>
        <p>The go-to campfire song for a reason — it sounds impressive but is surprisingly accessible. The &ldquo;trick&rdquo; is that your ring and pinky fingers stay planted on the 3rd fret of the B and high E strings throughout the entire song. Only your index and middle fingers move. Once you realize this, the chord changes become almost effortless.</p>

        <h2>Tips for Learning Songs</h2>
        <p>Knowing the chords isn&apos;t enough — you need to play them in time and make the song sound like the song. Here&apos;s how:</p>

        <h3>1. Listen Before You Play</h3>
        <p>Listen to the song several times, focusing on the rhythm guitar. Tap along. Notice where the chord changes happen. Most changes occur on beat 1 of a new measure, but not always. Knowing the song&apos;s structure before you pick up the guitar saves enormous time.</p>

        <h3>2. Start at Half Speed</h3>
        <p>YouTube has a playback speed setting — use it. Drop the song to 0.5x or 0.75x speed while you learn. Spotify also has this feature in its app. There&apos;s no shame in slowing things down; it&apos;s actually the fastest way to learn.</p>

        <h3>3. Focus on Chord Transitions</h3>
        <p>The song will only sound good if your chord changes are smooth. Isolate the tricky transitions. If moving from G to C trips you up, just practice that change back and forth 20 times. Don&apos;t play the whole song with a stumble in the same spot every time.</p>

        <h3>4. Get the Strumming Pattern Right</h3>
        <p>The strumming pattern is often more important than the chords themselves. A song with the right rhythm and a slightly wrong chord will sound more musical than perfect chords with robotic strumming. Listen for the pattern and internalize it before adding chords.</p>

        <h3>5. Don&apos;t Aim for Perfection</h3>
        <p>Your version won&apos;t sound exactly like the recording — and that&apos;s fine. Professional recordings have multiple guitar tracks, studio production, and years of experience behind them. If someone can recognize the song when you play it, you&apos;re doing great.</p>

        <h2>Building a Song Repertoire</h2>
        <p>Having a collection of songs you can play from memory is one of the best things about being a guitarist. Here&apos;s how to build yours:</p>
        <ul>
          <li><strong>Learn songs you love.</strong> Motivation matters more than anything. If you don&apos;t care about the song, you won&apos;t practice it</li>
          <li><strong>Add one new song per week.</strong> While continuing to play your existing songs so you don&apos;t forget them</li>
          <li><strong>Mix genres.</strong> Country, rock, pop, folk — each genre teaches you different strumming patterns and rhythmic feels</li>
          <li><strong>Write down your list.</strong> Keep a list of songs you can play. It&apos;s satisfying to watch it grow, and it&apos;s useful when someone says &ldquo;play something!&rdquo;</li>
        </ul>

        <h2>Where to Find Chords and Tabs</h2>
        <p>Several websites offer free chord charts and tablature for almost any song:</p>
        <ul>
          <li><strong>Ultimate Guitar (ultimate-guitar.com)</strong> — The largest database of chords and tabs. User-submitted, so quality varies, but highly-rated versions are usually accurate</li>
          <li><strong>Songsterr</strong> — Interactive tabs that play along so you can hear what they should sound like</li>
          <li><strong>Chordify</strong> — Automatically generates chord charts from audio. Great for obscure songs</li>
        </ul>
        <p>If you&apos;re not comfortable reading tabs yet, check out our <Link href="/lessons/how-to-read-guitar-tabs">How to Read Guitar Tabs</Link> guide.</p>

        <AffiliateCTA
          slug="rrg1"
          courseName="Real Rhythm Guitar Level 1"
          price="$45"
          description="Want to go beyond basic strumming? Real Rhythm Guitar teaches you the patterns, techniques, and musicality that make songs come alive."
        />

        <h2>What to Do When You Get Stuck</h2>
        <p>Every beginner hits walls. Here&apos;s how to push through:</p>
        <ul>
          <li><strong>F chord giving you trouble?</strong> You&apos;re not alone. Try Fmaj7 as a substitute, or work on <Link href="/lessons/barre-chords">barre chords</Link> separately</li>
          <li><strong>Can&apos;t switch chords fast enough?</strong> Practice the transition in isolation, not within the song. Set a timer for 60 seconds and count how many clean switches you can make</li>
          <li><strong>Strumming feels robotic?</strong> Focus on accenting certain beats. Strum beats 2 and 4 slightly harder for a natural groove</li>
          <li><strong>Bored with the same songs?</strong> That&apos;s a sign to level up. Try songs with more chords, different time signatures, or new strumming patterns</li>
        </ul>

        <p>Playing songs is why most people pick up a guitar in the first place. Start with the two-chord songs, work your way up, and before you know it, you&apos;ll have a repertoire that impresses your friends, entertains at parties, and — most importantly — brings you joy every time you play.</p>
      </article>
    </div>
  );
}
