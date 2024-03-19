export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-start px-20 lg:px-48'>
      <h1 className='text-8xl my-4 border-b-2 border-rose-500'>Ranker</h1>
      <h2 className='text-2xl my-2'>By Conor Smyth</h2>

      <p className='text-lg my-1'>A new way to generate top 10 lists by comparing any two entries and voting for your favourite of the two, resulting in a top 10 list based on which preferencial choices you make along the way.</p>

      <p className='text-lg my-1'>
        Get started with the{' '}
        <a 
          href='/Starwars'
          className='border-b-0 border-rose-400 text-rose-400 hover:border-rose-600 hover:text-rose-600'
        >
          Star Wars Movie Ranker
        </a>
        .
      </p>
    </div>    
  )
}
