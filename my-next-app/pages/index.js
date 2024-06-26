// pages/index.js
import Head from 'next/head';
import SignUpButton from '../src/app/components/signUpButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Lyra - Unlock Your Power of Deep Understanding</title>
        <meta
          name="description"
          content="Lyra - Unlock Your Power of Deep Understanding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-4">
        <h1 className="text-6xl font-bold text-center mb-4">
          Unlock Your Power of Deep Understanding
        </h1>
        <div className="flex justify-center w-full mb-8">
          <input
            type="text"
            placeholder="Input the URL of YouTube video"
            className="w-2/3 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-lg shadow">
            Go
          </button>
        </div>
        <SignUpButton />
      </main>
    </div>
  );
}
