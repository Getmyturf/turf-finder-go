
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Star, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sports = () => {
  // Sample sports categories
  const sportsCategories = [
    {
      id: 1,
      name: "Football",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 24
    },
    {
      id: 2,
      name: "Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 18
    },
    {
      id: 3,
      name: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 15
    },
    {
      id: 4,
      name: "Tennis",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 12
    },
    {
      id: 5,
      name: "Badminton",
      image: "https://images.unsplash.com/photo-1626163105233-2c055008964a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 20
    },
    {
      id: 6,
      name: "Hockey",
      image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      turfsCount: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sports Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse turfs by your favorite sport. We have facilities for all major sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsCategories.map((sport) => (
            <Link key={sport.id} to={`/book-now?sport=${sport.name.toLowerCase()}`}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={sport.image} 
                    alt={sport.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-2xl font-bold mb-1">{sport.name}</h3>
                      <p className="text-white/80">{sport.turfsCount} turfs available</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find your sport?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We're constantly adding new sports and facilities. Let us know what you're looking for!
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sports;
