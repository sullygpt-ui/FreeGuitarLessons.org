import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateCTA from '@/components/AffiliateCTA';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How to Play Blues Guitar: Beginner\'s Guide',
  description: 'Learn blues guitar from scratch. The 12-bar blues, blues scale, essential techniques like bending and vibrato, and how to start improvising.',
  keywords: ['blues guitar', 'learn blues guitar', '12 bar blues', 'blues scale guitar', 'blues guitar beginner'],
  openGraph: { title: 'How to Play Blues Guitar: Beginner\'s Guide', description: 'Everything you need to start playing blues guitar — scales, techniques, and the 12-bar blues.' },
};

export default function BluesGuitarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/guitar-amp.jpg" alt="Guitar amplifier" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Blues Guitar</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Lessons', href: '/lessons' }, { label: 'Blues Guitar' }]} />
      <article className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">How to Play Blues Guitar: Beginner&apos;s Guide</span></h1>
        <p className="text-gray-400 text-sm mb-8">15 min read · Beginner/Intermediate · Updated February 2026</p>

        <p>Blues is the root of modern popular music. Rock, jazz, R&amp;B, country, funk — they all grew from the blues. Learning blues guitar doesn&apos;t just teach you a genre; it teaches you the language that connects nearly all Western popular music. And it&apos;s more accessible than you might think.</p>

        <h2>What Makes Blues Sound Like Blues?</h2>
        <p>Blues has a distinctive sound built from a few key elements:</p>
        <ul>
          <li><strong>The blues scale</strong> — A specific set of notes (especially the &ldquo;blue notes&rdquo;) that create tension and emotion</li>
          <li><strong>The 12-bar blues progression</strong> — A chord pattern that&apos;s been the backbone of blues for over a century</li>
          <li><strong>Expressive techniques</strong> — Bending, vibrato, slides, and dynamics that give blues its vocal, human quality</li>
          <li><strong>Feel and swing</strong> — Blues isn&apos;t played &ldquo;straight&rdquo; — it has a swing or shuffle feel that gives it groove</li>
          <li><strong>Call and response</strong> — A musical conversation: a phrase is &ldquo;called,&rdquo; then &ldquo;answered&rdquo; — often mimicking human speech</li>
        </ul>

        <h2>The 12-Bar Blues</h2>
        <p>The 12-bar blues is the most important chord progression in blues (and arguably all of popular music). It uses three chords — the I, IV, and V — arranged in a 12-bar pattern. In the key of A:</p>
        <ul>
          <li><strong>Bars 1-4:</strong> A7 | A7 | A7 | A7</li>
          <li><strong>Bars 5-6:</strong> D7 | D7</li>
          <li><strong>Bars 7-8:</strong> A7 | A7</li>
          <li><strong>Bar 9:</strong> E7</li>
          <li><strong>Bar 10:</strong> D7</li>
          <li><strong>Bars 11-12:</strong> A7 | E7 (turnaround)</li>
        </ul>
        <p>This pattern repeats for the entire song. Hundreds (maybe thousands) of blues songs use this exact structure. Learn it in A, and you&apos;ve got the foundation for playing blues with anyone, anywhere.</p>

        <h3>The Dominant 7th Sound</h3>
        <p>Notice the chords are A7, D7, and E7 — not plain A, D, and E. The dominant 7th quality (adding a flatted 7th note to each chord) is essential to the blues sound. It creates a tension that never fully resolves, which gives blues its characteristic &ldquo;restless&rdquo; feeling.</p>
        <p>If you don&apos;t know the 7th chord shapes yet:</p>
        <ul>
          <li><strong>A7:</strong> x02020 — Like A major but lift your ring finger</li>
          <li><strong>D7:</strong> xx0212 — Like D major but move your ring finger</li>
          <li><strong>E7:</strong> 020100 — Like E major but lift your ring finger</li>
        </ul>

        <h3>The Shuffle Rhythm</h3>
        <p>Blues is almost never played with a straight eighth-note feel. Instead, it uses a &ldquo;shuffle&rdquo; or &ldquo;swing&rdquo; feel where each beat is divided into a long-short pattern (like a triplet with the middle note removed).</p>
        <p>The easiest way to feel it: say &ldquo;DUM-da DUM-da DUM-da DUM-da&rdquo; where DUM is long and da is short. That&apos;s the shuffle feel. It&apos;s what makes your foot tap and your head nod.</p>

        <AffiliateCTA
          slug="rrg1"
          courseName="Real Rhythm Guitar Level 1"
          price="$45"
          description="Master rhythm guitar fundamentals including the shuffle feel, chord transitions, and groove that every blues player needs."
        />

        <h2>The Blues Scale</h2>
        <p>The blues scale is your melodic toolkit for improvising over the 12-bar blues. It&apos;s a minor pentatonic scale with one added note — the &ldquo;blue note&rdquo; (flatted 5th).</p>

        <h3>A Blues Scale (5th Position)</h3>
        <ul>
          <li><strong>6th string:</strong> 5th fret (A), 8th fret (C)</li>
          <li><strong>5th string:</strong> 5th fret (D), 6th fret (Eb — the blue note), 7th fret (E)</li>
          <li><strong>4th string:</strong> 5th fret (G), 7th fret (A)</li>
          <li><strong>3rd string:</strong> 5th fret (C), 6th fret (Db — the blue note), 7th fret (D)</li>
          <li><strong>2nd string:</strong> 5th fret (E), 8th fret (G)</li>
          <li><strong>1st string:</strong> 5th fret (A), 8th fret (C)</li>
        </ul>
        <p>The blue notes (Eb on the 5th string, Db on the 3rd string) are what give the scale its distinctive flavor. They create tension that resolves when you move to an adjacent note. Don&apos;t sit on them — use them as passing tones or bend into them.</p>
        <p>For more on scales, see our <Link href="/lessons/guitar-scales-beginners">guitar scales for beginners</Link> lesson.</p>

        <h2>Essential Blues Techniques</h2>
        <p>Blues is defined as much by how you play notes as which notes you play. These techniques are what separate a blues player from someone just playing the blues scale.</p>

        <h3>String Bending</h3>
        <p>Bending is the most important technique in blues guitar. You push (or pull) a string sideways across the fretboard to raise its pitch, mimicking the human voice.</p>
        <ul>
          <li><strong>Half-step bend:</strong> Raise the pitch by one fret&apos;s worth. Subtle and tense</li>
          <li><strong>Whole-step bend:</strong> Raise the pitch by two frets&apos; worth. The most common bend in blues</li>
          <li><strong>Bend and release:</strong> Bend up, then let the string return to its original pitch. Creates a crying, vocal-like sound</li>
          <li><strong>Pre-bend:</strong> Bend the string before picking it, then release. Sounds like the note is falling</li>
        </ul>
        <p><strong>Technique tip:</strong> Use multiple fingers for support. If you&apos;re bending with your ring finger, place your index and middle fingers on the same string behind it. This gives you much more control and strength. Push toward the ceiling on the lower strings, pull toward the floor on the higher strings.</p>

        <h3>Vibrato</h3>
        <p>Vibrato is a slight, rhythmic wavering of pitch that adds life and sustain to notes. In blues, vibrato is usually wide and expressive — think B.B. King&apos;s singing guitar tone.</p>
        <p>To practice vibrato: fret a note, then rapidly bend and release the string in small, even pulses. The key word is <em>even</em> — sloppy, irregular vibrato sounds nervous. Controlled, rhythmic vibrato sounds confident and musical.</p>
        <p>Different blues players have distinctive vibrato styles — it&apos;s as personal as a signature. Listen to B.B. King (fast, narrow), Albert King (wide, dramatic), and Stevie Ray Vaughan (intense, aggressive) to hear the range of possibilities.</p>

        <h3>Slides</h3>
        <p>Pick a note, then slide your finger up or down the fretboard to a different note without lifting off the string. Slides connect notes smoothly and add a vocal, legato quality. Slide into notes from a fret or two below for a smooth entrance, or slide out of notes for a trailing-off effect.</p>

        <h3>Hammer-Ons and Pull-Offs</h3>
        <p>These legato techniques let you play notes without picking each one:</p>
        <ul>
          <li><strong>Hammer-on:</strong> Pick a note, then &ldquo;hammer&rdquo; a finger onto a higher fret on the same string. The second note sounds without picking</li>
          <li><strong>Pull-off:</strong> The reverse — pick a note, then pull your finger off the string with a slight sideways plucking motion to sound the lower note</li>
        </ul>
        <p>Combined with bends and slides, these techniques create the flowing, expressive phrasing that defines great blues playing.</p>

        <h2>Your First Blues Solo</h2>
        <p>You don&apos;t need to be a virtuoso to play a blues solo. Here&apos;s a framework for creating simple, effective blues phrases:</p>

        <h3>Rule 1: Less Is More</h3>
        <p>The most common beginner mistake is playing too many notes. B.B. King is famous for saying the notes you don&apos;t play are as important as the ones you do. A single, well-bent note with good vibrato can say more than a flurry of 16th notes.</p>

        <h3>Rule 2: Use Call and Response</h3>
        <p>Play a short phrase (2-4 notes), then leave space (1-2 beats of silence), then play a &ldquo;response&rdquo; phrase. This mirrors how humans speak in conversation and is fundamental to blues phrasing. Think of it as: say something, breathe, respond.</p>

        <h3>Rule 3: Target Chord Tones</h3>
        <p>When the chord changes in the 12-bar progression, try to land on a note that belongs to that chord. Over A7, the note A is a safe landing spot. Over D7, land on D. This creates a stronger connection between your solo and the underlying harmony.</p>

        <h3>Rule 4: Bend Into Notes</h3>
        <p>Instead of just fretting a note cleanly, try bending up to it from a half-step below. This adds expression and makes even simple phrases sound bluesy. The bend on the 7th fret of the 3rd string (bending from D up to Eb and back) is one of the most iconic sounds in blues guitar.</p>

        <h3>Rule 5: End Phrases on Strong Notes</h3>
        <p>The root note (A in the key of A) and the minor 3rd (C) are the safest, strongest-sounding notes to end a phrase on. They create a sense of resolution that satisfies the listener&apos;s ear.</p>

        <AffiliateCTA
          slug="theory"
          courseName="Theory & Songwriting Course"
          price="$45"
          description="Understand the theory behind blues progressions, chord relationships, and improvisation. Connect the dots between scales and real music."
        />

        <h2>Blues Rhythm Guitar</h2>
        <p>Blues isn&apos;t just about soloing — great rhythm playing is equally important. Here are essential rhythm techniques:</p>

        <h3>The Blues Shuffle Riff</h3>
        <p>The classic boogie-woogie shuffle riff is one of the most recognizable sounds in music. On the A string:</p>
        <ol>
          <li>Play the open A string (or 5th fret on 6th string for a power chord)</li>
          <li>Add your pinky two frets up on the same string to create the shuffle pattern</li>
          <li>Alternate between the two positions in a shuffle rhythm: DUM-da DUM-da</li>
          <li>Move the same pattern to follow the chord changes (D string for the IV chord, etc.)</li>
        </ol>
        <p>This riff appears in &ldquo;Johnny B. Goode,&rdquo; &ldquo;Sweet Home Chicago,&rdquo; and countless other blues and rock songs.</p>

        <h3>Chord Stabs</h3>
        <p>Instead of constant strumming, blues rhythm often uses short, punchy chord hits (&ldquo;stabs&rdquo;) on beats 2 and 4. Play the chord sharply, then immediately mute the strings with your fretting hand. This creates a tight, funky groove that leaves room for the singer or lead guitarist.</p>

        <h2>Essential Blues Listening</h2>
        <p>To play blues authentically, you need to listen to the masters. Here&apos;s a starter playlist:</p>
        <ul>
          <li><strong>B.B. King</strong> — &ldquo;The Thrill Is Gone.&rdquo; The master of &ldquo;less is more&rdquo; phrasing and vibrato</li>
          <li><strong>Stevie Ray Vaughan</strong> — &ldquo;Pride and Joy.&rdquo; Intense, fiery Texas blues with incredible technique</li>
          <li><strong>Albert King</strong> — &ldquo;Born Under a Bad Sign.&rdquo; Massive bends and a unique left-handed upside-down playing style</li>
          <li><strong>Muddy Waters</strong> — &ldquo;Hoochie Coochie Man.&rdquo; The foundation of electric Chicago blues</li>
          <li><strong>Robert Johnson</strong> — &ldquo;Cross Road Blues.&rdquo; Where it all started. Acoustic Delta blues at its most powerful</li>
          <li><strong>John Mayer</strong> — &ldquo;Gravity.&rdquo; Modern blues with impeccable tone and phrasing. Proof that blues is alive and well</li>
          <li><strong>Gary Clark Jr.</strong> — &ldquo;Bright Lights.&rdquo; Contemporary blues-rock with raw energy</li>
        </ul>

        <h2>Blues Practice Plan</h2>
        <p>Here&apos;s a 20-minute daily practice routine to develop your blues playing:</p>
        <ul>
          <li><strong>Minutes 1-5:</strong> Blues scale warm-up. Play the A blues scale ascending and descending with a metronome at a comfortable tempo</li>
          <li><strong>Minutes 5-8:</strong> Bending practice. Work on half-step and whole-step bends on the 2nd and 3rd strings. Focus on hitting the target pitch accurately</li>
          <li><strong>Minutes 8-12:</strong> Shuffle rhythm. Practice the blues shuffle riff through the 12-bar progression in A</li>
          <li><strong>Minutes 12-20:</strong> Jam over a backing track. Search YouTube for &ldquo;12 bar blues in A backing track&rdquo; and improvise using the blues scale. Focus on phrasing, space, and expression — not speed</li>
        </ul>

        <h2>Taking It Further</h2>
        <p>Once you&apos;re comfortable with the basics, explore these directions:</p>
        <ul>
          <li><strong>Learn blues in other keys</strong> — E and G are the next most common blues keys on guitar</li>
          <li><strong>Add the major pentatonic</strong> — Mixing major and minor pentatonic notes is the secret to more sophisticated blues soloing</li>
          <li><strong>Study turnarounds</strong> — The last two bars of a 12-bar blues often feature a distinctive lick that leads back to the top. Learning classic turnarounds is essential</li>
          <li><strong>Explore different blues styles</strong> — Delta, Chicago, Texas, British, jazz-blues — each has its own flavor and techniques</li>
        </ul>

        <p>Blues is a lifelong pursuit. Players like B.B. King and Buddy Guy played for 60+ years and never stopped discovering new things within this seemingly simple framework. Start with the 12-bar blues, the blues scale, and a few bends — and let the music take you where it will.</p>
      </article>
    </div>
  );
}
