import SignOut from '@components/Auth/sign-out'

export default function Home() {
  return (
    <main>
      <div className='h-full w-full m-w-full m-h-full'>
        <div className='overflow-auto flex flex-col justify-center items-center'>
          <iframe
            src='https://www.youtube.com/embed/UYXa2yBF5ms?autoplay=1'
            title='YouTube video player'
            allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full max-w-screen-lg aspect-video'
          ></iframe>
          <iframe
            src='https://www.youtube.com/embed/UYXa2yBF5ms?autoplay=1'
            title='YouTube video player'
            allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full max-w-screen-lg aspect-video'
          ></iframe>
          <iframe
            src='https://www.youtube.com/embed/UYXa2yBF5ms?autoplay=1'
            title='YouTube video player'
            allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full max-w-screen-lg aspect-video'
          ></iframe>
          <SignOut />
        </div>
      </div>
    </main>
  )
}
