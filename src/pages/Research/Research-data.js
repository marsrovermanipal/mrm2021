const data = [
  {
    id: 19,
    title: 'Performance evaluation of deep segmentation models on Landsat-8 imagery',
    img: "/research/landsat8.png",
    event: "Tackling Climate Change with Machine Learning: workshop at NeurIPS 2022",
    author: "Aditya Kasliwal, Akshat Bhandari, Sanchit Singhal, Sriya Rallabandi, Pratinav Seth",
  },
  {
    id: 1,
    title: 'BERT based Transformers lead the way in Extraction of Health Information from Social Media',
    img: "/research/bert1.png",
    event: "NAACL,2021",
    author: "Kumud Lakara, Siddarth R, Abhiraj Tiwari, Saisha Kashyap, Parthivi Choubay,Nishesh Singh, Sahil Khose",
  },
  {
    id: 23,
    title: 'Efficient Energy balance in Heterogeneous Swarm',
    img: "/research/energybalance.png",
    event: "ICRAIE 2022 IEEE",
    author: "Ashish Sharma, Harshil Bhatt",
  },
  {
    id: 22,
    title: 'UATTA-ENS: Uncertainty Aware Test Time Augmented Ensemble for PIRC Diabetic Retinopathy Detection',
    img: "/research/UATTA.jpg",
    event: "Medical Imagining Meets NeurIPS 22",
    author: "Pratinav Seth, Adil Khan, Ananya Gupta, Saurabh Kumar Mishra, Akshat Bhandari",
  },

  {
    id: 20,
    title: 'A Review on Clustering and Optimization Techniques',
    img: "/research/cluster.png",
    event: "Applied Soft Computing Journal",
    author: "Diya Mehta, Ashish Sharma, Ritika Ravichandran",
  },
 
  {
    id: 2,
    title: 'Weed Density and Distribution Estimation for Precision Agriculture using Semi-Supervised Learning',
    img:
      '/research/weeddensity.jpeg',
    event: "IEEE Access,2021",
    author: "Shantam Shorewala, Siddarth R, Armaan Ashfaque, Ujjwal Verma",
  }, {
    id: 3,
    title: 'Wireless Sensor Network for Optimisation of Search and Rescue Management in Floods',
    img:
      '/research/wireless.jpg',
    event: "IEEE Conecct,2021",
    author: "Harshil Bhatt, Pranesh G, Samarth Shankar, Shriyash Haralikar",
  },
  {
    id: 21,
    title: 'Review on Intelligent Tuning Methods of PID Controller',
    img: "/research/pid.png",
    event: "Non-Linear Dynamics Journal",
    author: "Ritika Ravichandran, Ashish Sharma, Diya Mehta",
  },
  {
    id: 16,
    title: 'Evaluating Predictive Uncertainty and Robustness Distributional Shift Using Real World Data',
    img:'/research/uncertainity.jpg',
    event: "BDL Workshop, NeurIPS 2021",
    author: "Kumud Lakara, Akshat Bhandari, Pratinav Seth, Ujjwal Verma",
  },
  {
    id: 17,
    title: 'Increasing Phyiscal Layer Security through Hyperchaos in VLC Systems',
    img:
      '/research/physicallayersecurity.png',
    event: "SN Computer Science",
    author: "Ashish Sharma, Harshil Bhatt",
  }, 
  {
    id: 4,
    title: 'Autonomous Control of Closed Chain Five Bar Active Suspension via Deep Reinforcement Learning',
    img:
      '/research/fivebar1.png',
    event: "Under Review",
    author: "Nishesh Singh, Siddarth R, Jyotishka Duttagupta, Abhishek Sankar,Leander Stephen D'souza, Sanjay Singh",
  }, 
  {
    id: 5,
    title: "Design and Analysis of Underactuated linear gripper for unstructured environments based on Chebyshev's Lambda Mechanism",
    img:
      '/research/gripper.jpg',
    event: "Manipal Research Colloquium, Manipal Academy of Higher Education, April 2018",
    author: "K S Dhankhar, Md Suliaman, Shuvadeep Sarkar and Siril D Teja",
  },
  {
    id: 6,
    title: 'Comparative Analysis of Industrial Grade Parallel Gripper and Linear Gripper',
    event: "International Society of Automation, Bangalore chapter",
    author: "K.S. Dhankhar and D.K. Rajamani",
    img: "/research/imag11.png",
  },

  {
    id: 24,
    title: 'Fiber Optic Analysis of Different Materials and Geometry for Sensor Application',
    img: "/research/fibreoptic.png",
    event: "ICNMS 2023",
    author: "Ashish Sharma, Tanvi Agrawal",
  },
  {
    id: 25,
    title: 'Multiple Channel Network Scheme employing Hybrid FSO and NB-PLC for smart city environment',
    img: "/research/multiplechannel.png",
    event: "OSA Applied Optics",
    author: "Ashish Sharma, Pranav Huilgol",
  },
  {
    id: 18,
    title: 'Design and Analysis of a Lambda Based Suspension for Space Exploratory Misions',
  
    event: "25th International Mars Society Convention",
    author: "Akhilesh Jhawar, Saurabh Chaughule, Mohammed A. Sulaiman",
  }, 
  {
    id: 9,
    title: "Design and Analysis of Underactuated gripper using Chebyshev's lambda mechanism with slip preventive strategy for fragile object",
    event: "ICAARS 2018",
    author: "Siril D Teja, Md Suliaman and Kulpreet Singh Dhankar",
  },
  {
    id: 7,
    title: "Design and Analysis of Mars rover suspension based on Chebyshev's Lambda Mechanism",
    event: "Manipal Research Colloquium, Manipal Academy of Higher Education, April 2018",
    author: "K S Dhankhar, Md Abdul Salman,Md Sulaiman and Shuvadeep Sarkar",
  }, 
  {
    id: 8,
    title: 'The Response of Prokaryotic Lifeforms to Environmental Stimuli',
    event: "Manipal Research Colloquium 2018, Manipal Academy of Higher Education, April 2018 ",
    author: "V.H. Dhongade, P.K. Debata, J. John and S. Kapoor",
  },
  {
    id: 10,
    title: "Design of Linear Gripper for Unstructured Environment",
    event: "International Society of Automation, Bangalore chapter",
    author: "K.S. Dhankhar, D.K. Rajamani, E.D. Pitichika and Y.S. Upadhyaya",
  },
  {
    id: 11,
    title: 'Design and Development of Planetary Exploration Rover for Unstructured Terrain"',
    event: "18th National and 3rd International conferences on Machines and Mechanisms (iNAComm 2017), Bhabha Atomic Research Center (BARC), Mumbai,India",
    author: "K.S. Dhankhar, D.K. Rajamani, D. Bansal, S. Shorewala, E.D. Pitichika and Y.S. Upadhyaya",
  },
  {
    id: 12,
    title: 'Search for life in 20 minutes',
    event: "Symbiot 2017 by the biotechnology department, Manipal Institute of Technology, Manipal Academy of Higher Education",
    author: "J. Samal, J. Joel, P.C. Nair, P.K. Debata, V. Kuchimanchi, R. Jaiswal and A.M. Rao",
  },
  {
    id: 13,
    title: 'Microscopic Observation of Life in an Unknown Biome Using Negative Staining',
    event: "A suitable staining agent develops contrast between the specimen and its background. To peek into this microscopic regime, simple staining protocol termed Negative staining because this staining practice dominates over all other complex staining techniques like differential staining, radioactive dyes and other methodologies including Nucleic Acid isolation, sequencing etc. because of its low-cost, qualitative analyses, simplicity and reliability in providing out results within a short time frame.",
    author: "J. John and P.K. Debata",
  }, 
  {
    id: 14,
    title: 'The Six Fundamental Elements to Promote the Generation of Life',
    event: "Oparin-Haldane hypothesis, the chemical origin of life, suggests that organic molecules were formed from simple, elemental inorganic molecules.Microorganisms have the ability to extract energy from organic molecules and from sunlight, which is utilized to make a vast array of more complex biomolecules by consuming naturally occurring elements and compounds. This case study focuses on techniques used in estimating the precursors that makes up the biomolecules, thereby confirming the presence/possibility of life within the biome.",
    author: "J. Joel and P.K. Debata",
  }, 
  {
    id: 15,
    title: "Process and Elements in Formation of Biomolecules",
    event: "Most life forms present on Earth today, as we know it, are fundamentally made of six elements which are Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorous and Sulphur (CHNOPS). These elements proved crucial not only for the formation of biomolecules, but also for the evolution of life. This study establishes the importance of the six basic elements which constitute the foundation of life and to understand how they function together to create complex biomolecules as explained in the Miller-Urey Experiment.",
    author: "P.C. Nair",
  },

]

export default data


