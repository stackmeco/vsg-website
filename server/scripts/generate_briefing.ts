import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

const SCRIPT = `
<speak>
  <prosody rate="90%" pitch="-2st">
    This is an operational briefing for Verifiable Systems Group.
    <break time="1s"/>
    We are entering the era of the autonomous economy. As software begins to transact and reason without human intervention, it faces a structural crisis.
    Legacy banking is too slow for machine commerce. And probabilistic AI models are too unreliable for high-stakes decision-making.
    In short: The rails are broken, and the intelligence is hallucinating.
    <break time="1s"/>
    VSG exists to solve this. We are a Truth Engineering Lab.
    We engineer deterministic infrastructure where state, logic, and risk are mathematically provable, not socially promised.
    <break time="800ms"/>
    Our architecture relies on three verified pillars.
    First, Digital Assets. We view Bitcoin not as a trade, but as the only bearer asset capable of settling at the speed of software. It is the TCP/IP of value.
    Second, Deterministic Intelligence. We are building Axiom—a constraint layer that prevents AI hallucination. It forces stochastic models to anchor every output to a cryptographically verified record.
    And third, Physical Verification. Through our Lumina initiative, we are engineering optical physics engines that bridge the gap between on-chain tokens and physical reality.
    <break time="1s"/>
    How we operate is as important as what we build.
    VSG is a unified R&D unit. We are capitalized by our own proprietary Bitcoin treasury.
    We utilize conservative, over-collateralized borrowing to fund our operations.
    We do not sell tokens. We do not offer yield products. We do not operate on speculation.
    We function as a closed-loop laboratory.
    <break time="1s"/>
    Welcome to the infrastructure of certainty.
  </prosody>
</speak>
`;

async function generateAudio() {
  const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!credentialsJson) {
    console.error('Error: GOOGLE_APPLICATION_CREDENTIALS_JSON environment variable is not set.');
    console.log('Please add your Google Cloud service account JSON to Replit Secrets.');
    process.exit(1);
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsJson);
  } catch {
    console.error('Error: The provided credentials are not valid JSON.');
    console.error('Google Cloud Text-to-Speech requires a full service account JSON file, not just an API key.');
    console.error('');
    console.error('To get the correct credentials:');
    console.error('1. Go to Google Cloud Console > IAM & Admin > Service Accounts');
    console.error('2. Create a new service account or select an existing one');
    console.error('3. Click "Keys" tab > "Add Key" > "Create new key" > JSON');
    console.error('4. Copy the ENTIRE contents of the downloaded JSON file');
    console.error('5. Paste it as the value for GOOGLE_APPLICATION_CREDENTIALS_JSON secret');
    process.exit(1);
  }

  console.log("Using service account credentials.");
  const client = new textToSpeech.TextToSpeechClient({ credentials });

  const request = {
    input: { ssml: SCRIPT },
    voice: { languageCode: 'en-US', name: 'en-US-Studio-M' },
    audioConfig: { audioEncoding: 'MP3' as const, speakingRate: 0.9 },
  };

  console.log("Generating Audio Stream with Google Cloud Text-to-Speech...");
  console.log("Using voice: en-US-Studio-M (authoritative news anchor)");
  
  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    
    await writeFile('client/public/system_briefing.mp3', response.audioContent as string | Uint8Array, 'binary');
    console.log('Audio content written to: client/public/system_briefing.mp3');
    console.log('Generation complete.');
  } catch (error) {
    console.error('Error generating audio:', error);
    process.exit(1);
  }
}

generateAudio();
