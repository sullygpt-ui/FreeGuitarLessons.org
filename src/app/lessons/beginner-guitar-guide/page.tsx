import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateCTA from '@/components/AffiliateCTA';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How to Play Guitar: Complete Beginner\'s Guide',
  description: 'Learn how to play guitar from scratch. This free beginner guide covers everything from holding the guitar to playing your first songs.',
  keywords: ['how to play guitar', 'beginner guitar', 'learn guitar', 'guitar for beginners', 'start playing guitar'],
  openGraph: { title: 'How to Play Guitar: Complete Beginner\'s Guide', description: 'Everything you need to start playing guitar from absolute zero.' },
};

export default function BeginnerGuitarGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/acoustic-guitar.jpg" alt="Acoustic guitar" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Complete Beginner&apos;s Guitar Guide</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Lessons', href: '/lessons' }, { label: 'Beginner Guitar Guide' }]} />
      <article className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">How to Play Guitar: Complete Beginner&apos;s Guide</span></h1>
        <p className="text-gray-400 text-sm mb-8">15 min read · Beginner · Updated February 2026</p>

        <p>Learning guitar is one of the most rewarding things you can do. Whether you want to strum along to your favorite songs, write your own music, or eventually shred solos — it all starts here. This guide will take you from never having touched a guitar to playing your first chords and songs.</p>

        <h2>Choosing Your First Guitar</h2>
        <p>The best guitar for a beginner is the one you&apos;ll actually pick up and play. That said, here are some practical guidelines:</p>
        <p><strong>Acoustic guitar</strong> is the most popular choice for beginners. It requires no amplifier, you can play it anywhere, and it builds finger strength quickly. Steel-string acoustics are standard for pop, rock, country, and folk. Classical (nylon-string) guitars have a wider neck and softer strings, which some beginners find more comfortable.</p>
        <p><strong>Electric guitar</strong> is a great choice if you&apos;re drawn to rock, blues, metal, or jazz. The strings are thinner and closer to the fretboard, making them physically easier to press. You&apos;ll need an amplifier, though many affordable practice amps (or even headphone amps) work perfectly for learning.</p>
        <p>Don&apos;t overthink it. A $150-200 guitar from a reputable brand will serve you well for your first year or more. Brands like Yamaha, Fender, Epiphone, and Squier all make solid beginner instruments.</p>

        <h2>Parts of the Guitar</h2>
        <p>Before you start playing, familiarize yourself with the basic parts of the guitar:</p>
        <ul>
          <li><strong>Headstock</strong> — The top of the guitar where the tuning pegs live</li>
          <li><strong>Tuning pegs (machine heads)</strong> — Turn these to tighten or loosen each string to change its pitch</li>
          <li><strong>Nut</strong> — The small grooved piece where the headstock meets the neck, guiding the strings</li>
          <li><strong>Neck</strong> — The long piece you wrap your hand around</li>
          <li><strong>Fretboard (fingerboard)</strong> — The flat surface on the front of the neck where you press the strings</li>
          <li><strong>Frets</strong> — The metal strips embedded in the fretboard. Pressing a string behind a fret changes the note</li>
          <li><strong>Body</strong> — The large section that produces or amplifies sound</li>
          <li><strong>Sound hole</strong> — The round opening on an acoustic guitar&apos;s body</li>
          <li><strong>Bridge</strong> — Anchors the strings to the body at the bottom</li>
        </ul>

        <h2>How to Hold the Guitar</h2>
        <p>Proper posture makes everything easier — from chord shapes to strumming to avoiding injury.</p>
        <p><strong>Sitting position:</strong> Sit in a chair without arms. Rest the guitar body on your right thigh (if you&apos;re right-handed). The neck should angle slightly upward — not parallel to the floor. Keep your back relatively straight. The guitar should feel stable without you needing to hold it up with your fretting hand.</p>
        <p><strong>Fretting hand (left hand):</strong> Your thumb should rest on the back of the neck, roughly behind your middle finger. Curl your fingers so you&apos;re pressing strings with your fingertips, not the flat pads. Keep your wrist relatively straight — avoid bending it at extreme angles.</p>
        <p><strong>Strumming hand (right hand):</strong> Your forearm should rest lightly on the top edge of the guitar body. Your hand should float over the sound hole. Stay relaxed — tension is the enemy of good strumming.</p>

        <h2>Tuning Your Guitar</h2>
        <p>A guitar has six strings. From thickest (lowest pitch) to thinnest (highest pitch), the standard tuning is:</p>
        <ul>
          <li><strong>6th string (thickest)</strong> — E</li>
          <li><strong>5th string</strong> — A</li>
          <li><strong>4th string</strong> — D</li>
          <li><strong>3rd string</strong> — G</li>
          <li><strong>2nd string</strong> — B</li>
          <li><strong>1st string (thinnest)</strong> — E</li>
        </ul>
        <p>A popular mnemonic: <strong>E</strong>ddie <strong>A</strong>te <strong>D</strong>ynamite, <strong>G</strong>ood <strong>B</strong>ye <strong>E</strong>ddie.</p>
        <p>Use a clip-on tuner (around $10-15) or a free tuning app on your phone. Clip-on tuners are more reliable in noisy environments. Pluck each string individually and adjust the tuning peg until the tuner shows the correct note and the indicator is centered.</p>
        <p><strong>Tune every time you play.</strong> Seriously. Playing an out-of-tune guitar trains your ear to accept wrong notes, and nothing will sound right no matter how good your technique is.</p>

        <h2>Your First Chords</h2>
        <p>Chords are the foundation of guitar playing. A chord is simply multiple notes played together. We&apos;ll start with two of the easiest and most useful chords: Em and G.</p>

        <h3>Em (E Minor)</h3>
        <p>This is often the very first chord beginners learn because it only requires two fingers:</p>
        <ul>
          <li>Place your middle finger on the 2nd fret of the A string (5th string)</li>
          <li>Place your ring finger on the 2nd fret of the D string (4th string)</li>
          <li>Strum all six strings</li>
        </ul>
        <p>That&apos;s it — you&apos;re playing a chord! Em has a moody, slightly melancholic sound. It appears in thousands of songs across every genre.</p>

        <h3>G Major</h3>
        <p>G is one of the most common chords in popular music:</p>
        <ul>
          <li>Middle finger on the 3rd fret of the low E string (6th string)</li>
          <li>Index finger on the 2nd fret of the A string (5th string)</li>
          <li>Ring finger on the 3rd fret of the high E string (1st string)</li>
          <li>Strum all six strings</li>
        </ul>
        <p>G major sounds bright, open, and full. Combined with Em, you can already play the chord progression for songs like &ldquo;Wish You Were Here&rdquo; by Pink Floyd (which alternates between Em and G).</p>
        <p>For a complete guide to essential beginner chords, check out our <Link href="/lessons/easy-guitar-chords">Easy Guitar Chords</Link> lesson.</p>

        <AffiliateCTA
          slug="rrg1"
          courseName="Real Rhythm Guitar Level 1"
          price="$45"
          description="Want a structured approach to rhythm guitar? This course builds your strumming, timing, and chord transitions from the ground up."
        />

        <h2>Basic Strumming</h2>
        <p>Strumming is how you bring chords to life. Here&apos;s how to develop a solid strumming technique:</p>
        <p><strong>Use a pick (plectrum):</strong> Hold it between your thumb and the side of your index finger. Only a small amount of the pick should stick out. Hold it firmly enough that it doesn&apos;t fly away, but loosely enough that it flexes slightly when hitting the strings.</p>
        <p><strong>The basic down strum:</strong> Drag the pick across the strings from the thickest string to the thinnest in a smooth, even motion. Use your wrist, not your whole arm. Think of it like shaking water off your hand.</p>
        <p><strong>Adding up strums:</strong> After a down strum, bring the pick back up across the strings from thin to thick. The up strum is usually lighter and catches fewer strings — that&apos;s normal and sounds good.</p>
        <p><strong>Your first strumming pattern:</strong> Try this simple pattern: Down, Down, Down-Up, Down-Up. Count it as: 1, 2, 3-and, 4-and. Repeat this on a single chord until it feels natural, then try switching between Em and G every four beats.</p>

        <h2>Reading Chord Diagrams</h2>
        <p>Chord diagrams are visual maps showing you where to put your fingers. Here&apos;s how to read them:</p>
        <ul>
          <li>The vertical lines represent the six strings (left = thickest, right = thinnest)</li>
          <li>The horizontal lines represent frets</li>
          <li>Dots show where to place your fingers</li>
          <li>Numbers inside dots indicate which finger to use (1 = index, 2 = middle, 3 = ring, 4 = pinky)</li>
          <li>An &ldquo;O&rdquo; above a string means play it open (don&apos;t press any fret)</li>
          <li>An &ldquo;X&rdquo; above a string means don&apos;t play that string</li>
        </ul>
        <p>You&apos;ll see chord diagrams everywhere — in songbooks, on websites, and in apps. Once you can read them, you can learn any chord instantly.</p>

        <h2>Your First Practice Routine</h2>
        <p>Consistent practice beats marathon sessions. Here&apos;s a 20-minute daily routine for your first two weeks:</p>
        <ul>
          <li><strong>Minutes 1-3:</strong> Tune your guitar</li>
          <li><strong>Minutes 3-8:</strong> Practice forming Em and G chords. Press the chord, strum once, check that every string rings clearly, adjust if needed</li>
          <li><strong>Minutes 8-13:</strong> Practice switching between Em and G. Start slow — don&apos;t worry about speed. Focus on smooth, clean transitions</li>
          <li><strong>Minutes 13-18:</strong> Strum a simple pattern (Down, Down, Down-Up, Down-Up) while switching chords every four beats</li>
          <li><strong>Minutes 18-20:</strong> Play something fun — try strumming along to a song you like that uses these chords</li>
        </ul>
        <p><strong>Key tips:</strong></p>
        <ul>
          <li>Your fingertips will hurt at first. This is completely normal. Calluses develop within 2-3 weeks of regular playing</li>
          <li>If something buzzes, check that you&apos;re pressing close to the fret (not on top of it) and using your fingertip</li>
          <li>Slow is smooth, smooth is fast. Never sacrifice clean technique for speed</li>
          <li>20 minutes daily is better than 2 hours once a week</li>
        </ul>

        <h2>Common Beginner Mistakes</h2>
        <p>Avoid these pitfalls that slow down most beginners:</p>
        <ul>
          <li><strong>Not tuning before playing</strong> — Always tune. Every single time</li>
          <li><strong>Pressing too hard</strong> — You only need enough pressure for the string to ring clearly. Excess pressure causes hand fatigue and slows you down</li>
          <li><strong>Neglecting rhythm</strong> — Many beginners obsess over chords but ignore timing. Rhythm is what makes music sound like music. Use a metronome app</li>
          <li><strong>Trying to learn too many things at once</strong> — Master two chords before adding a third. Depth beats breadth at this stage</li>
          <li><strong>Comparing yourself to others</strong> — Every guitarist was a beginner once. Focus on your own progress</li>
        </ul>

        <h2>Next Steps</h2>
        <p>Once you&apos;re comfortable with Em and G, here&apos;s your roadmap:</p>
        <ul>
          <li>Learn C, D, and Am chords — see our <Link href="/lessons/easy-guitar-chords">Easy Guitar Chords</Link> lesson</li>
          <li>Start learning to <Link href="/lessons/how-to-read-guitar-tabs">read guitar tabs</Link> so you can learn songs</li>
          <li>Explore more strumming patterns to add variety</li>
          <li>Try playing along with recordings of simple songs</li>
        </ul>
        <p>The most important thing is to keep playing. Every guitarist remembers the struggle of the first few weeks — and every guitarist will tell you it&apos;s worth pushing through. The moment you play a song and it actually sounds like music is one of the most satisfying feelings in the world.</p>

        <AffiliateCTA
          slug="rrg1"
          courseName="Real Rhythm Guitar Level 1"
          price="$45"
          description="Ready for a complete, structured course? Real Rhythm Guitar Level 1 takes you from beginner to confident rhythm player with professional instruction and practice tracks."
        />

        <p>Keep practicing, stay patient, and enjoy the journey. You&apos;re already a guitarist — now it&apos;s just a matter of getting better every day.</p>
      </article>
    </div>
  );
}
