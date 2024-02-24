export function Albums() {
  return (
    <section className="relative block ">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-8 h-[80px] ">
        <svg
          className="absolute bottom-0 overflow-hidden "
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="0 0 2560 0 2560 100"
          ></polygon>
        </svg>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:px-20">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>

      <div className="bottom-0 top-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-[80px] ">
        <svg
          className="absolute bottom-0 overflow-hidden transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-100 fill-current"
            points="0 0 2560 0 2560 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}
