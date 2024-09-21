/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-16 space-y-8 lg:space-y-0"> {/* Increased horizontal space */}
        
        {/* Introduction Section */}
        <section id="introduction" className="lg:w-1/2 space-y-4"> {/* Half width on large screens */}
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-left">
            Introduction
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            <strong>“A TEDx event</strong> is a local gathering where live TED-like talks and performances
            are shared with the community. TEDx events are fully planned and coordinated independently, 
            on a community-by-community basis” (TED).
          </p>
          <p className="text-lg leading-relaxed text-justify">
            TEDx events are all about promoting speakers and community members who have
            valuable ideas to share. Operating under the umbrella of the TED organization,
            TEDx events share the same core values: sparking conversation and sharing innovative, 
            well-thought-out ideas with the world.
          </p>
        </section>

        {/* TEDx Granite Bay High School Youth Section */}
        <section id="tedx-gbhs-youth" className="lg:w-1/2 space-y-4"> {/* Half width on large screens */}
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-left">
            TEDx Granite Bay High School Youth
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            Our event, the first at Granite Bay High School, focuses on empowering youth to believe 
            in themselves as changemakers and innovators. The reason the very name of this event includes 
            the youth tag is because of our focus on ensuring that youth voices, across a wide range of 
            fields & ideas, are heard and appreciated in the community.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            With our theme of <strong>"Light the Spark"</strong>, we hope to inspire youth to put their ideas out into the community 
            to really ignite change and encourage others to do so as well. By showcasing speakers interested 
            in vastly different subject areas, our event highlights the imagination and creativity of young minds, 
            giving students a platform to deliver their take on TED’s slogan: <em>"ideas worth spreading."</em>
          </p>
          <p className="text-lg leading-relaxed text-justify">
            “Youth events are one of our most creative TEDx event types, since they are organized by or catered toward 
            young people. As you might guess, these events are all about imagination and having fun” (TED).
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;