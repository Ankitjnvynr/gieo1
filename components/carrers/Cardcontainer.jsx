import React from 'react';
import './Cardcontainer.css';

const CardContainer = () => {
  
  const jobOpenings = [
    {
      department: 'Engineering',
      title: 'Frontend Developer',
      description: 'We are looking for a skilled Frontend Developer to join our team and help build responsive, user-friendly web applications.',
      requirements: ['3+ years of React experience', 'Proficient in JavaScript/TypeScript', 'Familiarity with CSS preprocessors', 'Bachelor\'s degree in CS or related field']
    },
    {
      department: 'Engineering',
      title: 'Backend Engineer',
      description: 'Join our backend team to develop scalable microservices and APIs that power our platform.',
      requirements: ['5+ years of Node.js/Python/Java', 'Experience with database design', 'Knowledge of cloud services (AWS/GCP)', 'Strong problem-solving skills']
    },
    {
      department: 'Design',
      title: 'UX Designer',
      description: 'Create intuitive and beautiful user experiences for our products through research, prototyping, and testing.',
      requirements: ['Portfolio demonstrating UX skills', '3+ years in product design', 'Figma/Sketch proficiency', 'Understanding of user research methods']
    },
    {
      department: 'Marketing',
      title: 'Digital Marketing Specialist',
      description: 'Develop and execute digital marketing campaigns to increase brand awareness and customer acquisition.',
      requirements: ['2+ years digital marketing experience', 'Google Ads/Facebook Ads expertise', 'Analytics skills (Google Analytics)', 'Content creation ability']
    },
    {
      department: 'Sales',
      title: 'Account Executive',
      description: 'Build relationships with potential clients and close deals to drive company revenue growth.',
      requirements: ['Proven sales track record', 'Excellent communication skills', 'Ability to understand customer needs', 'Experience in B2B sales']
    },
    {
      department: 'Human Resources',
      title: 'HR Business Partner',
      description: 'Support our growing team with talent acquisition, employee relations, and organizational development.',
      requirements: ['5+ years HR experience', 'Knowledge of employment laws', 'Strong interpersonal skills', 'Recruitment expertise']
    },
    {
      department: 'Product',
      title: 'Product Manager',
      description: 'Lead product development from conception to launch, working cross-functionally with engineering, design, and marketing.',
      requirements: ['3+ years product management', 'Technical background', 'Data-driven decision making', 'Excellent prioritization skills']
    },
    {
      department: 'Data Science',
      title: 'Data Analyst',
      description: 'Turn data into insights that drive business decisions through analysis, visualization, and reporting.',
      requirements: ['SQL proficiency', 'Experience with BI tools', 'Statistical knowledge', 'Python/R skills preferred']
    },
    {
      department: 'Customer Support',
      title: 'Support Specialist',
      description: 'Provide exceptional support to our customers through various channels and help improve our products.',
      requirements: ['2+ years customer service', 'Technical aptitude', 'Patience and empathy', 'Problem-solving skills']
    },
    {
      department: 'Operations',
      title: 'Operations Manager',
      description: 'Optimize our business operations to improve efficiency and reduce costs across the organization.',
      requirements: ['5+ years operations experience', 'Process improvement skills', 'Analytical mindset', 'Leadership ability']
    },
    {
      department: 'Finance',
      title: 'Financial Analyst',
      description: 'Analyze financial data, prepare reports, and help guide the company\'s financial strategy.',
      requirements: ['Accounting/finance degree', 'Excel modeling skills', 'Attention to detail', '2+ years relevant experience']
    },
    {
      department: 'Engineering',
      title: 'DevOps Engineer',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines to support rapid development.',
      requirements: ['AWS/GCP experience', 'Containerization knowledge', 'Infrastructure as code', 'Monitoring/logging tools']
    },
    {
      department: 'Marketing',
      title: 'Content Writer',
      description: 'Create compelling content for our website, blog, and marketing materials to engage our audience.',
      requirements: ['Writing portfolio', 'SEO knowledge', 'Research skills', 'Ability to simplify complex topics']
    },
    {
      department: 'Engineering',
      title: 'QA Engineer',
      description: 'Ensure our products meet quality standards through manual and automated testing processes.',
      requirements: ['Testing methodologies', 'Automation tools', 'Bug tracking systems', 'Attention to detail']
    },
    {
      department: 'Legal',
      title: 'Corporate Counsel',
      description: 'Provide legal guidance on contracts, compliance, and corporate matters to support business operations.',
      requirements: ['JD and bar admission', '3+ years corporate law', 'Contract drafting skills', 'Business acumen']
    },
    {
      department: 'IT',
      title: 'Systems Administrator',
      description: 'Maintain our internal IT infrastructure and provide technical support to employees.',
      requirements: ['Network administration', 'Windows/Linux systems', 'Security best practices', 'Troubleshooting skills']
    }
  ];

  return (
    <div className="jobs-container">
      <h2 className="section-title">Current Job Openings</h2>
      <p className="section-subtitle">Join our growing team of talented professionals</p>
      
      <div className="card-grid">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <div className="card-header">
              <span className="department-badge">{job.department}</span>
              <h3 className="job-title">{job.title}</h3>
            </div>
            <div className="card-body">
              <p className="job-description">{job.description}</p>
              <div className="requirements-section">
                <h4 className="requirements-title">Requirements:</h4>
                <ul className="requirements-list">
                  {job.requirements.map((requirement, i) => (
                    <li key={i} className="requirement-item">{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-footer">
              <button className="apply-button">Apply Now</button>
              <span className="job-type">Full-time</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;