import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import CourseCard from './Coursecard'; // Assuming CourseCard component for displaying course details
import SchoolIcon from '@material-ui/icons/School';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

const FeatureCard = ({ icon, title, description }) => {
  const classes = useStyles();
  const animationProps = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
  });

  return (
    <Grid item xs={12} sm={6} md={5} >
      <div className={classes.featureCard}>
        <animated.div style={animationProps}>{icon}</animated.div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Grid>
  );
};

const Home = () => {
  const features = [
    {
      icon: <SchoolIcon style={{fontSize:'5rem', marginLeft:'40px'}}/>, // Material-UI School icon
      title: 'Expert Instruction',
      description:
        'Access high-quality courses taught by expert instructors in various domains. Learn from industry professionals with real-world experience.',
    },
    {
      icon: <DesktopMacIcon style={{fontSize:'5rem', marginLeft:'40px'}}/>, // Material-UI DesktopMac icon
      title: 'Flexible Learning',
      description:
        'Learn at your own pace from anywhere, anytime. Our platform offers flexible learning options to fit your busy schedule.',
    },
    {
      icon: <SchoolOutlinedIcon style={{fontSize:'5rem', marginLeft:'40px'}}/>, // Material-UI SchoolOutlined icon
      title: 'Skill Development',
      description:
        'Gain valuable skills and knowledge to advance your career. Our courses are designed to help you achieve your learning goals and succeed.',
    },
    {
      icon: <PeopleIcon style={{fontSize:'5rem', marginLeft:'40px'}} />, // Material-UI People icon
      title: 'Community Support',
      description:
        'Join a supportive community of learners and professionals. Interact with peers, share experiences, and collaborate on projects.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to EnlightenU</h1>
        <p>Start your learning journey today!</p>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>

        <div className="features">
          <div className="feature">
            <h2>Featured Courses</h2>
            <div className="featured-courses flex flex-wrap">
              {/* Display featured courses */}
              <CourseCard title="Machine Learning Fundamentals" />
              <CourseCard title="Web Development Bootcamp" />
              <CourseCard title="Introduction to Data Science" />
            </div>
          </div>
          <div className="feature">
            <h2>Track Your Progress</h2>
            <p>Set your learning goals and track your progress with our interactive widgets.</p>
          </div>

          {/* About Us Section */}
          <div className="feature">
            <h2>About Us</h2>
            <p>EnlightenU is dedicated to providing high-quality online education to individuals worldwide. Our mission is to empower learners to achieve their goals and advance their careers through accessible and affordable learning resources.</p>
          </div>

          {/* Benefits Section */}
          <div className="feature">
            <h2>Benefits</h2>
            <ul>
              <li>Access to a wide range of courses in various domains.</li>
              <li>Learn at your own pace from anywhere, anytime.</li>
              <li>Expert instructors and industry-relevant curriculum.</li>
              <li>Interactive learning tools and resources.</li>
              <li>Community support and networking opportunities.</li>
            </ul>
          </div>
        </div>
        <div className="cta">
          <Link to="/courses" className="btn btn-primary">Explore All Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
