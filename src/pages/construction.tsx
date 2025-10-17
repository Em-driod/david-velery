
const Construction = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Construction</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/dom3.png" alt="Construction" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            Our construction services are second to none. We have a team of experienced professionals who are dedicated to providing the highest quality workmanship. We specialize in a wide range of construction services, including residential and commercial construction, remodeling, and renovations.
          </p>
          <p className="text-lg mb-4">
            We are committed to providing our clients with the best possible experience. We work closely with our clients to ensure that their vision is brought to life. We are dedicated to completing projects on time and within budget.
          </p>
          <p className="text-lg">
            If you are looking for a reliable and experienced construction company, look no further. Contact us today to learn more about our services and to get a free estimate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Construction;
