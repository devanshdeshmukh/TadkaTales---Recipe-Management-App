import React from "react";
import { FaUtensils, FaUserFriends, FaHeart, FaBookOpen } from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, icon: <FaBookOpen />, count: "1000+", label: "Recipes" },
    {
      id: 2,
      icon: <FaUserFriends />,
      count: "50K+",
      label: "Community Members",
    },
    { id: 3, icon: <FaHeart />, count: "100K+", label: "Recipe Saves" },
    { id: 4, icon: <FaUtensils />, count: "200+", label: "Expert Chefs" },
  ];

  const features = [
    {
      title: "Recipe Sharing",
      description:
        "Share your favorite recipes with our growing community of food enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3",
    },
    {
      title: "Cooking Tips",
      description:
        "Learn professional cooking techniques from experienced chefs around the world.",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3",
    },
    {
      title: "Community",
      description:
        "Connect with fellow food lovers and explore diverse culinary traditions.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3",
    },
  ];
  const cheef = [
    { name: "Nikhil rana" },
    { name: "Rohit kumar" },
    { name: "Sahil sharma" },
    { name: "Ankit singh" },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">
            Bringing People Together Through Food
          </h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            We're on a mission to make cooking accessible, enjoyable, and
            inspiring for everyone. Join our community of food lovers and share
            your culinary journey.
          </p>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-4 lg:p-8 text-center shadow-md border border-orange-100 "
            >
              <div className="text-orange-500 text-3xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-orange-800 mb-1">
                {stat.count}
              </div>
              <div className="text-orange-600">{stat.label}</div>
            </div>
          ))}
        </div>

       
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-orange-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-orange-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

  
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-6">
              Our Mission
            </h2>
            <p className="text-orange-700 mb-8">
              We believe that good food has the power to bring people together
              and create lasting memories. Our platform is designed to inspire
              creativity in the kitchen and foster a supportive community of
              food enthusiasts from all walks of life.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Join Our Community
            </button>
          </div>
        </div>

     
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-orange-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 flex-wrap  gap-8">
            {cheef.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-orange-100 flex justify-center items-center flex-col "
              >
                <div className=" lg:w-24 lg:h-24 flex flex-wrap mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt="Team member"
                    className="w-full h-full  object-cover"
                  />
                </div>
                <h3 className="font-bold text-orange-800">{member.name}</h3>
                <p className="text-orange-600 text-sm">Master Chef</p>
              </div>
            ))}
          </div>
        </div>



        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-orange-700 mb-8">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-100 text-orange-800 px-6 py-3 rounded-lg hover:bg-orange-200 transition duration-300">
              Contact Us
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
