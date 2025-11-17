const WelcomeSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to Aaraam Properties
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are Mumbai's premier real estate agency, specializing in luxury properties
            across the city's most prestigious neighborhoods. With over two decades of experience,
            we help you find not just a house, but your perfect home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
