"use client";
import { CTA, Footer, Navbar } from "@/components";
import "../../../../styles/swiper-about.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Import React State
import React, {useState, useEffect} from "react";

// Import React Router
import { usePathname } from "next/navigation";

// Import Data Types Property of Member Division
import Profile from "../../../../data/divisionData";

// Import Member Division Card
import CardMember from "../../../../components/CardDivision";

// About Page
const Division = (props: any) => {
  const pathName = usePathname();
  const pathArray = pathName.split('/');
  const lastEndPoint = pathArray[pathArray.length - 1];
  const divisionName = formatEndpointText(lastEndPoint);

  const [profiles, setProfiles] = useState<Profile[]>([]);
  
  // Fetch Data from API
  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log("Fetching data...");

        const response = await fetch("https://cors-proxy-infinityfree.vercel.app/api/members");
        const responseData = await response.json();

        console.log("Response status:", response.status);

        const MembersData = responseData.data.map((item: any) => ({
          img: item.image,
          name: item.name,
          position: item.position,
          linkedin: item.linkedin,
          instagram: item.instagram
        }));
  
        setProfiles(MembersData);
      }
      catch(error) {
        console.error("Error fetching data from API : ", error);
      }
    };

    fetchData(); 
  }, []);

  // Setting Layout Card
  const renderCards = () => {
    const cardsPerRow = [2, 4, 4];
    let currentIndex = 0;
    
    return cardsPerRow.map((numCards, rowIndex) => {
      const rowCards = profiles.slice(currentIndex, currentIndex + numCards)
      currentIndex += numCards;

      return (
        <div key={rowIndex} className="flex lg:justify-center lg:items-centers lg:flex-row xsm:flex-col xxsm:flex-col">
          {rowCards.map((profile) => (
            <div className="lg:mx-0 xsm:mx-auto xxsm:mx-auto">
              <CardMember
               img={`https://cors-proxy-infinityfree.vercel.app/uploads/${profile.img}`}
               name={profile.name}
               position={profile.position}
               linkedin={profile.linkedin}
               instagram={profile.instagram}
               />
            </div>
          ))}
        </div>
      );  
    });
  };

  return (
    <main className="h-full">
      {/* Navbar */}
      <Navbar active="About Us" isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col w-full h-full lg:pt-[100px] xsm:pt-[80px] xxsm:pt-[50px] px-5 py-96 justify-center xsm:items-center xxsm:items-center relative bg-primary z-30">
        <h1 className="font-bold text-white pt-14 lg:text-5xl xsm:text-4xl xxsm:text-3xl">
          {divisionName}
        </h1>
        <p className="text-gray text-sm leading-7 lg:pt-8 xsm:pt-7 xxsm:pt-6 max-w-[600px] mx-auto text-center">
          {props.description} 
        </p>
        <br />
      </section>

      {/* Card */}
      <div className="flex flex-col bg-zinc-100">
        <div className="flex flex-col -mt-[380px] z-40">
          {renderCards()}
        </div>
        <br /><br />
      </div>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  )
};

// Change Format of Endpoint to Uppercase
const formatEndpointText = (endpoint: any) => {
  return endpoint.split("-").map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

Division.defaultProps = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
}

export default Division;