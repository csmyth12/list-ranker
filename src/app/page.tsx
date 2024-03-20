export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-start px-20 lg:px-48'>
      <h1 className='text-8xl my-4 border-b-2 border-rose-500'>Ranker</h1>
      <h2 className='text-2xl my-2'>By Conor Smyth</h2>

      <p className='text-lg my-1'>A new way to generate top 10 lists by comparing any two entries and voting for your favourite of the two, resulting in a top 10 list based on which preferencial choices you make along the way.</p>

      <p className='text-lg my-1'>
        Check out all these existing lists to rank:
        </p>
      <ul>
        <li>
          <a 
            href='/list-ranker/Starwars'
            className='border-b-0 border-rose-400 text-rose-400 hover:border-rose-600 hover:text-rose-600'
          >
            Star Wars Film Ranker
          </a>
        </li>
        <li>
          <a 
            href='/list-ranker/HarryPotter'
            className='border-b-0 border-rose-400 text-rose-400 hover:border-rose-600 hover:text-rose-600'
          >
            Harry Potter Film Ranker
          </a>
        </li>
        <li>
          <a 
            href='/list-ranker/DublinPubs'
            className='border-b-0 border-rose-400 text-rose-400 hover:border-rose-600 hover:text-rose-600'
          >
            Dublin Pubs Ranker
          </a>
        </li>
      </ul>
    </div>    
  )
}
