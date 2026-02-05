import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, FileText, Award, Briefcase } from 'lucide-react';

export const CVPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
          <FileText className="w-10 h-10 text-warm-accent" />
          Curriculum Vitae
        </h1>
        <p className="text-xl text-warm-text-secondary leading-relaxed">
          T. Dylan Daniel • Consciousness Researcher • Web3 Builder
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-warm-accent" />
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Ph.D. Student in Cognition & Cognitive Neuroscience</h3>
              <p className="text-warm-text-secondary mb-2">Texas Tech University • Current</p>
              <p className="text-warm-text-secondary text-sm">Dr. Marshall's Integrated Cognitive Studies (ICS) Lab</p>
            </div>
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Master of Arts in Applied Philosophy & Ethics</h3>
              <p className="text-warm-text-secondary mb-2">Texas State University • 2015</p>
            </div>
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Bachelor of Arts in Philosophy</h3>
              <p className="text-warm-text-secondary mb-2">Southwestern University • 2008</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-warm-accent" />
            Research Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Graduate Research Assistant</h3>
              <p className="text-warm-text-secondary mb-2">Integrated Cognitive Studies Lab, Texas Tech University</p>
              <p className="text-warm-text-secondary text-sm mb-3">Dr. Marshall's Lab</p>
              <ul className="text-warm-text-secondary space-y-1 text-sm list-disc list-inside">
                <li>Investigating cognitive effort allocation and facial emotion recognition</li>
                <li>Developing experimental paradigms for consciousness research</li>
                <li>Applying computational models to cognitive phenomena</li>
              </ul>
            </div>
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Director of R&D</h3>
              <p className="text-warm-text-secondary mb-2">Zeta Biolongevity</p>
              <p className="text-warm-text-secondary text-sm mb-3">2018-2019</p>
              <ul className="text-warm-text-secondary space-y-1 text-sm list-disc list-inside">
                <li>Developed bioelectric field theory of chronic disease</li>
                <li>Led R&D initiatives for biotech applications of bioelectric fields</li>
                <li>Conducted research on bioelectric field applications in healthcare</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-warm-accent" />
            Publications
          </h2>
          <div className="space-y-4">
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Books</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-warm-text-secondary font-medium">INEVITABLE: Distributed Cognition & Network Superintelligence</p>
                  <p className="text-warm-text-secondary text-sm mb-2">Whitney Morgan Media • 2024 • ISBN: 9781962668088 (Alexandria), 1962668096 (Amazon)</p>
                  <div className="flex gap-2">
                    <a href="https://www.alexandriabooks.com/collection/inevitable" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover text-sm transition-colors">Alexandria Books</a>
                    <span className="text-warm-text-secondary">•</span>
                    <a href="https://www.amazon.com/Inevitable-Distributed-Cognition-Network-Superintelligence/dp/1962668096" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover text-sm transition-colors">Amazon</a>
                  </div>
                </div>
                <div>
                  <p className="text-warm-text-secondary font-medium">Formal Dialectics</p>
                  <p className="text-warm-text-secondary text-sm mb-2">Cambridge Scholars Publishing • 2018 • ISBN: 1527515753 • 212 pages</p>
                  <a href="https://www.amazon.com/Formal-Dialectics-Thomas-Dylan-Daniel/dp/1527515753/ref=sr_1_2?crid=8THHQYI2YNUF&dib=eyJ2IjoiMSJ9.aCiKogAMu-hkLwkNf4UiCampCekdmk7sTd6Qa645HDcGfQ-Ed5swOPU4l8htJ0LvxTU4eXau47kE6m4gHmO7xpijbwYBMJiKtSHcQedJAjw1N0YLeApcJk7Vr7T3-x9tf43SRBvb663hj98Yu80RDhLnfyxdJa-w9QkH1W6YrjWIafs9ATk8jNP7uOo7QCsxuXOF3Ut8nMFExmhbI9kM85Rd-YyWu3zNGlu36srPWKs.6HZ5vW5YZeZDduUYCebijnCJ8MiV1dTBRihvcw8l4ew&dib_tag=se&keywords=formal+dialectics&qid=1759793018&sprefix=formal+dialectics%2Caps%2C127&sr=8-2" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover text-sm transition-colors">Amazon</a>
                </div>
              </div>
            </div>
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold text-lg mb-2">Academic Publications</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-warm-text-secondary font-medium">"The Lexicultural Propagation of Concepts" (Chapter 2)</p>
                  <p className="text-warm-text-secondary text-sm">In: Philosophy of Language by Brian Thomas • Newcastle upon Tyne: Cambridge Scholars Publishing • <a href="https://www.amazon.com/Philosophy-Language-Brian-Thomas/dp/1443880426" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-1 transition-colors">View Book</a></p>
                </div>
                <div>
                  <p className="text-warm-text-secondary font-medium">"The Need for a Standard Index of Vehicular Pollution Intensity in the United States"</p>
                  <p className="text-warm-text-secondary text-sm">OGEL 6 (2015), Environment • <a href="https://www.ogel.org/article.asp?key=3591" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-1 transition-colors">View Article</a></p>
                </div>
                <div>
                  <p className="text-warm-text-secondary font-medium">Philosophy Now Magazine Contributions</p>
                  <div className="text-warm-text-secondary text-sm mt-2 space-y-2">
                    <div>• Biography of Pierre Hadot • <a href="https://philosophynow.org/issues/113/Pierre_Hadot_1922-2010" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-1 transition-colors">View Article</a></div>
                    <div>• Biography of Hermann von Helmholtz • <a href="https://philosophynow.org/issues/129/Hermann_von_Helmholtz_1821-1894" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-1 transition-colors">View Article</a></div>
                    <div>• "The Plague and the Plague" • <a href="https://philosophynow.org/issues/138/The_Plague_and_The_Plague" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-1 transition-colors">View Article</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-warm-accent" />
            Technical Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-3">Research & Analysis</h3>
              <ul className="text-warm-text-secondary space-y-1 text-sm">
                <li>• Experimental design and methodology</li>
                <li>• Statistical analysis and data modeling</li>
                <li>• Facial emotion recognition systems</li>
                <li>• Computational cognitive modeling</li>
              </ul>
            </div>
            <div className="bg-warm-bg rounded-lg p-6">
              <h3 className="text-warm-accent font-semibold mb-3">Software Development</h3>
              <ul className="text-warm-text-secondary space-y-1 text-sm">
                <li>• React, TypeScript, Node.js</li>
                <li>• Statistical data analysis in R</li>
                <li>• Web3 and blockchain technologies</li>
                <li>• Open source development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <h2 className="text-2xl font-bold font-display text-warm-text mb-4">Contact Information</h2>
          <div className="text-warm-text-secondary">
            <p className="mb-2"><span className="font-semibold">Email:</span> thomas.d.daniel@ttu.edu</p>
            <p className="mb-2"><span className="font-semibold">GitHub:</span> <a href="https://github.com/ipfsnut" target="_blank" rel="noopener noreferrer" className="text-warm-accent hover:text-warm-accent-hover ml-2 transition-colors">github.com/ipfsnut</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
