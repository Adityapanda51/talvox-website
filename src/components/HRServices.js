import React from "react";
import "../Styles/HRServices.css";

const HRDetailPage = ({ onClose }) => {
  return (
    <div className="hr-detail-page-container">
       <button onClick={onClose} className="close-button">Close</button>

      <div className="hr-details-content">
        <h1>HR Services</h1>
        <p>
          At Talvox, we understand that people are the most valuable asset of
          any organization. Our HR services are designed to help businesses
          attract, retain, and develop top talent while ensuring compliance and
          fostering a positive workplace culture. Whether you're a startup or a
          growing enterprise, our comprehensive HR solutions are tailored to
          meet your unique needs.
        </p>
        <h3>Our HR Solutions</h3>

        <div>
          <h4>1. Talent Acquisition</h4>
          <p>
            Finding the right talent is crucial for the success of your
            business. Talvox provides end-to-end recruitment services, from job
            posting and candidate sourcing to interviews and onboarding. We
            specialize in matching the best candidates with your company culture
            and job requirements, ensuring a perfect fit every time.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Executive Search</strong>
            </li>
            <li>
              <strong>Volume Hiring</strong>
            </li>
            <li>
              <strong>Internship Programs</strong>
            </li>
            <li>
              <strong>Remote Workforce Recruitment</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>2. Onboarding and Offboarding</h4>
          <p>
            A smooth onboarding process sets the tone for a positive employee
            experience. Talvox offers structured onboarding programs that
            integrate new hires quickly and effectively into your team.
            Similarly, our offboarding services ensure a respectful and
            compliant exit process.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Customized Onboarding Plans</strong>
            </li>
            <li>
              <strong>New Hire Orientation</strong>
            </li>
            <li>
              <strong>Exit Interviews</strong>
            </li>
            <li>
              <strong>Knowledge Transfer Support</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>3. Performance Management</h4>
          <p>
            Unlock the full potential of your workforce with our performance
            management services. We help you set clear goals, provide regular
            feedback, and implement performance appraisals that align with your
            company's objectives.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Goal Setting and Alignment</strong>
            </li>
            <li>
              <strong>Continuous Feedback Systems</strong>
            </li>
            <li>
              <strong>360-Degree Reviews</strong>
            </li>
            <li>
              <strong>Employee Development Plans</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>4. Employee Engagement and Retention</h4>
          <p>
            Engaged employees are more productive and loyal. Talvox offers
            strategies to boost employee engagement through recognition
            programs, surveys, and personalized career development plans. Our
            retention strategies focus on creating a positive work environment
            that encourages long-term commitment.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Employee Recognition Programs</strong>
            </li>
            <li>
              <strong>Engagement Surveys</strong>
            </li>
            <li>
              <strong>Career Pathing</strong>
            </li>
            <li>
              <strong>Work-Life Balance Initiatives</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>5. HR Compliance and Policy Management</h4>
          <p>
            Navigating the complex landscape of employment laws and regulations
            can be challenging. Talvox ensures that your business remains
            compliant with all relevant laws, reducing the risk of legal issues.
            We also help you create and maintain HR policies that reflect your
            company values.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Policy Development</strong>
            </li>
            <li>
              <strong>Regulatory Compliance</strong>
            </li>
            <li>
              <strong>Employee Handbook Creation</strong>
            </li>
            <li>
              <strong>HR Audits</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>6. Learning and Development</h4>
          <p>
            Investing in your employees' growth is essential for long-term
            success. Talvox offers customized training programs that enhance
            skills, knowledge, and leadership capabilities, ensuring your team
            is always prepared to meet new challenges.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Leadership Development</strong>
            </li>
            <li>
              <strong>Skill Enhancement Workshops</strong>
            </li>
            <li>
              <strong>E-Learning Platforms</strong>
            </li>
            <li>
              <strong>Mentorship Programs</strong>
            </li>
          </ul>
        </div>

        <div>
          <h4>7. Payroll and Benefits Administration</h4>
          <p>
            Managing payroll and benefits can be time-consuming and complex.
            Talvox simplifies the process by providing accurate and timely
            payroll services, along with comprehensive benefits administration,
            ensuring your employees are compensated fairly and enjoy the
            benefits they deserve.
          </p>
          <ul className="no-bullets">
            <li>
              <strong>Payroll Processing</strong>
            </li>
            <li>
              <strong>Tax Compliance</strong>
            </li>
            <li>
              <strong>Benefits Enrollment and Management</strong>
            </li>
            <li>
              <strong>Employee Assistance Programs</strong>
            </li>
          </ul>
        </div>

        <h3>Why Choose Talvox?</h3>
        <ul className="no-bullets">
          <li>
            <strong>Tailored Solutions:</strong> We understand that every
            company is unique. Our services are customized to meet your specific
            needs.
          </li>
          <li>
            <strong>Expert Guidance:</strong> With years of industry experience,
            our HR experts provide reliable advice and best practices.
          </li>
          <li>
            <strong>Technology-Driven:</strong> We leverage the latest HR
            technologies to streamline processes and enhance efficiency.
          </li>
          <li>
            <strong>People-Centric Approach:</strong> We prioritize the
            well-being and development of your employees, ensuring a motivated
            and engaged workforce.
          </li>
        </ul>

        <h3>Get in Touch</h3>
        <p>
          Ready to take your HR to the next level? Contact Talvox today to learn
          more about our services and how we can help your business succeed.
        </p>
      </div>
    </div>
  );
};

export default HRDetailPage;
