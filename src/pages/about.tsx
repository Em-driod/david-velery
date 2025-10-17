

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/path/to/your/image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            Welcome to our company! We are a team of passionate individuals dedicated to providing the best services in the industry. Our mission is to help our clients achieve their goals by delivering innovative and effective solutions.
          </p>
          <p className="text-lg mb-4">
            Our team has years of experience in their respective fields, and we are constantly learning and growing to stay ahead of the curve. We believe in collaboration, transparency, and building long-lasting relationships with our clients.
          </p>
          <p className="text-lg">
            We are proud of the work we do and the impact we have on our clients' businesses. We are always looking for new challenges and opportunities to make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
