import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

const SCRIPT = `
<speak>
  <prosody rate="90%" pitch="-1st">
    This is an operational overview of Verifiable Systems Group.
    <break time="1s"/>
    We are an engineering lab focused on a single structural problem: The incompatibility between autonomous software and legacy infrastructure.
    <break time="500ms"/>
    As AI agents begin to execute complex economic tasks, they face two failure modes.
    First, Settlement Failure. Traditional banking—with its reversible transactions and multi-day settlement—cannot support the millisecond-latency requirements of machine commerce.
    Second, Cognitive Failure. Probabilistic AI models are prone to hallucination, making them unfit for high-stakes financial decision-making.
    <break time="1s"/>
    VSG architectures the solution to these problems. We build deterministic systems where state, logic, and risk are verifiable.
    <break time="800ms"/>
    Our platform rests on three pillars.
    <break time="500ms"/>
    One: Digital Assets. We utilize Bitcoin not as a speculative instrument, but as a settlement rail. It provides the cryptographic finality required for software to hold and transfer value without counterparty risk.
    <break time="500ms"/>
    Two: Deterministic Intelligence. Our Axiom project is an inference layer that constrains Large Language Models. It forces AI to anchor outputs to verified internal records, ensuring auditability.
    <break time="500ms"/>
    Three: Physical Verification. Our Lumina project links on-chain assets to physical inventory using optical physics for anti-spoofing.
    <break time="1s"/>
    Our operational model is equally rigorous.
    VSG is a unified R&D unit capitalized by a proprietary Bitcoin treasury.
    We utilize conservative, over-collateralized borrowing to fund development.
    We do not manage third-party capital. We do not sell tokens. We do not offer yield products.
    We operate as a closed-loop laboratory: we do not deploy code that we are not willing to fund with our own balance sheet.
    <break time="1s"/>
    If you are a capital partner or technical founder aligned with first-principles engineering, you can review our active development cycles in the Pipeline section.
    For a detailed analysis of our market thesis, refer to the Library.
    <break time="1s"/>
    Thank you.
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
