import React from 'react';

const timelineEvents = [
  {
    title: 'Company Establishment',
    description: 'BK Steel Trading Company was founded with a vision to become a leader in the steel industry, providing top-quality products and services.',
  },
  {
    title: 'Global Expansion',
    description: 'Successfully entered international markets, building strong partnerships and expanding our supply chain to meet global demands.',
  },
  {
    title: 'Industry Recognition',
    description: 'Recognized for excellence in steel trading, earning awards and certifications that highlight our commitment to quality and reliability.',
  },
  {
    title: 'Digital Transformation',
    description: 'Launched an advanced online platform, streamlining the quote and ordering process to enhance customer experience and operational efficiency.',
  },
];


function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className={`flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="flex-1">
              <div
                className={`p-6 bg-gray-900/50 rounded-lg ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">{event.year}</h3>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Timeline;