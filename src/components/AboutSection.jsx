import { Award, Wrench, Truck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are?</h2>
          <div className="w-24 h-1 bg-[#c54513] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 25 years of experience in the sewing machine industry, we are Chennai's most trusted
            provider of premium sewing machines and repair services. We specialize in both household and
            industrial machines, offering comprehensive solutions for all your sewing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c54513] text-white rounded-full mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Authorized Dealer</h3>
            <p className="text-gray-600">
              Official authorized dealer for all major brands including Usha, Singer, Jack, and more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c54513] text-white rounded-full mb-4">
              <Wrench size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Repairs</h3>
            <p className="text-gray-600">
              Our certified technicians provide reliable repair and maintenance services for all types of machines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c54513] text-white rounded-full mb-4">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Free Installation</h3>
            <p className="text-gray-600">
              We offer free installation and demonstration for all machines purchased from our store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
