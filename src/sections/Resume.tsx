import React from 'react';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

export const Resume: React.FC = () => {
  const timeline = [
    {
      icon: <Briefcase size={20} />,
      title: 'Graphic Design Intern',
      company: 'InnovateEx',
      period: 'Mar 2024 - Present',
      description: 'Designed the official company logo and created event brochures, posters, and digital content for both offline and online events. Played a key role in building brand visibility by developing visually appealing assets and running awareness campaigns across multiple platforms. Successfully increased event reach and engagement through strategic design and cross-platform promotions'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Freelance Graphic Designer',
      company: 'Self-employed',
      period: 'Jan 2024 - Present',
      description: 'Designing custom visuals tailored to client needs across industries such as event management, personal branding, and social media. Delivering high-quality logos, posters, and reels while managing client communication and revisions independently'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Head of Administration',
      company: 'VRC Grands Pvt. Ltd',
      period: 'Aug 2024 - Jan 2025',
      description: 'Oversaw administrative and creative coordination for large-scale events. Directed the visual design team, developed brand assets, and managed promotional campaigns across digital platforms, contributing to successful execution of high-impact events like Mirage 2024 ft. Paradox and Priyanshi Srivastava.'
    },
    {
    icon: <Briefcase size={20} />,
      title: 'Chief Executive Officer',
      company: 'CodingBlocks LPU',
      period: 'Aug 2024 - Jan 2025',
      description: 'Spearheaded organizational strategy and led a multidisciplinary team to foster a culture of innovation and collaboration. Supervised event execution, branding initiatives, and digital campaigns, expanding the club’s presence and engagement within the university ecosystem.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Design & Events Lead',
      company: 'CodingBlocks LPU',
      period: 'Feb 2024 - Aug 2024',
      description: 'Directed all design and event-related activities. Managed a team of designers, developed branding materials, and coordinated logistics for high-visibility campus events. Played a key role in scaling up the club’s outreach and visual identity.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Graphic Design Team Member',
      company: 'CodingBlocks LPU',
      period: 'Sep 2023 - Feb 2024',
      description: 'Contributed to the design team by creating posters, reels, banners, and digital content for campus events. Gained hands-on experience in branding, visual storytelling, and collaborative content creation under senior mentorship.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'B.Tech in Computer Science',
      company: 'Lovely Professional University',
      period: '2023 - Present',
      description: 'Pursuing a Bachelor degree in Computer Science Specialization in Machine Learning with a keen focus on software development and visual communication. Exploring interests in UI/UX design, creative coding, and multimedia project development alongside academic coursework.'
    },
  ];

  return (
    <section id="resume" className="section bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
  <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
  <div
    className="absolute bottom-10 left-5 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
    style={{ animationDelay: '2s' }}
  ></div>
</div>
      <div className="container-custom">
        <h3 className="section-subtitle text-blue-600">My Resume</h3>
        <h2 className="section-title text-white">Education & Experience</h2>
        
        <div className="mt-12 mb-12 max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${index === timeline.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-12 bg-blue-600 text-white p-2 rounded-full">
                  {item.icon}
                </div>
                <div className="flex items-center text-sm text-blue-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 ">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center z-10 relative">
          <p className="text-white mb-6 text-center max-w-2xl">
            Want to know more about my background and skills? 
            Download my full resume to see my complete experience, education, and skill set.
          </p>
          <a 
            href="/Samanvay-Gupta-Resume.pdf" 
            download 
            className="btn btn-primary flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download Full Resume</span>
          </a>
          <p className="text-sm text-white mt-4">PDF format, 235kb</p>
        </div>
        
        
      </div>
    </section>
  );
};