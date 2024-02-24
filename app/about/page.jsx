import Team from "../components/Team/page";

export default function About() {
  return (
    <div>
      {/* <div className="w-full h-[200px]  ">
        <Image
          src="/resources/images/KM_05670.jpg"
          alt="thumbnail"
          layout="fill"
        />
      </div> */}

      <img
        src="/resources/images/KM_05670.jpg"
        alt=""
        className="max-h-[350px] w-full object-cover"
      />

      <div className="py-20 ">
        <h1 className=" text-center text-4xl font-semibold mb-10">About Us</h1>

        <div className="px-20 bg-gray-300  ">
          <p className="text-justify text-gray-700 py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo non
            dolorum quibusdam voluptatum natus nobis, est, repellendus rerum
            nesciunt fugiat distinctio culpa deleniti, perspiciatis nostrum
            voluptatem accusamus magni? Enim reiciendis placeat omnis nemo, illo
            at vitae ab ex dolorum quo quis eligendi blanditiis qui illum
            voluptas aliquam saepe repellendus labore dolor quas nisi nulla sint
            excepturi tempore! Explicabo placeat quis ex, similique impedit
            consequuntur. Asperiores nihil sunt consectetur placeat. Natus
            doloribus deserunt dolor voluptatem quos ducimus illum suscipit
            laudantium voluptatum nam repellat nihil aut laborum rerum
            accusantium atque, mollitia totam nisi eligendi blanditiis modi.
            Deserunt, accusamus. Eaque explicabo molestiae modi suscipit at
            nulla ipsa ad quis atque ducimus est cupiditate sunt magni cumque
            adipisci esse vitae, eveniet dolorum iste exercitationem? Quibusdam
            at, exercitationem blanditiis optio ab aliquam nobis dolorem
            voluptate hic totam eveniet. Nesciunt, eius atque enim
            necessitatibus numquam explicabo neque cum ea maiores dolore sint
            delectus, est at deserunt corrupti rem officia qui molestiae optio
            saepe quibusdam quod! Optio labore voluptates necessitatibus
            molestiae quaerat saepe consequuntur sed asperiores sunt odio.
            Reiciendis ipsam corporis possimus nihil odio facere obcaecati
            maxime a. Voluptate eaque voluptatem harum maiores, sed suscipit
            provident id eius expedita perferendis libero! Autem, nulla at
            excepturi repellendus nemo ratione iure alias quis sed incidunt
            quaerat quos sint doloremque repellat necessitatibus beatae
            molestias reiciendis doloribus reprehenderit recusandae minima
            laborum accusantium tempora quia. Recusandae repellat optio nesciunt
            quibusdam harum, odio in esse assumenda! Cum aliquid, non facilis
            doloribus reprehenderit doloremque quasi error omnis consequatur
            excepturi rerum, exercitationem animi veniam. Labore?
          </p>
        </div>
      </div>

      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our Team</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>

          <Team />
        </div>
      </section>
    </div>
  );
}
