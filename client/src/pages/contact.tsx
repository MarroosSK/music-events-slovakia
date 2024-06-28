const Contact = () => {
  return (
    <section className="mx-auto mt-10 flex flex-col  min-h-screen max-w-7xl px-6 lg:px-12 overflow-hidden">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>

      <h2 className="font-bold py-4">Important</h2>

      <p>e-mail: email@email.fake.com</p>

      <p className="py-4  text-[#31ff38] ">
        PS: We don't organize events, we just promote them!
      </p>
      <h2 className="font-bold pt-4">Ads</h2>
      <p className="py-4 ">Average monthly visit: between 800k - 1m views.</p>

      <p>
        In case of interest in banner ads contact us at: email@email.fake.com
      </p>

      <h2 className="font-bold pt-4">For event makers</h2>
      <p className="py-4 ">
        Organizers of concerts, theaters, festivals, as well as music clubs and
        bars where music events take place on a regular basis, we provide the
        opportunity to add a music event (concert, festival, party) to our
        database free of charge.
      </p>
    </section>
  );
};

export default Contact;
