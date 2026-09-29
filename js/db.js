/**
 * TRIBALONE - Database Architecture & Master Seed Data
 * Ministry of Tribal Affairs (MoTA) - Problem Statement ID: 26238
 * Relational In-Memory Store with LocalStorage Persistence
 */

const DB_KEY = 'tribalone_master_db_v1';

export const initialData = {
  // Current session state
  isLoggedIn: false,
  loginRole: 'student',
  currentRole: 'student', // 'student' | 'parent' | 'admin' | 'verification' | 'institute'
  currentStudentId: 'ST202600124', // Arun Kumar
  currentLanguage: 'en', // 'en', 'hi', 'ta', etc.
  viewportMode: 'desktop', // 'mobile' | 'desktop'
  selectedStateFilter: 'ALL',

  // 1. Users Table
  users: [
    { id: 'USR001', role: 'student', name: 'Arun Kumar', email: 'arun.kumar.st26@gmail.com', mobile: '+91 94421 87654', studentId: 'ST202600124' },
    { id: 'USR002', role: 'student', name: 'Priya Kumar', email: 'priya.kumar.st26@gmail.com', mobile: '+91 94421 87655', studentId: 'ST202600125' },
    { id: 'USR003', role: 'parent', name: 'Ramesh Kumar', email: 'ramesh.kumar.theni@gmail.com', mobile: '+91 98421 12345', linkedStudentIds: ['ST202600124', 'ST202600125'] },
    { id: 'USR004', role: 'admin', name: 'Dr. Rajeshwar Singh', email: 'rajeshwar.singh@mota.gov.in', designation: 'Joint Secretary (Scholarships), MoTA', officerId: 'MOTA-OFF-042' },
    { id: 'USR005', role: 'verification', name: 'S. Meenakshi', email: 'meenakshi.s@tne-district.gov.in', designation: 'State Nodal Verification Officer, Tamil Nadu', officerId: 'SVO-TN-108' }
  ],

  // 2. Students Table (20+ students representing diverse states, categories & PVTG)
  students: [
    {
      id: 'ST202600124',
      name: 'Arun Kumar',
      gender: 'Male',
      dob: '2004-06-14',
      mobile: '+91 94421 87654',
      email: 'arun.kumar.st26@gmail.com',
      state: 'Tamil Nadu',
      district: 'Theni',
      category: 'ST',
      stSubTribe: 'Malayali ST',
      pvtg: false,
      pvtgTribe: null,
      institution: 'K. Ramakrishnan College of Engineering',
      institutionType: 'Autonomous Engineering College',
      aisheCode: 'C-25148',
      udiseCode: null,
      course: 'B.Tech Information Technology',
      courseLevel: 'Undergraduate',
      academicYear: '2026-2027',
      currentYear: '3rd Year',
      marksPercentage: 84.6,
      familyIncome: 250000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026TN88910',
      otrStatus: 'VERIFIED',
      apaarId: '9845-2147-3690',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 4512',
      bankName: 'State Bank of India',
      ifscCode: 'SBIN0001248',
      dbtSeeded: true,
      parentId: 'USR003',
      profileCompletion: 100,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'NEEDS REVIEW',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    {
      id: 'ST202600125',
      name: 'Priya Kumar',
      gender: 'Female',
      dob: '2010-09-22',
      mobile: '+91 94421 87655',
      email: 'priya.kumar.st26@gmail.com',
      state: 'Tamil Nadu',
      district: 'Theni',
      category: 'ST',
      stSubTribe: 'Malayali ST',
      pvtg: false,
      pvtgTribe: null,
      institution: 'Government Tribal Residential Higher Secondary School, Megamalai',
      institutionType: 'Government School',
      aisheCode: null,
      udiseCode: '33250100412',
      course: 'Secondary School',
      courseLevel: 'Secondary (Class 10)',
      academicYear: '2026-2027',
      currentYear: 'Class 10',
      marksPercentage: 88.2,
      familyIncome: 250000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026TN88911',
      otrStatus: 'VERIFIED',
      apaarId: '9845-2147-3691',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 9921',
      bankName: 'Indian Overseas Bank',
      ifscCode: 'IOBA0000412',
      dbtSeeded: true,
      parentId: 'USR003',
      profileCompletion: 100,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    {
      id: 'ST202600126',
      name: 'Birsa Soren',
      gender: 'Male',
      dob: '2003-11-15',
      mobile: '+91 97711 45210',
      email: 'birsa.soren@gmail.com',
      state: 'Jharkhand',
      district: 'Ranchi',
      category: 'ST',
      stSubTribe: 'Santhal',
      pvtg: false,
      pvtgTribe: null,
      institution: 'Birla Institute of Technology, Mesra',
      institutionType: 'Top Class Notified Institution',
      aisheCode: 'U-0275',
      course: 'B.Tech Computer Science',
      courseLevel: 'Undergraduate',
      academicYear: '2026-2027',
      currentYear: '2nd Year',
      marksPercentage: 91.4,
      familyIncome: 180000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026JH11245',
      otrStatus: 'VERIFIED',
      apaarId: '4412-8871-9023',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 6610',
      bankName: 'Punjab National Bank',
      ifscCode: 'PUNB0124500',
      dbtSeeded: true,
      parentId: null,
      profileCompletion: 95,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    {
      id: 'ST202600127',
      name: 'Mangal Marndi',
      gender: 'Male',
      dob: '2001-03-19',
      mobile: '+91 93380 66124',
      email: 'mangal.marndi.rs@iitkgp.ac.in',
      state: 'Odisha',
      district: 'Mayurbhanj',
      category: 'ST',
      stSubTribe: 'Ho',
      pvtg: false,
      pvtgTribe: null,
      institution: 'Indian Institute of Technology Kharagpur',
      institutionType: 'Institute of National Importance',
      aisheCode: 'U-0570',
      course: 'Ph.D. Material Sciences',
      courseLevel: 'Doctoral / Research',
      academicYear: '2026-2027',
      currentYear: '1st Year',
      marksPercentage: 86.8,
      familyIncome: 140000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026OD44120',
      otrStatus: 'VERIFIED',
      apaarId: '1120-7744-8891',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 7714',
      bankName: 'Canara Bank',
      ifscCode: 'CNRB0002148',
      dbtSeeded: true,
      parentId: null,
      netJrfQualified: true,
      netJrfRollNumber: 'UGC-NET-JRF-2025-ST-8812',
      profileCompletion: 100,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    {
      id: 'ST202600128',
      name: 'Ananya Naik',
      gender: 'Female',
      dob: '2002-08-10',
      mobile: '+91 98860 99412',
      email: 'ananya.naik@manipal.edu',
      state: 'Karnataka',
      district: 'Kodagu',
      category: 'ST',
      stSubTribe: 'Kuruba',
      pvtg: false,
      pvtgTribe: null,
      institution: 'University of Edinburgh (Offer Letter)',
      institutionType: 'Foreign University',
      aisheCode: null,
      course: 'M.Sc. Artificial Intelligence & Data',
      courseLevel: 'Postgraduate (Overseas)',
      academicYear: '2026-2027',
      currentYear: 'Admission Accepted',
      marksPercentage: 89.5,
      familyIncome: 420000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026KA33190',
      otrStatus: 'VERIFIED',
      apaarId: '6612-4410-9921',
      apaarStatus: 'VERIFIED',
      passportNumber: 'Z6541289',
      passportExpiry: '2034-04-12',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 3318',
      bankName: 'HDFC Bank',
      ifscCode: 'HDFC0001890',
      dbtSeeded: true,
      parentId: null,
      profileCompletion: 95,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'PENDING'
      }
    },
    // PVTG Student Demo
    {
      id: 'ST202600129',
      name: 'Kavitha Toda',
      gender: 'Female',
      dob: '2005-02-18',
      mobile: '+91 94880 11982',
      email: 'kavitha.toda@gmail.com',
      state: 'Tamil Nadu',
      district: 'Nilgiris',
      category: 'ST',
      stSubTribe: 'Toda',
      pvtg: true,
      pvtgTribe: 'Toda (PVTG)',
      institution: 'Government Arts & Science College, Ooty',
      institutionType: 'State University Affiliated',
      aisheCode: 'C-41289',
      course: 'B.Sc Botany',
      courseLevel: 'Undergraduate',
      academicYear: '2026-2027',
      currentYear: '2nd Year',
      marksPercentage: 81.2,
      familyIncome: 85000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026TN99014',
      otrStatus: 'VERIFIED',
      apaarId: '8821-4451-2290',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 1209',
      bankName: 'State Bank of India',
      ifscCode: 'SBIN0000892',
      dbtSeeded: true,
      parentId: null,
      profileCompletion: 90,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'VERIFIED',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    // Student with Disability
    {
      id: 'ST202600130',
      name: 'Ravi Munda',
      gender: 'Male',
      dob: '2004-12-05',
      mobile: '+91 91230 45871',
      email: 'ravi.munda.pwd@gmail.com',
      state: 'Jharkhand',
      district: 'Khunti',
      category: 'ST',
      stSubTribe: 'Munda',
      pvtg: false,
      pvtgTribe: null,
      institution: 'St. Xavier\'s College, Ranchi',
      institutionType: 'Autonomous College',
      aisheCode: 'C-42510',
      course: 'B.Com Accounting & Finance',
      courseLevel: 'Undergraduate',
      academicYear: '2026-2027',
      currentYear: '1st Year',
      marksPercentage: 79.4,
      familyIncome: 120000,
      disabilityStatus: 'Yes',
      disabilityType: 'Locomotor Disability',
      disabilityPercentage: 45,
      udidNumber: 'JH1489020040112',
      otrNumber: 'OTR2026JH88124',
      otrStatus: 'VERIFIED',
      apaarId: '7721-3310-8841',
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• 8841',
      bankName: 'Bank of India',
      ifscCode: 'BKID0004910',
      dbtSeeded: true,
      parentId: null,
      profileCompletion: 90,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    },
    // Additional realistic students for admin analytics and coverage
    { id: 'ST202600131', name: 'Devendra Bhil', gender: 'Male', state: 'Rajasthan', district: 'Banswara', category: 'ST', stSubTribe: 'Bhil', pvtg: false, institution: 'Govt College Banswara', course: 'B.A. History', courseLevel: 'Undergraduate', familyIncome: 110000, academicYear: '2026-2027', currentYear: '2nd Year', marksPercentage: 74.5, disabilityStatus: 'No', otrNumber: 'OTR2026RJ11902', apaarId: '3341-9981-2241', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 1142', bankName: 'SBI', ifscCode: 'SBIN0002140', dbtSeeded: true },
    { id: 'ST202600132', name: 'Kamla Gond', gender: 'Female', state: 'Madhya Pradesh', district: 'Dindori', category: 'ST', stSubTribe: 'Gond', pvtg: false, institution: 'Govt Chandra Vijay College', course: 'B.Sc Mathematics', courseLevel: 'Undergraduate', familyIncome: 130000, academicYear: '2026-2027', currentYear: '3rd Year', marksPercentage: 82.0, disabilityStatus: 'No', otrNumber: 'OTR2026MP44109', apaarId: '5561-2210-9941', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 5521', bankName: 'CBI', ifscCode: 'CBIN0281450', dbtSeeded: true },
    { id: 'ST202600133', name: 'Chonira Sangma', gender: 'Female', state: 'Meghalaya', district: 'East Garo Hills', category: 'ST', stSubTribe: 'Garo', pvtg: false, institution: 'North-Eastern Hill University', course: 'M.A. English', courseLevel: 'Postgraduate', familyIncome: 190000, academicYear: '2026-2027', currentYear: '1st Year', marksPercentage: 78.5, disabilityStatus: 'No', otrNumber: 'OTR2026ML77210', apaarId: '8812-4412-0091', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 7741', bankName: 'SBI', ifscCode: 'SBIN0004120', dbtSeeded: true },
    { id: 'ST202600134', name: 'Laxman Murmu', gender: 'Male', state: 'Odisha', district: 'Koraput', category: 'ST', stSubTribe: 'Santhal', pvtg: false, institution: 'Koraput Degree College', course: 'B.Com', courseLevel: 'Undergraduate', familyIncome: 95000, academicYear: '2026-2027', currentYear: '2nd Year', marksPercentage: 71.0, disabilityStatus: 'No', otrNumber: 'OTR2026OD88190', apaarId: '9912-3310-4412', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 9901', bankName: 'UCO Bank', ifscCode: 'UCBA0001420', dbtSeeded: true },
    { id: 'ST202600135', name: 'Sunita Munda', gender: 'Female', state: 'Jharkhand', district: 'West Singhbhum', category: 'ST', stSubTribe: 'Ho', pvtg: false, institution: 'Tata College Chaibasa', course: 'B.Sc Chemistry', courseLevel: 'Undergraduate', familyIncome: 80000, academicYear: '2026-2027', currentYear: '1st Year', marksPercentage: 76.8, disabilityStatus: 'No', otrNumber: 'OTR2026JH44198', apaarId: '1142-8871-3312', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 3321', bankName: 'PNB', ifscCode: 'PUNB0041200', dbtSeeded: true },
    { id: 'ST202600136', name: 'Zothan Mawia', gender: 'Male', state: 'Mizoram', district: 'Aizawl', category: 'ST', stSubTribe: 'Mizo', pvtg: false, institution: 'Mizoram University', course: 'M.Tech Electronics', courseLevel: 'Postgraduate', familyIncome: 240000, academicYear: '2026-2027', currentYear: '2nd Year', marksPercentage: 88.0, disabilityStatus: 'No', otrNumber: 'OTR2026MZ99120', apaarId: '4410-6621-8890', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 8812', bankName: 'SBI', ifscCode: 'SBIN0001452', dbtSeeded: true },
    { id: 'ST202600137', name: 'Kishan Sahariya', gender: 'Male', state: 'Rajasthan', district: 'Baran', category: 'ST', stSubTribe: 'Sahariya', pvtg: true, pvtgTribe: 'Sahariya (PVTG)', institution: 'Govt ITI Baran', course: 'Electrician Trade', courseLevel: 'Vocational/Diploma', familyIncome: 65000, academicYear: '2026-2027', currentYear: '1st Year', marksPercentage: 73.2, disabilityStatus: 'No', otrNumber: 'OTR2026RJ77124', apaarId: '7741-2290-1124', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 6631', bankName: 'BOB', ifscCode: 'BARB0BARANX', dbtSeeded: true },
    { id: 'ST202600138', name: 'Manjula Baiga', gender: 'Female', state: 'Madhya Pradesh', district: 'Mandla', category: 'ST', stSubTribe: 'Baiga', pvtg: true, pvtgTribe: 'Baiga (PVTG)', institution: 'Govt Poly Mandla', course: 'Diploma Civil Engg', courseLevel: 'Diploma', familyIncome: 70000, academicYear: '2026-2027', currentYear: '2nd Year', marksPercentage: 80.5, disabilityStatus: 'No', otrNumber: 'OTR2026MP99120', apaarId: '8841-3310-9921', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 4410', bankName: 'CBI', ifscCode: 'CBIN0281140', dbtSeeded: true },
    { id: 'ST202600139', name: 'Gopal Meena', gender: 'Male', state: 'Rajasthan', district: 'Sawai Madhopur', category: 'ST', stSubTribe: 'Meena', pvtg: false, institution: 'IIT Delhi', course: 'B.Tech Mechanical Engg', courseLevel: 'Undergraduate', familyIncome: 220000, academicYear: '2026-2027', currentYear: '3rd Year', marksPercentage: 87.5, disabilityStatus: 'No', otrNumber: 'OTR2026RJ44102', apaarId: '2214-8890-4412', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 1248', bankName: 'SBI', ifscCode: 'SBIN0001077', dbtSeeded: true },
    { id: 'ST202600140', name: 'Shreya Koya', gender: 'Female', state: 'Andhra Pradesh', district: 'Alluri Sitharama Raju', category: 'ST', stSubTribe: 'Koya', pvtg: false, institution: 'Andhra Medical College, Visakhapatnam', course: 'MBBS', courseLevel: 'Professional Undergrad', familyIncome: 195000, academicYear: '2026-2027', currentYear: '2nd Year', marksPercentage: 86.4, disabilityStatus: 'No', otrNumber: 'OTR2026AP77120', apaarId: '6610-4412-9981', otrStatus: 'VERIFIED', apaarStatus: 'VERIFIED', aadhaarLinked: true, bankAccount: '•••• 9942', bankName: 'Andhra Pragathi Grameena', ifscCode: 'APGB0002145', dbtSeeded: true }
  ],

  // 3. Parents / Family Members Table
  parents: [
    {
      id: 'USR003',
      name: 'Ramesh Kumar',
      relation: 'Father / Guardian',
      occupation: 'Small Landholding Farmer & Sericulture',
      annualIncome: 250000,
      state: 'Tamil Nadu',
      district: 'Theni',
      mobile: '+91 98421 12345',
      rationCardNumber: 'TN-33-04-19842',
      stCertificateNumber: 'TNST2018THN09421',
      children: ['ST202600124', 'ST202600125']
    }
  ],

  // 4. Five Major MoTA Scholarship Schemes Table
  scholarships: [
    {
      code: 'PRE_MATRIC',
      id: 'SCH001',
      name: 'Pre-Matric Scholarship for ST Students',
      nameTa: 'பழங்குடியின மாணவர்களுக்கான மெட்ரிக் முந்தைய உதவித்தொகை',
      ministry: 'Ministry of Tribal Affairs (MoTA)',
      level: 'Classes IX and X',
      targetBeneficiary: 'ST Day Scholars and Hostellers studying in Recognized Schools',
      annualBenefit: '₹3,500 - ₹7,000 / year + Ad-hoc Grant ₹1,000',
      incomeLimit: 250000,
      description: 'Supports ST children studying in classes 9th and 10th to minimize school dropouts and ensure transition to post-secondary education.',
      icon: 'school',
      activeForApplication: true,
      lastDate: '31 October 2026',
      schemeGuidelinesUrl: 'https://tribal.nic.in/schemes/pre-matric'
    },
    {
      code: 'POST_MATRIC',
      id: 'SCH002',
      name: 'Post-Matric Scholarship for ST Students',
      nameTa: 'பழங்குடியின மாணவர்களுக்கான மெட்ரிக் பிந்தைய உதவித்தொகை',
      ministry: 'Ministry of Tribal Affairs (MoTA)',
      level: 'Post-Secondary, Diploma, Degree, PG, Professional Courses',
      targetBeneficiary: 'ST Students pursuing recognized post-matriculation courses',
      annualBenefit: 'Full Tuition Fee Reimbursement + Maintenance Allowance (₹2,500 - ₹13,500 / year)',
      incomeLimit: 250000,
      description: 'Provides complete financial assistance to Scheduled Tribe students studying at post-matriculation or post-secondary stages to enable completion of their education.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '30 November 2026',
      schemeGuidelinesUrl: 'https://tribal.nic.in/schemes/post-matric'
    },
    {
      code: 'TOP_CLASS',
      id: 'SCH003',
      name: 'Top Class Education for ST Students',
      nameTa: 'பழங்குடியின மாணவர்களுக்கான உயர்தர கல்வி உதவித்தொகை',
      ministry: 'Ministry of Tribal Affairs (MoTA)',
      level: 'Degree / PG in 259 Notified Premier Institutes (IITs, NITs, IIMs, AIIMS, NLUs, etc.)',
      targetBeneficiary: 'ST students securing admission in notified premier institutions',
      annualBenefit: 'Full Tuition Fee up to ₹2.0 Lakhs / actuals + Living Expense ₹3,000/mo + Books/Computer grant ₹86,000 in 1st year',
      incomeLimit: 800000,
      description: 'Recognizes and promotes quality education among ST students across premier institutions of national repute.',
      icon: 'trophy',
      activeForApplication: true,
      lastDate: '15 November 2026',
      schemeGuidelinesUrl: 'https://tribal.nic.in/schemes/top-class'
    },
    {
      code: 'NFST',
      id: 'SCH004',
      name: 'National Fellowship for ST Students (NFST)',
      nameTa: 'பழங்குடியின மாணவர்களுக்கான தேசிய ஆய்வு உதவித்தொகை',
      ministry: 'Ministry of Tribal Affairs (MoTA)',
      level: 'M.Phil / Ph.D. Research in Indian Universities',
      targetBeneficiary: 'ST candidates qualifying UGC-NET / CSIR-NET or selected through MoTA merit',
      annualBenefit: 'JRF: ₹37,000/mo | SRF: ₹42,000/mo + Contingency ₹20,000/yr + HRA',
      incomeLimit: null, // No family income ceiling for NFST merit fellowships
      description: 'Enables ST students to pursue higher studies leading to M.Phil and Ph.D. degrees in Sciences, Humanities, Engineering, and Technology in Indian universities.',
      icon: 'sparkles',
      activeForApplication: true,
      lastDate: '20 December 2026',
      schemeGuidelinesUrl: 'https://fellowship.tribal.gov.in/'
    },
    {
      code: 'NOS',
      id: 'SCH005',
      name: 'National Overseas Scholarship for ST Students (NOS)',
      nameTa: 'பழங்குடியின மாணவர்களுக்கான தேசிய வெளிநாட்டு உதவித்தொகை',
      ministry: 'Ministry of Tribal Affairs (MoTA)',
      level: 'Master’s Degree and Ph.D. in Top 500 QS/THE Ranked Foreign Universities',
      targetBeneficiary: 'ST candidates with valid passport and unconditional foreign admission letter',
      annualBenefit: 'Annual Maintenance Allowance US$ 15,400 (USA) / £ 9,900 (UK) + Full Tuition Fees + Contingency + Airfare + Visa',
      incomeLimit: 800000,
      description: 'Provides financial support to meritorious Scheduled Tribe students for pursuing Master level courses and Ph.D. abroad in prestigious global universities.',
      icon: 'globe-alt',
      activeForApplication: true,
      lastDate: '31 January 2027',
      schemeGuidelinesUrl: 'https://overseas.tribal.gov.in/'
    }
  ],

  // 4b. State-Specific Tribal Welfare Scholarship Schemes (Dynamic State & Central Filtering)
  state_scholarships: [
    // Tamil Nadu
    {
      id: 'ST_SCH_TN01',
      code: 'TN_TRIBAL_HIGHER_ED',
      name: 'Tamil Nadu Chief Minister Tribal Higher Education Special Award',
      nameLocal: 'தமிழ்நாடு முதலமைச்சரின் பழங்குடியினர் உயர்கல்வி சிறப்பு விருது',
      state: 'Tamil Nadu',
      governmentType: 'STATE',
      department: 'Adi Dravidar and Tribal Welfare Department, Govt of Tamil Nadu',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students securing top ranks in 12th board & joining professional degrees',
      annualBenefit: '₹50,000 cash award + Free Laptop + 100% Hostel & Boarding Fees covered',
      incomeLimit: 300000,
      description: 'Encourages Scheduled Tribe students from tribal belts (Megamalai, Nilgiris, Jawadhu Hills) to complete professional engineering, medical, and agriculture degrees.',
      icon: 'trophy',
      activeForApplication: true,
      lastDate: '30 November 2026',
      portalUrl: 'https://adw.tn.gov.in/'
    },
    {
      id: 'ST_SCH_TN02',
      code: 'TN_GTRS_SPECIAL_STIPEND',
      name: 'Tamil Nadu GTRS Residential School Education & Book Stipend',
      nameLocal: 'அரசு பழங்குடியினர் உண்டு உறைவிடப் பள்ளி சிறப்பு உதவித்தொகை',
      state: 'Tamil Nadu',
      governmentType: 'STATE',
      department: 'Tribal Welfare Directorate, Govt of Tamil Nadu',
      level: 'School (Class 9-10)',
      targetBeneficiary: 'ST students enrolled in Government Tribal Residential (GTR) Schools',
      annualBenefit: '₹6,000 / year + Free Uniforms, Books, Special Coaching for Class 10 Board',
      incomeLimit: 250000,
      description: 'Comprehensive residential school support preventing dropouts among vulnerable tribal children.',
      icon: 'school',
      activeForApplication: true,
      lastDate: '31 October 2026',
      portalUrl: 'https://adw.tn.gov.in/'
    },

    // Jharkhand
    {
      id: 'ST_SCH_JH01',
      code: 'JH_MARANG_GOMKE',
      name: 'Marang Gomke Jaipal Singh Munda Overseas Scholarship',
      nameLocal: 'मारांग गोमके जयपाल सिंह मुंडा पारदेशीय छात्रवृत्ति योजना',
      state: 'Jharkhand',
      governmentType: 'STATE',
      department: 'Scheduled Tribe, SC, Minority and BC Welfare Dept, Govt of Jharkhand',
      level: 'Master’s Degree Overseas (UK & Ireland Universities)',
      targetBeneficiary: 'Meritorious ST youth of Jharkhand admitted to prestigious UK universities (Oxford, Cambridge, LSE, etc.)',
      annualBenefit: '100% Tuition Fees + Living Allowance + Health Insurance + Round-trip Airfare (up to ₹45 Lakhs)',
      incomeLimit: 1200000,
      description: 'Pioneering state scheme financing top tribal students from Jharkhand for higher studies in premier international universities.',
      icon: 'globe-alt',
      activeForApplication: true,
      lastDate: '15 December 2026',
      portalUrl: 'https://mgmcroverseas.jharkhand.gov.in/'
    },
    {
      id: 'ST_SCH_JH02',
      code: 'JH_EKALYAN_POSTMATRIC',
      name: 'Jharkhand e-Kalyan Post-Matric Tribal Education Add-on',
      nameLocal: 'झारखंड ई-कल्याण पोस्ट-मैट्रिक जनजातीय छात्रवृत्ति',
      state: 'Jharkhand',
      governmentType: 'STATE',
      department: 'Welfare Department, Govt of Jharkhand',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students pursuing graduation, diploma, and technical courses in Jharkhand',
      annualBenefit: '₹12,000 - ₹28,000 / year state maintenance allowance over central share',
      incomeLimit: 250000,
      description: 'Seamless online scholarship disbursed through e-Kalyan portal for tribal students across 24 districts.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '30 November 2026',
      portalUrl: 'https://ekalyan.cgg.gov.in/'
    },

    // Odisha
    {
      id: 'ST_SCH_OD01',
      code: 'OD_PRERANA_POSTMATRIC',
      name: 'Odisha PRERANA Post-Matric ST Scholarship',
      nameLocal: 'ଓଡ଼ିଶା ପ୍ରେରଣା ପୋଷ୍ଟ-ମେଟ୍ରିକ ଆଦିବାସୀ ଛାତ୍ରବୃତ୍ତି',
      state: 'Odisha',
      governmentType: 'STATE',
      department: 'ST & SC Development, Minorities & Backward Classes Welfare Dept, Odisha',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students enrolled in post-matric courses in Odisha institutions',
      annualBenefit: 'Full Course Tuition Fee Reimbursement + ₹12,000/yr Hosteller Stipend',
      incomeLimit: 250000,
      description: 'Automated state portal for tribal welfare with 100% DBT Aadhaar payment integration.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '25 November 2026',
      portalUrl: 'https://scholarship.odisha.gov.in/'
    },
    {
      id: 'ST_SCH_OD02',
      code: 'OD_PVTG_SPECIAL',
      name: 'Odisha PVTG Special Livelihood & Higher Education Grant',
      nameLocal: 'ପିଭିଟିଜି ବିଶେଷ ଶିକ୍ଷା ସହାୟତା ଯୋଜନା',
      state: 'Odisha',
      governmentType: 'STATE',
      department: 'Odisha PVTG Empowerment and Livelihoods Programme (OPELIP)',
      level: 'School & College',
      targetBeneficiary: 'Students belonging to 13 PVTG tribes of Odisha (Dongria Kondh, Bonda, Kutia Kondh, etc.)',
      annualBenefit: '₹20,000 / year + Free Residential Coaching + Books & Digital Device Grant',
      incomeLimit: null,
      description: 'Targeted affirmative scheme ensuring zero financial hindrance for Particularly Vulnerable Tribal Groups.',
      icon: 'sparkles',
      activeForApplication: true,
      lastDate: '10 December 2026',
      portalUrl: 'https://opelip.org/'
    },

    // Madhya Pradesh
    {
      id: 'ST_SCH_MP01',
      code: 'MP_AAKANKSHA_JEE_NEET',
      name: 'Madhya Pradesh Aakanksha Scheme (JEE / NEET / CLAT Coaching)',
      nameLocal: 'मध्य प्रदेश आकांक्षा योजना (जनजातीय जेईई / नीट कोचिंग)',
      state: 'Madhya Pradesh',
      governmentType: 'STATE',
      department: 'Tribal Affairs Department, Govt of Madhya Pradesh',
      level: 'School & Entrance Exam Coaching',
      targetBeneficiary: 'ST students passing 10th with > 60% marks aiming for national entrance tests',
      annualBenefit: '100% Free National-Level Coaching + ₹6,000/mo Living & Accommodation Stipend',
      incomeLimit: 600000,
      description: 'Prepares talented tribal youth from Dindori, Mandla, Jhabua for admissions into IIT, NIT, AIIMS, and NLUs.',
      icon: 'trophy',
      activeForApplication: true,
      lastDate: '30 October 2026',
      portalUrl: 'https://www.tribal.mp.gov.in/'
    },
    {
      id: 'ST_SCH_MP02',
      code: 'MP_POSTMATRIC_STATE_TOPUP',
      name: 'Madhya Pradesh MPTAAS Post-Matric Tribal State Top-Up',
      nameLocal: 'मध्य प्रदेश जनजातीय कार्य विभाग (MPTAAS) छात्रवृत्ति',
      state: 'Madhya Pradesh',
      governmentType: 'STATE',
      department: 'Tribal Welfare Department, Madhya Pradesh',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students enrolled in undergraduate and postgraduate courses',
      annualBenefit: 'Full Tuition Fee + ₹11,000/year state stipend disbursed via MPTAAS portal',
      incomeLimit: 250000,
      description: 'Integrated digital delivery of state scholarship directly into Aadhaar-seeded accounts.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '15 December 2026',
      portalUrl: 'https://www.tribal.mp.gov.in/mptaas'
    },

    // Rajasthan
    {
      id: 'ST_SCH_RJ01',
      code: 'RJ_UTTAR_MATRIC',
      name: 'Rajasthan Uttar Matric ST Chhatravriti (SJE)',
      nameLocal: 'राजस्थान उत्तर मैट्रिक छात्रवृत्ति योजना (एसटी संवर्ग)',
      state: 'Rajasthan',
      governmentType: 'STATE',
      department: 'Social Justice and Empowerment Department (SJED), Rajasthan',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students pursuing higher education across Rajasthan',
      annualBenefit: '100% Non-refundable fee refund + ₹10,000 annual maintenance allowance',
      incomeLimit: 250000,
      description: 'State scholarship portal integrated with Jan-Aadhaar single identifier.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '30 November 2026',
      portalUrl: 'https://sje.rajasthan.gov.in/'
    },
    {
      id: 'ST_SCH_RJ02',
      code: 'RJ_TAD_HIGHER_EDUCATION',
      name: 'Rajasthan Tribal Area Development (TAD) Board Higher Education Grant',
      nameLocal: 'जनजाति क्षेत्रीय विकास विभाग (TAD) उच्च शिक्षा अनुदान',
      state: 'Rajasthan',
      governmentType: 'STATE',
      department: 'Tribal Area Development Department, Udaipur, Rajasthan',
      level: 'College / Higher Education & Hostels',
      targetBeneficiary: 'ST students from TSP (Tribal Sub-Plan) area districts (Banswara, Dungarpur, Pratapgarh)',
      annualBenefit: 'Free TAD College Hostel Seat + ₹18,000/yr Food Allowance + Laptop Grant',
      incomeLimit: 300000,
      description: 'Special focused assistance for tribal sub-plan areas ensuring higher education continuity.',
      icon: 'school',
      activeForApplication: true,
      lastDate: '20 November 2026',
      portalUrl: 'https://tad.rajasthan.gov.in/'
    },

    // Maharashtra
    {
      id: 'ST_SCH_MH01',
      code: 'MH_SWADHAR_YOJANA',
      name: 'Dr. Babasaheb Ambedkar Swadhar Scheme for ST Students',
      nameLocal: 'डॉ. बाबासाहेब आंबेडकर स्वाधार योजना (आदिवासी घटक)',
      state: 'Maharashtra',
      governmentType: 'STATE',
      department: 'Tribal Development Department, Govt of Maharashtra',
      level: 'College / Professional Courses',
      targetBeneficiary: 'ST students admitted to colleges who did not secure government hostel admission',
      annualBenefit: '₹51,000 to ₹60,000 / year directly for private lodging, food, and books',
      incomeLimit: 250000,
      description: 'Financial compensation for housing and sustenance in cities like Mumbai, Pune, Nagpur, Nashik.',
      icon: 'trophy',
      activeForApplication: true,
      lastDate: '15 December 2026',
      portalUrl: 'https://tribal.maharashtra.gov.in/'
    },

    // Assam / North East
    {
      id: 'ST_SCH_AS01',
      code: 'AS_WPTBC_POSTMATRIC',
      name: 'Assam Plains Tribes & Hills Post-Matric State Financial Assistance',
      nameLocal: 'অসম ভৈয়াম জনজাতি আৰু পাৰ্বত্য শ্ৰেণী কল্যাণ ছাত্ৰবৃত্তি',
      state: 'Assam',
      governmentType: 'STATE',
      department: 'Department of Tribal Affairs (Plains), Govt of Assam',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST(P) and ST(H) students studying in degree, diploma, and technical courses',
      annualBenefit: '₹14,000 / year state scholarship + admission fee exemption',
      incomeLimit: 250000,
      description: 'Administered under the Directorate of Welfare of Plains Tribes and Backward Classes.',
      icon: 'academic-cap',
      activeForApplication: true,
      lastDate: '30 November 2026',
      portalUrl: 'https://directorwptbc.assam.gov.in/'
    },

    // Gujarat
    {
      id: 'ST_SCH_GJ01',
      code: 'GJ_VIDYA_SADHANA',
      name: 'Gujarat Vidya Sadhana & Post-Matric Tribal Fellowship',
      nameLocal: 'ગુજરાત આદિજાતિ વિકાસ વિદ્યા સાધના યોજના',
      state: 'Gujarat',
      governmentType: 'STATE',
      department: 'Tribal Development Department, Govt of Gujarat',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students pursuing medical, engineering, nursing, and polytechnic courses',
      annualBenefit: 'Full Tuition reimbursement up to ₹2.5 Lakhs/yr + Free Bicycle & Hostel Stipend',
      incomeLimit: 250000,
      description: 'Disbursed via the Digital Gujarat portal with instant Aadhaar verification.',
      icon: 'sparkles',
      activeForApplication: true,
      lastDate: '10 December 2026',
      portalUrl: 'https://www.digitalgujarat.gov.in/'
    },

    // Andhra Pradesh
    {
      id: 'ST_SCH_AP01',
      code: 'AP_JAGANANNA_TRIBAL',
      name: 'Andhra Pradesh Jagananna Vidya Deevena (Tribal Share)',
      nameLocal: 'జగనన్న విద్యా దీవెన (గిరిజన సంక్షేమ పథకం)',
      state: 'Andhra Pradesh',
      governmentType: 'STATE',
      department: 'Tribal Welfare Department, Govt of Andhra Pradesh',
      level: 'College / Higher Education',
      targetBeneficiary: 'ST students pursuing ITI, Polytechnic, Degree, B.Tech, Medicine in AP',
      annualBenefit: '100% Complete Tuition Fee paid quarterly + ₹20,000/yr Vasathi Deevena lodging grant',
      incomeLimit: 250000,
      description: 'Credited directly to student mother’s Aadhaar-linked bank account on schedule.',
      icon: 'trophy',
      activeForApplication: true,
      lastDate: '30 November 2026',
      portalUrl: 'https://jnanabhumi.ap.gov.in/'
    }
  ],

  // 4c. Outreach Campaigns History & Automated Dispatch Queue
  outreach_campaigns: [
    {
      id: 'CMP202601',
      title: 'School-to-College Transition Outreach 2026',
      targetAudience: 'Class 10 & 12 Tribal Students Completing School',
      state: 'All India',
      channel: 'SMS + WhatsApp + In-App Push',
      recipientsCount: 42180,
      deliveredCount: 41820,
      responseRate: '44.8%',
      dateDispatched: '2026-09-20',
      status: 'ACTIVE',
      message: 'Greetings from Ministry of Tribal Affairs! Finished Class 12? Discover Post-Matric & Top Class ST Scholarships for college at TRIBALONE. Free tuition + hostel grant. Apply now!'
    },
    {
      id: 'CMP202602',
      title: 'PVTG Saturation Campaign - Nilgiris & Mayurbhanj',
      targetAudience: 'Particularly Vulnerable Tribal Groups (Toda, Kota, Dongria)',
      state: 'Tamil Nadu & Odisha',
      channel: 'Field Officer Notice + SMS',
      recipientsCount: 3120,
      deliveredCount: 3080,
      responseRate: '68.2%',
      dateDispatched: '2026-09-22',
      status: 'ACTIVE',
      message: 'MoTA Special PVTG Drive: Free education grants & boarding available for your children. Contact District Welfare Officer or check TRIBALONE.'
    },
    {
      id: 'CMP202603',
      title: 'Expiring Income Certificate Alert',
      targetAudience: 'Students with Income Certificate validity < 15 days',
      state: 'All India',
      channel: 'SMS + Push Notification',
      recipientsCount: 8420,
      deliveredCount: 8390,
      responseRate: '71.5%',
      dateDispatched: '2026-09-24',
      status: 'ACTIVE',
      message: 'Urgent: Your annual family income certificate expires soon. Renew via state e-District portal or upload digital copy on TRIBALONE before 28 Sept to avoid DBT payment holds.'
    }
  ],

  // 5. Configurable Scholarship Rules Table (For Admin Rules Management Engine)
  scholarship_rules: [
    {
      id: 'RULE001',
      schemeCode: 'PRE_MATRIC',
      schemeName: 'Pre-Matric Scholarship',
      requirement: 'ST Category Verification',
      ruleDescription: 'Applicant community must be certified as Scheduled Tribe in State/UT gazette',
      thresholdValue: 'ST = true',
      ruleType: 'boolean',
      active: true,
      lastUpdated: '2026-08-10'
    },
    {
      id: 'RULE002',
      schemeCode: 'PRE_MATRIC',
      schemeName: 'Pre-Matric Scholarship',
      requirement: 'Education Class Limit',
      ruleDescription: 'Applicant must be enrolled in recognized School Class 9 or 10',
      thresholdValue: 'Class 9 or 10',
      ruleType: 'level',
      active: true,
      lastUpdated: '2026-08-10'
    },
    {
      id: 'RULE003',
      schemeCode: 'PRE_MATRIC',
      schemeName: 'Pre-Matric Scholarship',
      requirement: 'Family Income Ceiling',
      ruleDescription: 'Gross annual income of both parents/guardians from all sources',
      thresholdValue: '₹2,50,000 / year',
      ruleType: 'currency',
      active: true,
      lastUpdated: '2026-08-10'
    },
    {
      id: 'RULE004',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship',
      requirement: 'Post-Secondary Education Level',
      ruleDescription: 'Applicant enrolled in post-matric courses recognized by UGC/AICTE/State Board',
      thresholdValue: 'Post-Matric / UG / PG / Diploma',
      ruleType: 'level',
      active: true,
      lastUpdated: '2026-08-12'
    },
    {
      id: 'RULE005',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship',
      requirement: 'Annual Family Income Ceiling',
      ruleDescription: 'Gross annual family income from all sources must not exceed threshold',
      thresholdValue: '₹2,50,000 / year',
      ruleType: 'currency',
      active: true,
      lastUpdated: '2026-08-12'
    },
    {
      id: 'RULE006',
      schemeCode: 'TOP_CLASS',
      schemeName: 'Top Class Education',
      requirement: 'Notified Premier Institution',
      ruleDescription: 'Institution must feature in MoTA 259 Notified List (IIT/IIM/NIT/AIIMS/NLU)',
      thresholdValue: 'In MoTA Notified List = true',
      ruleType: 'boolean',
      active: true,
      lastUpdated: '2026-08-15'
    },
    {
      id: 'RULE007',
      schemeCode: 'TOP_CLASS',
      schemeName: 'Top Class Education',
      requirement: 'Family Income Ceiling',
      ruleDescription: 'Total family income threshold for Top Class scheme',
      thresholdValue: '₹8,00,000 / year',
      ruleType: 'currency',
      active: true,
      lastUpdated: '2026-08-15'
    },
    {
      id: 'RULE008',
      schemeCode: 'NFST',
      schemeName: 'National Fellowship (NFST)',
      requirement: 'Doctoral / M.Phil Enrollment & UGC-NET',
      ruleDescription: 'Applicant must have registered for full-time M.Phil/Ph.D. with UGC-NET/JRF qualification',
      thresholdValue: 'NET/JRF or Merit Selection',
      ruleType: 'qualification',
      active: true,
      lastUpdated: '2026-08-18'
    },
    {
      id: 'RULE009',
      schemeCode: 'NOS',
      schemeName: 'National Overseas Scholarship',
      requirement: 'Top 500 QS/THE University & Passport',
      ruleDescription: 'Unconditional admission in QS Top 500 overseas university and valid Indian passport',
      thresholdValue: 'QS Rank <= 500 + Valid Passport',
      ruleType: 'composite',
      active: true,
      lastUpdated: '2026-08-20'
    },
    {
      id: 'RULE010',
      schemeCode: 'NOS',
      schemeName: 'National Overseas Scholarship',
      requirement: 'Overseas Family Income Ceiling',
      ruleDescription: 'Annual family income threshold for Overseas Scholarship',
      thresholdValue: '₹8,00,000 / year',
      ruleType: 'currency',
      active: true,
      lastUpdated: '2026-08-20'
    }
  ],

  // 6. Applications Table (30+ applications with complete state history)
  applications: [
    {
      id: 'PM2026TN001',
      studentId: 'ST202600124',
      studentName: 'Arun Kumar',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship for ST Students',
      academicYear: '2026-2027',
      course: 'B.Tech Information Technology',
      institution: 'K. Ramakrishnan College of Engineering',
      submittedDate: '2026-08-14',
      status: 'UNDER_VERIFICATION',
      currentStage: 'State Verification',
      currentStageIndex: 3, // 0: Submitted, 1: Institute, 2: District, 3: State, 4: MoTA, 5: Sanction, 6: Payment, 7: DBT Credited
      sanctionAmount: 38500,
      deficienciesCount: 1,
      deficiencyResolved: false,
      activeDeficiency: {
        id: 'DEF001',
        issue: 'Income certificate expired.',
        issueTa: 'வருமானச் சான்றிதழின் காலாவதி முடிந்துவிட்டது.',
        action: 'Upload a valid income certificate issued after 01 April 2026.',
        actionTa: '01 ஏப்ரல் 2026க்குப் பிறகு வழங்கப்பட்ட சரியான வருமானச் சான்றிதழைப் பதிவேற்றவும்.',
        deadline: '28 September 2026',
        documentCode: 'INCOME_CERT',
        severity: 'HIGH'
      },
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '14 Aug 2026', remarks: 'Application digitally submitted with auto-filled profile and 4 reused documents.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '21 Aug 2026', remarks: 'Nodal Officer Mr. K. Velmurugan verified college admission, fees, and attendance.' },
        { stage: 'District Verification', status: 'COMPLETED', date: '04 Sep 2026', remarks: 'District Tribal Welfare Officer, Theni verified ST status via Tamil Nadu e-District portal.' },
        { stage: 'State Verification', status: 'CURRENT', date: 'In Progress (Since 08 Sep 2026)', remarks: 'State Welfare Directorate review. Notice issued regarding income certificate renewal.' },
        { stage: 'MoTA Verification', status: 'PENDING', date: 'Expected 05 Oct 2026', remarks: 'Central Ministry authorization.' },
        { stage: 'Sanction', status: 'PENDING', date: 'Pending', remarks: 'Sanction order generation.' },
        { stage: 'Payment Processing', status: 'PENDING', date: 'Pending', remarks: 'PFMS payment file generation.' },
        { stage: 'DBT Credited', status: 'PENDING', date: 'Pending', remarks: 'Aadhaar payment bridge to bank account.' }
      ]
    },
    {
      id: 'PM2026TN002',
      studentId: 'ST202600125',
      studentName: 'Priya Kumar',
      schemeCode: 'PRE_MATRIC',
      schemeName: 'Pre-Matric Scholarship for ST Students',
      academicYear: '2026-2027',
      course: 'Secondary (Class 10)',
      institution: 'Govt Tribal Residential HSS, Megamalai',
      submittedDate: '2026-07-28',
      status: 'SANCTIONED',
      currentStage: 'Payment Processing',
      currentStageIndex: 6,
      sanctionAmount: 4500,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '28 Jul 2026', remarks: 'Submitted by Headmaster via UDISE+ automated roster.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '02 Aug 2026', remarks: 'School verification confirmed.' },
        { stage: 'District Verification', status: 'COMPLETED', date: '12 Aug 2026', remarks: 'Theni district approved.' },
        { stage: 'State Verification', status: 'COMPLETED', date: '25 Aug 2026', remarks: 'Directorate of Tribal Welfare TN approved.' },
        { stage: 'MoTA Verification', status: 'COMPLETED', date: '06 Sep 2026', remarks: 'MoTA Central cleared.' },
        { stage: 'Sanction', status: 'COMPLETED', date: '14 Sep 2026', remarks: 'Sanction Order: MOTA/SAN/2026/TN/00842.' },
        { stage: 'Payment Processing', status: 'CURRENT', date: '20 Sep 2026', remarks: 'PFMS file pushed to Reserve Bank of India APBS.' },
        { stage: 'DBT Credited', status: 'PENDING', date: 'Expected 26 Sep 2026', remarks: 'Will credit to Indian Overseas Bank A/C ••9921.' }
      ]
    },
    {
      id: 'TC2026JH009',
      studentId: 'ST202600126',
      studentName: 'Birsa Soren',
      schemeCode: 'TOP_CLASS',
      schemeName: 'Top Class Education for ST Students',
      academicYear: '2026-2027',
      course: 'B.Tech Computer Science',
      institution: 'Birla Institute of Technology, Mesra',
      submittedDate: '2026-08-05',
      status: 'APPROVED',
      currentStage: 'Sanction',
      currentStageIndex: 5,
      sanctionAmount: 186000,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '05 Aug 2026', remarks: 'Profile imported via AISHE ID.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '11 Aug 2026', remarks: 'BIT Mesra Nodal verified semester rank & admission.' },
        { stage: 'District Verification', status: 'COMPLETED', date: '20 Aug 2026', remarks: 'Ranchi district certified.' },
        { stage: 'State Verification', status: 'COMPLETED', date: '01 Sep 2026', remarks: 'Jharkhand State Welfare cleared.' },
        { stage: 'MoTA Verification', status: 'COMPLETED', date: '15 Sep 2026', remarks: 'Top Class Directorate passed.' },
        { stage: 'Sanction', status: 'CURRENT', date: '22 Sep 2026', remarks: 'Sanction Order drafting underway.' },
        { stage: 'Payment Processing', status: 'PENDING', date: 'Pending', remarks: 'Scheduled for PFMS October Cycle.' },
        { stage: 'DBT Credited', status: 'PENDING', date: 'Pending', remarks: 'Awaiting disbursement.' }
      ]
    },
    {
      id: 'NF2026OD004',
      studentId: 'ST202600127',
      studentName: 'Mangal Marndi',
      schemeCode: 'NFST',
      schemeName: 'National Fellowship for ST Students (NFST)',
      academicYear: '2026-2027',
      course: 'Ph.D. Material Sciences',
      institution: 'Indian Institute of Technology Kharagpur',
      submittedDate: '2026-07-15',
      status: 'DISBURSED',
      currentStage: 'DBT Credited',
      currentStageIndex: 7,
      sanctionAmount: 484000,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '15 Jul 2026', remarks: 'UGC-NET JRF certificate verified with NTA.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '22 Jul 2026', remarks: 'Dean Academics IIT KGP approved registration.' },
        { stage: 'District Verification', status: 'COMPLETED', date: '01 Aug 2026', remarks: 'District validation passed.' },
        { stage: 'State Verification', status: 'COMPLETED', date: '10 Aug 2026', remarks: 'State recommendation completed.' },
        { stage: 'MoTA Verification', status: 'COMPLETED', date: '20 Aug 2026', remarks: 'MoTA Fellowship Committee cleared.' },
        { stage: 'Sanction', status: 'COMPLETED', date: '28 Aug 2026', remarks: 'Sanction Order MOTA/NFST/2026/112.' },
        { stage: 'Payment Processing', status: 'COMPLETED', date: '05 Sep 2026', remarks: 'PFMS batch DBT2026NF881.' },
        { stage: 'DBT Credited', status: 'COMPLETED', date: '10 Sep 2026', remarks: 'Credited to Canara Bank ••7714. DBT Ref: DBT2026OD991421' }
      ]
    },
    {
      id: 'NO2026KA002',
      studentId: 'ST202600128',
      studentName: 'Ananya Naik',
      schemeCode: 'NOS',
      schemeName: 'National Overseas Scholarship (NOS)',
      academicYear: '2026-2027',
      course: 'M.Sc. Artificial Intelligence & Data',
      institution: 'University of Edinburgh',
      submittedDate: '2026-08-30',
      status: 'UNDER_VERIFICATION',
      currentStage: 'Institute Verification',
      currentStageIndex: 1,
      sanctionAmount: 2450000,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '30 Aug 2026', remarks: 'Submitted with Edinburgh unconditional offer and Passport copy.' },
        { stage: 'Institute Verification', status: 'CURRENT', date: '12 Sep 2026', remarks: 'Foreign university accreditation and QS ranking verification in progress.' },
        { stage: 'District Verification', status: 'PENDING', date: 'Pending', remarks: 'Domicile verification pending.' },
        { stage: 'State Verification', status: 'PENDING', date: 'Pending', remarks: 'State review queue.' },
        { stage: 'MoTA Verification', status: 'PENDING', date: 'Pending', remarks: 'National Overseas Selection Board screening.' },
        { stage: 'Sanction', status: 'PENDING', date: 'Pending', remarks: 'Awaiting committee decision.' },
        { stage: 'Payment Processing', status: 'PENDING', date: 'Pending', remarks: 'Forex transfer authorization.' },
        { stage: 'DBT Credited', status: 'PENDING', date: 'Pending', remarks: 'International bank wire.' }
      ]
    },
    // Past Year application for Arun Kumar showing historical payment
    {
      id: 'PM2025TN941',
      studentId: 'ST202600124',
      studentName: 'Arun Kumar',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship for ST Students (2025-26)',
      academicYear: '2025-2026',
      course: 'B.Tech Information Technology (Year 2)',
      institution: 'K. Ramakrishnan College of Engineering',
      submittedDate: '2025-08-20',
      status: 'DISBURSED',
      currentStage: 'DBT Credited',
      currentStageIndex: 7,
      sanctionAmount: 18500,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '20 Aug 2025', remarks: 'Submitted.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '29 Aug 2025', remarks: 'College verified.' },
        { stage: 'District Verification', status: 'COMPLETED', date: '15 Sep 2025', remarks: 'Theni verified.' },
        { stage: 'State Verification', status: 'COMPLETED', date: '04 Oct 2025', remarks: 'TN State verified.' },
        { stage: 'MoTA Verification', status: 'COMPLETED', date: '18 Oct 2025', remarks: 'MoTA verified.' },
        { stage: 'Sanction', status: 'COMPLETED', date: '02 Nov 2025', remarks: 'Sanction Order: MOTA/TN/PM/2025/1109' },
        { stage: 'Payment Processing', status: 'COMPLETED', date: '14 Nov 2025', remarks: 'PFMS processed.' },
        { stage: 'DBT Credited', status: 'COMPLETED', date: '19 Nov 2025', remarks: '₹18,500 credited to SBI ••4512. Ref: DBT2025TN412891' }
      ]
    },
    // Mismatch case for Manual Review Queue demonstration (Arun Kumar's document review or Ravi Munda)
    {
      id: 'PM2026JH018',
      studentId: 'ST202600130',
      studentName: 'Ravi Munda',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship for ST Students',
      academicYear: '2026-2027',
      course: 'B.Com Accounting & Finance',
      institution: 'St. Xavier\'s College, Ranchi',
      submittedDate: '2026-08-18',
      status: 'MANUAL_REVIEW',
      currentStage: 'District Verification',
      currentStageIndex: 2,
      sanctionAmount: 22000,
      deficienciesCount: 1,
      activeDeficiency: {
        id: 'DEF002',
        issue: 'Disability certificate validity mismatch.',
        action: 'Officer manual review required for UDID portal verification.',
        deadline: '30 September 2026',
        documentCode: 'DISABILITY_CERT',
        severity: 'MEDIUM'
      },
      timeline: [
        { stage: 'Application Submitted', status: 'COMPLETED', date: '18 Aug 2026', remarks: 'Submitted with UDID card.' },
        { stage: 'Institute Verification', status: 'COMPLETED', date: '25 Aug 2026', remarks: 'St. Xavier’s college cleared.' },
        { stage: 'District Verification', status: 'NEEDS_ACTION', date: '05 Sep 2026', remarks: 'Flagged for Officer Manual Review: UDID portal returned slight spelling variation in guardian name.' },
        { stage: 'State Verification', status: 'PENDING', date: 'Pending', remarks: 'Awaiting district resolution.' },
        { stage: 'MoTA Verification', status: 'PENDING', date: 'Pending', remarks: 'Queued.' },
        { stage: 'Sanction', status: 'PENDING', date: 'Pending', remarks: 'Pending.' },
        { stage: 'Payment Processing', status: 'PENDING', date: 'Pending', remarks: 'Pending.' },
        { stage: 'DBT Credited', status: 'PENDING', date: 'Pending', remarks: 'Pending.' }
      ]
    }
  ],

  // 7. Document Wallet ("My Documents") Table with Color Coded Statuses
  documents: [
    // Arun Kumar's Documents
    {
      id: 'DOC001',
      studentId: 'ST202600124',
      docCode: 'ST_CERT',
      name: 'Community (ST) Certificate',
      certNumber: 'TNST2019THN04512',
      issuedDate: '2019-05-12',
      expiryDate: 'Permanent (Life-time)',
      status: 'VERIFIED', // VERIFIED (Green)
      statusColor: 'green',
      source: 'Tamil Nadu e-District / DigiLocker',
      lastVerifiedDate: '2026-08-14',
      fileType: 'PDF',
      fileSize: '482 KB',
      reusableCount: 3,
      mockDetails: { issuingAuthority: 'Tahsildar, Uthamapalayam, Theni', subCaste: 'Malayali ST', verifiedVia: 'e-Sign QR' }
    },
    {
      id: 'DOC002',
      studentId: 'ST202600124',
      docCode: 'INCOME_CERT',
      name: 'Family Income Certificate',
      certNumber: 'TNIC2025THN99812',
      issuedDate: '2025-09-15',
      expiryDate: '2026-09-15', // EXPIRED! Triggers deficiency
      status: 'EXPIRED', // EXPIRED / NEEDS ATTENTION (Red)
      statusColor: 'red',
      source: 'Revenue Dept Theni / DigiLocker',
      lastVerifiedDate: '2026-09-16',
      fileType: 'PDF',
      fileSize: '340 KB',
      reusableCount: 2,
      mockDetails: { statedIncome: '₹2,50,000 / year', validityStatus: 'Expired on 15 Sep 2026. Renewal Required.' }
    },
    {
      id: 'DOC003',
      studentId: 'ST202600124',
      docCode: 'IDENTITY_PROOF',
      name: 'Aadhaar Identity Proof (Masked)',
      certNumber: 'XXXX-XXXX-3891',
      issuedDate: '2016-04-10',
      expiryDate: 'Permanent',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'UIDAI / DigiLocker',
      lastVerifiedDate: '2026-08-14',
      fileType: 'PDF',
      fileSize: '290 KB',
      reusableCount: 4,
      mockDetails: { authType: 'Aadhaar e-KYC', biometricStatus: 'Active', dbtLinkedBank: 'State Bank of India' }
    },
    {
      id: 'DOC004',
      studentId: 'ST202600124',
      docCode: 'MARKSHEET_PREV',
      name: 'B.Tech Sem 4 Official Marksheet',
      certNumber: 'KRCE/2026/IT/SEM4/124',
      issuedDate: '2026-06-25',
      expiryDate: 'Permanent',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'Anna University / DigiLocker NAD',
      lastVerifiedDate: '2026-08-14',
      fileType: 'PDF',
      fileSize: '512 KB',
      reusableCount: 2,
      mockDetails: { cgpa: '8.46 / 10.0', creditsEarned: 92, backlogs: 0 }
    },
    {
      id: 'DOC005',
      studentId: 'ST202600124',
      docCode: 'BONAFIDE_CERT',
      name: 'College Bonafide & Fee Structure Certificate',
      certNumber: 'KRCE/ADMN/BONA/2026-27/094',
      issuedDate: '2026-07-20',
      expiryDate: '2027-06-30',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'K. Ramakrishnan College Portal',
      lastVerifiedDate: '2026-08-14',
      fileType: 'PDF',
      fileSize: '410 KB',
      reusableCount: 1,
      mockDetails: { feeBreakup: 'Tuition: ₹25,000 | Special: ₹8,500 | Exam: ₹5,000' }
    },
    {
      id: 'DOC006',
      studentId: 'ST202600124',
      docCode: 'DOMICILE_CERT',
      name: 'Nativity / Domicile Certificate',
      certNumber: 'TNNAT2019THN1120',
      issuedDate: '2019-05-18',
      expiryDate: 'Permanent',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'Tamil Nadu e-District',
      lastVerifiedDate: '2026-08-14',
      fileType: 'PDF',
      fileSize: '315 KB',
      reusableCount: 3,
      mockDetails: { nativePlace: 'Megamalai Hills, Theni District' }
    },
    // Missing document for demo
    {
      id: 'DOC007',
      studentId: 'ST202600124',
      docCode: 'PASSPORT',
      name: 'Indian Passport (For Overseas)',
      certNumber: 'Not Uploaded',
      issuedDate: '-',
      expiryDate: '-',
      status: 'MISSING', // Missing (Gray)
      statusColor: 'gray',
      source: 'Ministry of External Affairs',
      lastVerifiedDate: '-',
      fileType: '-',
      fileSize: '-',
      reusableCount: 0,
      mockDetails: { note: 'Required only if applying for National Overseas Scholarship (NOS).' }
    },
    // Priya Kumar's Documents
    {
      id: 'DOC008',
      studentId: 'ST202600125',
      docCode: 'ST_CERT',
      name: 'Community (ST) Certificate',
      certNumber: 'TNST2020THN08124',
      issuedDate: '2020-03-10',
      expiryDate: 'Permanent',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'Tamil Nadu e-District / DigiLocker',
      lastVerifiedDate: '2026-07-28',
      fileType: 'PDF',
      fileSize: '460 KB',
      reusableCount: 2
    },
    {
      id: 'DOC009',
      studentId: 'ST202600125',
      docCode: 'INCOME_CERT',
      name: 'Family Income Certificate (Joint Family)',
      certNumber: 'TNIC2026THN11094',
      issuedDate: '2026-05-10',
      expiryDate: '2027-05-09',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'Tamil Nadu e-District',
      lastVerifiedDate: '2026-07-28',
      fileType: 'PDF',
      fileSize: '380 KB',
      reusableCount: 2
    },
    {
      id: 'DOC010',
      studentId: 'ST202600125',
      docCode: 'MARKSHEET_PREV',
      name: 'Class 9 Official Progress Report',
      certNumber: 'GTRHSS/2026/IX/P42',
      issuedDate: '2026-05-02',
      expiryDate: 'Permanent',
      status: 'VERIFIED',
      statusColor: 'green',
      source: 'UDISE+ School Registry',
      lastVerifiedDate: '2026-07-28',
      fileType: 'PDF',
      fileSize: '290 KB',
      reusableCount: 1
    }
  ],

  // 8. Unified Verification Engine Records Table (11 categories)
  verification_records: [
    {
      id: 'VR001',
      studentId: 'ST202600124',
      category: 'Identity',
      categoryLabel: 'Aadhaar Identity & e-KYC',
      source: 'UIDAI API (Mock Ready)',
      status: 'VERIFIED',
      confidenceScore: '99.8%',
      timestamp: '2026-08-14 10:14:22',
      remarks: 'Demographic match 100%. Name, DOB, and Gender match Aadhaar registry.',
      referenceNo: 'UIDAI-MOCK-TN-98124'
    },
    {
      id: 'VR002',
      studentId: 'ST202600124',
      category: 'ST status',
      categoryLabel: 'Scheduled Tribe Community Status',
      source: 'TN e-District & DigiLocker',
      status: 'VERIFIED',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:25',
      remarks: 'Certificate verified against Revenue Portal Database. Sub-tribe Malayali ST recognized under Presidential Order.',
      referenceNo: 'TNREV-ST-2019-04512'
    },
    {
      id: 'VR003',
      studentId: 'ST202600124',
      category: 'PVTG status',
      categoryLabel: 'Particularly Vulnerable Tribal Group (PVTG)',
      source: 'MoTA PVTG Registry',
      status: 'NOT APPLICABLE',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:26',
      remarks: 'Student does not belong to a notified PVTG community (Non-PVTG ST). Regular ST provisions apply.',
      referenceNo: 'MOTA-PVTG-NONE'
    },
    {
      id: 'VR004',
      studentId: 'ST202600124',
      category: 'Income',
      categoryLabel: 'Family Annual Income Verification',
      source: 'State Revenue Dept API',
      status: 'MISMATCH', // Triggers Manual Review / Deficiency
      confidenceScore: '74.2%',
      timestamp: '2026-09-16 11:20:10',
      remarks: 'Certificate TNIC2025THN99812 has expired on 15-09-2026. Needs renewal to confirm current year income.',
      referenceNo: 'REV-TN-INCOME-DEF01'
    },
    {
      id: 'VR005',
      studentId: 'ST202600124',
      category: 'Academic',
      categoryLabel: 'Academic Progress & Marksheet',
      source: 'DigiLocker NAD / Anna University API',
      status: 'VERIFIED',
      confidenceScore: '99.5%',
      timestamp: '2026-08-14 10:14:30',
      remarks: 'CGPA 8.46 verified directly from digital repository. Student has passed all subjects.',
      referenceNo: 'NAD-AU-2026-IT124'
    },
    {
      id: 'VR006',
      studentId: 'ST202600124',
      category: 'Institution',
      categoryLabel: 'College AISHE Code & Accreditation',
      source: 'AISHE Higher Education Portal',
      status: 'VERIFIED',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:32',
      remarks: 'K. Ramakrishnan College of Engineering verified with active AISHE code C-25148. Autonomous NAAC A Grade.',
      referenceNo: 'AISHE-VAL-C25148'
    },
    {
      id: 'VR007',
      studentId: 'ST202600124',
      category: 'Domicile',
      categoryLabel: 'State Nativity & Domicile',
      source: 'Tamil Nadu e-District Service',
      status: 'VERIFIED',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:35',
      remarks: 'Resident of Theni District, Tamil Nadu for over 15 years.',
      referenceNo: 'TNNAT-2019-1120'
    },
    {
      id: 'VR008',
      studentId: 'ST202600124',
      category: 'Disability',
      categoryLabel: 'PwD Disability Verification',
      source: 'Swavlamban UDID Portal',
      status: 'NOT APPLICABLE',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:36',
      remarks: 'Candidate does not claim Persons with Disabilities (PwD) reservation.',
      referenceNo: 'UDID-NA'
    },
    {
      id: 'VR009',
      studentId: 'ST202600124',
      category: 'OTR',
      categoryLabel: 'One-Time Registration (NSP / OTR)',
      source: 'NSP 2.0 OTR Service',
      status: 'VERIFIED',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:40',
      remarks: 'OTR number OTR2026TN88910 verified with biometric deduplication check cleared.',
      referenceNo: 'NSP-OTR-VAL-88910'
    },
    {
      id: 'VR010',
      studentId: 'ST202600124',
      category: 'APAAR',
      categoryLabel: 'Automated Permanent Academic Account Registry',
      source: 'APAAR / Academic Bank of Credits (ABC)',
      status: 'VERIFIED',
      confidenceScore: '100%',
      timestamp: '2026-08-14 10:14:42',
      remarks: 'APAAR ID 9845-2147-3690 active. All higher education credits linked.',
      referenceNo: 'ABC-AP-98452147'
    },
    {
      id: 'VR011',
      studentId: 'ST202600124',
      category: 'NET/JRF',
      categoryLabel: 'National Eligibility Test / JRF',
      source: 'UGC / NTA Portal',
      status: 'NOT AVAILABLE',
      confidenceScore: '-',
      timestamp: '2026-08-14 10:14:45',
      remarks: 'No UGC-NET record found. Not required for undergraduate Post-Matric scholarship.',
      referenceNo: 'NTA-NET-NONE'
    }
  ],

  // 9. Payment Records Table (PFMS / DBT Bharat - Demo Data)
  payments: [
    {
      id: 'PAY001',
      studentId: 'ST202600124',
      studentName: 'Arun Kumar',
      applicationId: 'PM2025TN941',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship (2025-26)',
      amount: 18500,
      dbtReference: 'DBT2025TN412891',
      pfmsBatchId: 'PFMS/2025/MOTA/TN/994',
      paymentDate: '2025-11-19',
      bankName: 'State Bank of India',
      accountMasked: '•••• •••• 4512',
      ifscCode: 'SBIN0001248',
      status: 'CREDITED',
      statusLabel: 'Credited to Bank Account',
      remarks: 'Central Share (60%) + State Share (40%) successfully disbursed.'
    },
    {
      id: 'PAY002',
      studentId: 'ST202600124',
      studentName: 'Arun Kumar',
      applicationId: 'PM2026TN001',
      schemeCode: 'POST_MATRIC',
      schemeName: 'Post-Matric Scholarship (2026-27)',
      amount: 24000,
      dbtReference: 'DBT2026TN784512',
      pfmsBatchId: 'PFMS/2026/MOTA/TN/PENDING',
      paymentDate: 'Expected 15 Oct 2026',
      bankName: 'State Bank of India',
      accountMasked: '•••• •••• 4512',
      ifscCode: 'SBIN0001248',
      status: 'PROCESSING',
      statusLabel: 'Processing at State Treasury',
      remarks: 'Bill generated. Under fund allocation cycle.'
    },
    {
      id: 'PAY003',
      studentId: 'ST202600127',
      studentName: 'Mangal Marndi',
      applicationId: 'NF2026OD004',
      schemeCode: 'NFST',
      schemeName: 'National Fellowship for ST Students (Q2 2026)',
      amount: 124000,
      dbtReference: 'DBT2026OD991421',
      pfmsBatchId: 'PFMS/2026/MOTA/NFST/081',
      paymentDate: '2026-09-10',
      bankName: 'Canara Bank',
      accountMasked: '•••• •••• 7714',
      ifscCode: 'CNRB0002148',
      status: 'CREDITED',
      statusLabel: 'Credited to Bank Account',
      remarks: 'Quarterly JRF Stipend + Contingency allowance credited.'
    },
    {
      id: 'PAY004',
      studentId: 'ST202600125',
      studentName: 'Priya Kumar',
      applicationId: 'PM2026TN002',
      schemeCode: 'PRE_MATRIC',
      schemeName: 'Pre-Matric Scholarship (2026-27)',
      amount: 4500,
      dbtReference: 'DBT2026TN990142',
      pfmsBatchId: 'PFMS/2026/MOTA/TN/SCH-12',
      paymentDate: 'Expected 26 Sep 2026',
      bankName: 'Indian Overseas Bank',
      accountMasked: '•••• •••• 9921',
      ifscCode: 'IOBA0000412',
      status: 'PROCESSING',
      statusLabel: 'Payment File Sent to RBI APBS',
      remarks: 'Aadhaar payment bridge authorization under transit.'
    }
  ],

  // 10. Proactive Notifications Table
  notifications: [
    {
      id: 'NOTIF001',
      studentId: 'ST202600124',
      title: 'Action Required: Income Certificate Expired',
      titleTa: 'நடவடிக்கை தேவை: வருமானச் சான்றிதழின் காலாவதி முடிந்தது',
      message: 'Your Family Income Certificate expired on 15 September 2026. Please upload a renewed certificate by 28 September 2026 to avoid application rejection.',
      messageTa: 'உங்கள் குடும்ப வருமானச் சான்றிதழ் 15 செப்டம்பர் 2026 அன்று காலாவதியானது. உங்கள் விண்ணப்பம் நிராகரிக்கப்படுவதைத் தவிர்க்க 28 செப்டம்பர் 2026க்குள் புதுப்பிக்கப்பட்ட சான்றிதழைப் பதிவேற்றவும்.',
      category: 'DOCUMENT', // ALL, APPLICATION, DOCUMENT, PAYMENT, DEADLINE, SYSTEM
      type: 'warning',
      timestamp: '2026-09-16 09:30:00',
      read: false,
      actionUrl: 'deficiency-fix',
      actionText: 'Fix Now'
    },
    {
      id: 'NOTIF002',
      studentId: 'ST202600124',
      title: 'Post-Matric Application Moved to State Verification',
      titleTa: 'மெட்ரிக் பிந்தைய உதவித்தொகை விண்ணப்பம் மாநில சரிபார்ப்புக்கு நகர்ந்தது',
      message: 'Your application PM2026TN001 has successfully cleared District Verification and is currently being audited at the State Directorate.',
      messageTa: 'உங்கள் விண்ணப்பம் PM2026TN001 மாவட்ட சரிபார்ப்பை வெற்றிகரமாக முடித்து, தற்போது மாநில இயக்குநரகத்தில் தணிக்கை செய்யப்படுகிறது.',
      category: 'APPLICATION',
      type: 'info',
      timestamp: '2026-09-08 14:15:00',
      read: true,
      actionUrl: 'tracker',
      actionText: 'Track Status'
    },
    {
      id: 'NOTIF003',
      studentId: 'ST202600124',
      title: 'Scholarship Payment of ₹18,500 Credited',
      titleTa: 'ரூ.18,500 உதவித்தொகை உங்கள் வங்கிக் கணக்கில் வரவு வைக்கப்பட்டது',
      message: 'Post-Matric previous installment of ₹18,500 has been credited to your SBI A/C ••4512 via DBT. Ref: DBT2025TN412891.',
      messageTa: 'முந்தைய தவணையான ரூ.18,500 உங்கள் எஸ்பிஐ கணக்கில் ••4512 நேரடி பணப் பரிமாற்றம் மூலம் வரவு வைக்கப்பட்டது.',
      category: 'PAYMENT',
      type: 'success',
      timestamp: '2025-11-19 16:45:00',
      read: true,
      actionUrl: 'payments',
      actionText: 'View Receipt'
    },
    {
      id: 'NOTIF004',
      studentId: 'ST202600124',
      title: 'Top Class Scheme Deadline: 15 November 2026',
      titleTa: 'டாப் கிளாஸ் திட்டத்திற்கான கடைசி தேதி: 15 நவம்பர் 2026',
      message: 'MoTA Top Class Education for ST Students portal closes on 15 November 2026. Check your eligibility if planning higher premier studies.',
      messageTa: 'பழங்குடியினர் விவகார அமைச்சகத்தின் டாப் கிளாஸ் திட்டம் 15 நவம்பர் 2026 அன்று நிறைவடைகிறது.',
      category: 'DEADLINE',
      type: 'info',
      timestamp: '2026-09-10 11:00:00',
      read: false,
      actionUrl: 'discovery',
      actionText: 'Check Eligibility'
    },
    {
      id: 'NOTIF005',
      studentId: 'ST202600124',
      title: 'System: DigiLocker Sync Completed',
      titleTa: 'கணினி: டிஜிலாக்கர் ஒத்திசைவு முடிந்தது',
      message: '4 documents were cross-verified with DigiLocker. 3 verified, 1 certificate flagged for validity renewal.',
      messageTa: '4 ஆவணங்கள் டிஜிலாக்கருடன் சரிபார்க்கப்பட்டன. 3 சரிபார்க்கப்பட்டன, 1 ஆவணம் புதுப்பிக்கப்பட வேண்டும்.',
      category: 'SYSTEM',
      type: 'system',
      timestamp: '2026-09-14 18:20:00',
      read: true,
      actionUrl: 'wallet',
      actionText: 'View Wallet'
    }
  ],

  // 11. Unreached Beneficiary ST Students Table ("Eligible but Not Availing")
  // Identified via mock matching between UDISE+ / APAAR / OTR records and scholarship database
  unreached_students: [
    {
      id: 'UNR001',
      studentId: 'ST20260123',
      name: 'Rameshwar Oraon',
      gender: 'Male',
      state: 'Jharkhand',
      district: 'Gumla',
      stCategory: 'ST (Oraon)',
      institution: 'Gumla Polytechnic College',
      course: 'Diploma Mechanical Engineering',
      familyIncome: 140000,
      incomeStatus: 'Within Post-Matric Limit (<= ₹2.5L)',
      otrStatus: 'Available (OTR2026JH5519)',
      apaarId: '9901-4412-8812',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-18',
      matchConfidence: '96%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR002',
      studentId: 'ST20260124',
      name: 'Anita Bhil',
      gender: 'Female',
      state: 'Rajasthan',
      district: 'Dungarpur',
      stCategory: 'ST (Bhil)',
      institution: 'Govt Girls College, Dungarpur',
      course: 'B.Sc Bio-sciences (1st Year)',
      familyIncome: 110000,
      incomeStatus: 'Within Post-Matric Limit',
      otrStatus: 'Available (OTR2026RJ7741)',
      apaarId: '8814-2201-9941',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-17',
      matchConfidence: '98%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR003',
      studentId: 'ST20260125',
      name: 'Sunil Santhal',
      gender: 'Male',
      state: 'West Bengal',
      district: 'Purulia',
      stCategory: 'ST (Santhal)',
      institution: 'Sidho Kanho Birsha University',
      course: 'M.Sc Physics (1st Year)',
      familyIncome: 160000,
      incomeStatus: 'Eligible for Post-Matric & Top Class',
      otrStatus: 'Available (OTR2026WB1129)',
      apaarId: '4412-8890-3321',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-15',
      matchConfidence: '95%',
      outreachStatus: 'SENT',
      outreachDate: '2026-09-19',
      outreachChannel: 'SMS + App Notification',
      suggestedAction: 'Follow-up'
    },
    {
      id: 'UNR004',
      studentId: 'ST20260126',
      name: 'Kavita Gond',
      gender: 'Female',
      state: 'Madhya Pradesh',
      district: 'Betul',
      stCategory: 'ST (Gond)',
      institution: 'Govt J.H. College Betul',
      course: 'B.A. Political Science',
      familyIncome: 95000,
      incomeStatus: 'Well Within Income Limit',
      otrStatus: 'Available (OTR2026MP9941)',
      apaarId: '6610-3310-8812',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-14',
      matchConfidence: '97%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR005',
      studentId: 'ST20260127',
      name: 'Manoj Munda',
      gender: 'Male',
      state: 'Odisha',
      district: 'Sundargarh',
      stCategory: 'ST (Munda)',
      institution: 'NIT Rourkela',
      course: 'B.Tech Metallurgical Engineering',
      familyIncome: 320000,
      incomeStatus: 'Eligible for Top Class (Limit ₹8 Lakhs)',
      otrStatus: 'Available (OTR2026OD4418)',
      apaarId: '1124-7741-9902',
      scholarshipApplication: 'None',
      potentialScheme: 'Top Class Education for ST Students',
      detectedDate: '2026-09-12',
      matchConfidence: '99%',
      outreachStatus: 'SENT',
      outreachDate: '2026-09-16',
      outreachChannel: 'Email + SMS Mock',
      suggestedAction: 'Awaiting Application'
    },
    {
      id: 'UNR006',
      studentId: 'ST20260128',
      name: 'Bhavna Kol',
      gender: 'Female',
      state: 'Uttar Pradesh',
      district: 'Sonbhadra',
      stCategory: 'ST (Kol)',
      institution: 'Govt Degree College Sonbhadra',
      course: 'B.Com 1st Year',
      familyIncome: 85000,
      incomeStatus: 'Eligible (<= ₹2.5L)',
      otrStatus: 'Available (OTR2026UP8812)',
      apaarId: '7741-5521-3310',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-11',
      matchConfidence: '94%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR007',
      studentId: 'ST20260129',
      name: 'Tsering Angmo',
      gender: 'Female',
      state: 'Ladakh',
      district: 'Leh',
      stCategory: 'ST (Balti / Beda)',
      institution: 'Eliezer Joldan Memorial College, Leh',
      course: 'B.Sc Geology',
      familyIncome: 180000,
      incomeStatus: 'Eligible (<= ₹2.5L)',
      otrStatus: 'Available (OTR2026LK1102)',
      apaarId: '9912-4410-6621',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-10',
      matchConfidence: '95%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR008',
      studentId: 'ST20260130',
      name: 'Dipen Bodo',
      gender: 'Male',
      state: 'Assam',
      district: 'Kokrajhar',
      stCategory: 'ST (Bodo)',
      institution: 'Bodoland University',
      course: 'M.A. History',
      familyIncome: 150000,
      incomeStatus: 'Eligible (<= ₹2.5L)',
      otrStatus: 'Available (OTR2026AS3312)',
      apaarId: '3310-8841-5521',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-09',
      matchConfidence: '96%',
      outreachStatus: 'SENT',
      outreachDate: '2026-09-14',
      outreachChannel: 'SMS Mock',
      suggestedAction: 'Follow-up'
    },
    {
      id: 'UNR009',
      studentId: 'ST20260131',
      name: 'Vungzalian Simte',
      gender: 'Male',
      state: 'Manipur',
      district: 'Churachandpur',
      stCategory: 'ST (Simte)',
      institution: 'Rayburn College',
      course: 'B.A. English',
      familyIncome: 120000,
      incomeStatus: 'Eligible (<= ₹2.5L)',
      otrStatus: 'Available (OTR2026MN7714)',
      apaarId: '5521-9981-4412',
      scholarshipApplication: 'None',
      potentialScheme: 'Post-Matric Scholarship',
      detectedDate: '2026-09-08',
      matchConfidence: '97%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    },
    {
      id: 'UNR010',
      studentId: 'ST20260132',
      name: 'Gajendra Meena',
      gender: 'Male',
      state: 'Rajasthan',
      district: 'Udaipur',
      stCategory: 'ST (Meena)',
      institution: 'IIM Udaipur',
      course: 'MBA (Postgraduate)',
      familyIncome: 450000,
      incomeStatus: 'Eligible for Top Class (<= ₹8L)',
      otrStatus: 'Available (OTR2026RJ9941)',
      apaarId: '2214-6631-8890',
      scholarshipApplication: 'None',
      potentialScheme: 'Top Class Education for ST Students',
      detectedDate: '2026-09-07',
      matchConfidence: '99%',
      outreachStatus: 'PENDING',
      suggestedAction: 'Outreach Required'
    }
  ],

  // 12. Mock Government Integrations Architecture Connectors
  government_integrations: [
    {
      id: 'INT001',
      code: 'DIGILOCKER',
      name: 'DigiLocker Ecosystem',
      purpose: 'Digital retrieval of verified Caste, Income, Domicile, and Academic Marksheets via digital signatures.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 14:30 IST',
      latency: '142 ms',
      recordsChecked: 4,
      verifiedCount: 3,
      pendingCount: 1,
      mismatchCount: 0,
      endpointMock: 'https://api.digitallocker.gov.in/v2/pull/mota/st-records',
      matchingResult: '3 documents matched hash; 1 document flagged for validity expiration.',
      mockPayload: {
        serviceId: 'DL-MOTA-2026',
        issuersSupported: ['Tamil Nadu e-District', 'Jharkhand e-Kalyan', 'CBSE / State Boards', 'NAD Anna Univ'],
        authMechanism: 'OAuth2.0 + SHA256 e-Sign'
      }
    },
    {
      id: 'INT002',
      code: 'APAAR',
      name: 'APAAR / Academic Bank of Credits',
      purpose: 'Verification of Automated Permanent Academic Account Registry IDs and cumulative credits across higher education.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 12:15 IST',
      latency: '185 ms',
      recordsChecked: 1,
      verifiedCount: 1,
      pendingCount: 0,
      mismatchCount: 0,
      endpointMock: 'https://api.abc.gov.in/v1/apaar/verify',
      matchingResult: 'APAAR ID 9845-2147-3690 successfully verified against Ministry of Education registry.',
      mockPayload: {
        apaarId: '9845-2147-3690',
        kycStatus: 'Verified',
        totalCredits: 92,
        academicJourney: 'B.Tech IT (2024-2028)'
      }
    },
    {
      id: 'INT003',
      code: 'UDISE_PLUS',
      name: 'UDISE+ (Unified District Info System for Education)',
      purpose: 'Verification of School ST student enrollment, class progression, and pre-matric rosters from primary to secondary.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '23 Sep 2026, 18:45 IST',
      latency: '210 ms',
      recordsChecked: 12480,
      verifiedCount: 11840,
      pendingCount: 640,
      mismatchCount: 12,
      endpointMock: 'https://udiseplus.gov.in/api/v1/tribal-enrollment',
      matchingResult: 'School level ST records synced; identified 1,420 unreached pre-matric potential students.',
      mockPayload: {
        districtCoverage: 'All 766 Districts',
        dataSchema: 'UDISE-ST-ROSTER-V3'
      }
    },
    {
      id: 'INT004',
      code: 'AISHE',
      name: 'AISHE (All India Survey on Higher Education)',
      purpose: 'Instant validation of college/university AISHE codes, recognition status, and accredited courses.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 11:00 IST',
      latency: '115 ms',
      recordsChecked: 820,
      verifiedCount: 815,
      pendingCount: 5,
      mismatchCount: 0,
      endpointMock: 'https://aishe.gov.in/api/v2/institution-lookup',
      matchingResult: 'College C-25148 validated as Autonomous Engineering Institution.',
      mockPayload: {
        aisheCode: 'C-25148',
        institutionName: 'K. Ramakrishnan College of Engineering',
        naacAccreditation: 'A Grade',
        autonomous: true
      }
    },
    {
      id: 'INT005',
      code: 'UIDAI',
      name: 'UIDAI Aadhaar e-KYC & Demographic Service',
      purpose: 'Aadhaar biometric deduplication and masked identity verification via authorized ASA/KUA gateways.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 15:00 IST',
      latency: '95 ms',
      recordsChecked: 1,
      verifiedCount: 1,
      pendingCount: 0,
      mismatchCount: 0,
      endpointMock: 'https://resident.uidai.gov.in/api/v3/auth-mock',
      matchingResult: 'Masked UID XXXX-XXXX-3891 authenticated. Biometrics locked and mobile OTP validated.',
      mockPayload: {
        aadhaarToken: 'SHA256-TOKEN-9941',
        demographicMatchRate: 100,
        mode: 'Simulated Sandbox'
      }
    },
    {
      id: 'INT006',
      code: 'STATE_EDISTRICT',
      name: 'State e-District / e-Kalyan Gateways',
      purpose: 'State Revenue Portal connectivity for Caste, Income, and Domicile certificate verification directly with Tahsildars.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 13:20 IST',
      latency: '260 ms',
      recordsChecked: 3,
      verifiedCount: 2,
      pendingCount: 0,
      mismatchCount: 1,
      endpointMock: 'https://edistrict.tn.gov.in/api/v1/cert-validation',
      matchingResult: 'Income certificate TNIC2025THN99812 verified expired. Domicile & ST certificates verified genuine.',
      mockPayload: {
        state: 'Tamil Nadu',
        department: 'Revenue Administration & Tribal Welfare',
        apiProtocol: 'REST / XML-JSON Bridge'
      }
    },
    {
      id: 'INT007',
      code: 'NSP',
      name: 'National Scholarship Portal (NSP 2.0 / OTR)',
      purpose: 'Interoperability with Central NSP OTR numbers, de-duplication across other central schemes.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 09:30 IST',
      latency: '190 ms',
      recordsChecked: 1,
      verifiedCount: 1,
      pendingCount: 0,
      mismatchCount: 0,
      endpointMock: 'https://scholarships.gov.in/api/otr/verify-mock',
      matchingResult: 'OTR2026TN88910 verified. No dual claiming detected in Ministry of Minority Affairs or Social Justice.',
      mockPayload: {
        otr: 'OTR2026TN88910',
        activeFellowshipsInOtherPortals: 0,
        dedupFlag: 'PASSED'
      }
    },
    {
      id: 'INT008',
      code: 'SFMP',
      name: 'SFMP (Scholarship / Fellowship Management Portal)',
      purpose: 'MoTA internal fellowship processing, monthly stipend tracking for Ph.D. scholars under NFST.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 08:00 IST',
      latency: '170 ms',
      recordsChecked: 120,
      verifiedCount: 118,
      pendingCount: 2,
      mismatchCount: 0,
      endpointMock: 'https://fellowship.tribal.gov.in/api/v2/fellow-tracker',
      matchingResult: 'Fellowship roster synchronized with UGC nodal officer sign-offs.',
      mockPayload: {
        totalNFSTScholars: 2450,
        activeStipendCycles: 'Monthly'
      }
    },
    {
      id: 'INT009',
      code: 'NOS_PORTAL',
      name: 'NOS (National Overseas Scholarship Portal)',
      purpose: 'Integration with Ministry of External Affairs and foreign admission letter authenticity services.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '23 Sep 2026, 16:30 IST',
      latency: '310 ms',
      recordsChecked: 35,
      verifiedCount: 28,
      pendingCount: 7,
      mismatchCount: 0,
      endpointMock: 'https://overseas.tribal.gov.in/api/v1/application-link',
      matchingResult: 'Foreign admissions verified with QS Top 500 roster.',
      mockPayload: {
        annualSlotsAvailable: 20,
        applicationsInPipeline: 35
      }
    },
    {
      id: 'INT010',
      code: 'PFMS',
      name: 'PFMS / DBT Bharat Payment Gateway',
      purpose: 'Direct Benefit Transfer (DBT) payment file generation, credit confirmation, and Aadhaar Payment Bridge status.',
      badge: 'Prototype Integration – API Ready',
      status: 'Mock Connected',
      statusColor: 'green',
      lastSync: '24 Sep 2026, 15:10 IST',
      latency: '130 ms',
      recordsChecked: 18420,
      verifiedCount: 18420,
      pendingCount: 0,
      mismatchCount: 0,
      endpointMock: 'https://pfms.nic.in/api/v3/dbt-batch-mock',
      matchingResult: 'Aadhaar payment bridge seeded accounts verified. Success rate 99.4%.',
      mockPayload: {
        totalDisbursedFY26: '₹ 142.8 Crores',
        gatewayStatus: 'OPERATIONAL'
      }
    }
  ],

  // 13. Admin Notes Table
  admin_notes: [
    {
      id: 'NOTE001',
      applicationId: 'PM2026TN001',
      studentId: 'ST202600124',
      officer: 'S. Meenakshi (State Nodal Verification Officer, TN)',
      date: '2026-09-16 11:45',
      note: 'Income certificate TNIC2025THN99812 expired on 15 September 2026. System has issued deficiency alert to student with deadline 28 September 2026. Application held in State Verification queue pending renewal.',
      actionTaken: 'DEFICIENCY_ISSUED'
    },
    {
      id: 'NOTE002',
      applicationId: 'PM2026JH018',
      studentId: 'ST202600130',
      officer: 'Dr. Rajeshwar Singh (MoTA Joint Secretary)',
      date: '2026-09-10 14:10',
      note: 'Assigned to Khunti District Welfare Officer for physical home verification of UDID guardian name variation. Candidate should not face rejection without fair hearing.',
      actionTaken: 'MANUAL_REVIEW_ASSIGNED'
    }
  ],

  // 14. Outreach Records Table
  outreach_records: [
    {
      id: 'OUT001',
      studentId: 'ST20260125',
      studentName: 'Sunil Santhal',
      date: '2026-09-19',
      channels: ['App Notification', 'Mock SMS'],
      message: 'You may be eligible for a Ministry of Tribal Affairs scholarship. Please check your eligibility and application status through the TRIBALONE platform.',
      status: 'DELIVERED',
      response: 'Clicked Link (Profile Started)'
    },
    {
      id: 'OUT002',
      studentId: 'ST20260127',
      studentName: 'Manoj Munda',
      date: '2026-09-16',
      channels: ['Email Mock', 'Mock SMS'],
      message: 'You may be eligible for a Ministry of Tribal Affairs Top Class scholarship at NIT Rourkela. Please check your eligibility through TRIBALONE.',
      status: 'DELIVERED',
      response: 'Email Opened'
    },
    {
      id: 'OUT003',
      studentId: 'ST20260130',
      studentName: 'Dipen Bodo',
      date: '2026-09-14',
      channels: ['Mock SMS'],
      message: 'Ministry of Tribal Affairs: You are potentially eligible for Post-Matric ST Scholarship. Apply via TRIBALONE before 30 Nov 2026.',
      status: 'DELIVERED',
      response: 'Pending Action'
    }
  ],

  // 15. Real-Time Coverage Statistics (Demo Data for Admin Dashboard & Analytics)
  coverageStats: {
    totalRegisteredST: 24820,
    scholarshipRecipients: 18420,
    potentiallyEligibleNotApplying: 2180,
    noApplication: 6400,
    pendingVerification: 2840,
    totalSanctionedAmount: '₹ 142.80 Cr',
    totalDisbursedAmount: '₹ 118.45 Cr',
    totalDeficiencies: 342,
    resolvedDeficiencies: 289,
    schemeBreakdown: [
      { name: 'Post-Matric Scholarship', count: 12450, amount: '₹ 48.2 Cr', color: '#1338BE' },
      { name: 'Pre-Matric Scholarship', count: 7850, amount: '₹ 15.6 Cr', color: '#046A38' },
      { name: 'Top Class Education', count: 2120, amount: '₹ 38.4 Cr', color: '#FF671F' },
      { name: 'National Fellowship (NFST)', count: 1980, amount: '₹ 32.5 Cr', color: '#7C3AED' },
      { name: 'National Overseas (NOS)', count: 420, amount: '₹ 8.1 Cr', color: '#0D9488' }
    ],
    stateBreakdown: [
      { state: 'Jharkhand', totalST: 4850, recipients: 3920, unreached: 420 },
      { state: 'Odisha', totalST: 4420, recipients: 3510, unreached: 380 },
      { state: 'Madhya Pradesh', totalST: 5120, recipients: 3890, unreached: 510 },
      { state: 'Tamil Nadu', totalST: 1980, recipients: 1640, unreached: 120 },
      { state: 'Rajasthan', totalST: 3420, recipients: 2610, unreached: 340 },
      { state: 'Assam & NE States', totalST: 3120, recipients: 2140, unreached: 290 },
      { state: 'Others', totalST: 1910, recipients: 710, unreached: 120 }
    ],
    monthlyApplications: [
      { month: 'Apr', count: 620 },
      { month: 'May', count: 1140 },
      { month: 'Jun', count: 2850 },
      { month: 'Jul', count: 6400 },
      { month: 'Aug', count: 8900 },
      { month: 'Sep', count: 4910 }
    ],
    bottlenecks: [
      { stage: 'Institute Verification', count: 1240, avgDays: '8 days', status: 'Healthy' },
      { stage: 'District Verification', count: 890, avgDays: '14 days', status: 'Moderate' },
      { stage: 'State Verification', count: 580, avgDays: '21 days', status: 'Bottleneck' },
      { stage: 'MoTA Sanction', count: 130, avgDays: '6 days', status: 'Healthy' }
    ]
  }
};

/**
 * DB Storage Helper with LocalStorage Persistence
 */
export class Database {
  constructor() {
    this.init();
  }

  init() {
    let saved = null;
    try {
      if (typeof localStorage !== 'undefined') {
        saved = localStorage.getItem(DB_KEY);
      }
    } catch (e) {
      console.warn('LocalStorage not available in this environment:', e);
    }

    if (saved) {
      try {
        this.data = JSON.parse(saved);
        // Merge in any missing keys from initialData
        for (const key in initialData) {
          if (!this.data[key]) {
            this.data[key] = JSON.parse(JSON.stringify(initialData[key]));
          }
        }
      } catch (e) {
        console.error('Error parsing localStorage, resetting to initial seed:', e);
        this.reset();
      }
    } else {
      this.reset();
    }
  }

  reset() {
    this.data = JSON.parse(JSON.stringify(initialData));
    this.save();
  }

  save() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(DB_KEY, JSON.stringify(this.data));
      }
    } catch (e) {
      console.error('LocalStorage save error:', e);
    }
  }

  saveToStorage() {
    this.save();
  }

  // Auth & Session State
  getIsLoggedIn() {
    return !!this.data.isLoggedIn;
  }

  setIsLoggedIn(status) {
    this.data.isLoggedIn = !!status;
    this.save();
  }

  // Getters & Setters
  getStudent(id) {
    return (this.data.students || []).find(s => s.id === id) || (this.data.students || [])[0] || {};
  }

  getCurrentStudent() {
    return this.getStudent(this.data.currentStudentId);
  }

  setCurrentStudent(id) {
    this.data.currentStudentId = id;
    this.save();
  }

  getCurrentRole() {
    return this.data.currentRole || 'student';
  }

  setCurrentRole(role) {
    this.data.currentRole = role;
    this.save();
  }

  findApplication(query) {
    if (!query) return null;
    const q = String(query).trim().toUpperCase();
    return (this.data.applications || []).find(a => 
      (a.id && a.id.toUpperCase() === q) ||
      (a.id && a.id.toUpperCase().includes(q)) ||
      (a.studentId && a.studentId.toUpperCase() === q) ||
      (a.studentName && a.studentName.toUpperCase().includes(q))
    ) || null;
  }

  getCurrentLanguage() {
    return this.data.currentLanguage;
  }

  setCurrentLanguage(lang) {
    this.data.currentLanguage = lang;
    this.save();
  }

  getViewportMode() {
    return this.data.viewportMode;
  }

  setViewportMode(mode) {
    this.data.viewportMode = mode;
    this.save();
  }

  getApplications(studentId = null) {
    if (studentId) {
      return this.data.applications.filter(a => a.studentId === studentId);
    }
    return this.data.applications;
  }

  getApplicationById(appId) {
    return this.data.applications.find(a => a.id === appId);
  }

  getDocuments(studentId = null) {
    if (studentId) {
      return this.data.documents.filter(d => d.studentId === studentId);
    }
    return this.data.documents;
  }

  getPayments(studentId = null) {
    if (studentId) {
      return this.data.payments.filter(p => p.studentId === studentId);
    }
    return this.data.payments;
  }

  getNotifications(studentId = null) {
    if (studentId) {
      return this.data.notifications.filter(n => n.studentId === studentId);
    }
    return this.data.notifications;
  }

  getVerificationRecords(studentId = null) {
    if (studentId) {
      return this.data.verification_records.filter(v => v.studentId === studentId);
    }
    return this.data.verification_records;
  }

  getUnreachedStudents() {
    return this.data.unreached_students;
  }

  getGovernmentIntegrations() {
    return this.data.government_integrations;
  }

  getScholarshipRules() {
    return this.data.scholarship_rules;
  }

  getAdminNotes(appId = null) {
    if (appId) {
      return this.data.admin_notes.filter(n => n.applicationId === appId);
    }
    return this.data.admin_notes;
  }

  // Mutation: Submit New Application
  createApplication(appData) {
    this.data.applications.unshift(appData);
    this.save();
    return appData;
  }

  // Mutation: Upload / Replace Document
  updateDocument(docId, updates) {
    const index = this.data.documents.findIndex(d => d.id === docId);
    if (index !== -1) {
      this.data.documents[index] = { ...this.data.documents[index], ...updates };
      this.save();
      return this.data.documents[index];
    }
    return null;
  }

  // Mutation: Resolve Deficiency
  resolveDeficiency(appId, newDocDetails) {
    const app = this.data.applications.find(a => a.id === appId);
    if (app && app.activeDeficiency) {
      app.deficiencyResolved = true;
      app.deficienciesCount = 0;
      app.timeline.push({
        stage: 'Deficiency Rectified',
        status: 'COMPLETED',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        remarks: 'Student uploaded renewed income certificate. System verified match.'
      });
      // Also update student verification badge
      const student = this.getStudent(app.studentId);
      if (student && student.verificationBadges) {
        student.verificationBadges.income = 'VERIFIED';
      }
      // Also update the document in wallet
      const doc = this.data.documents.find(d => d.studentId === app.studentId && d.docCode === 'INCOME_CERT');
      if (doc) {
        doc.status = 'VERIFIED';
        doc.statusColor = 'green';
        doc.issuedDate = new Date().toISOString().split('T')[0];
        doc.expiryDate = '2027-09-24';
        doc.certNumber = 'TNIC2026THN' + Math.floor(10000 + Math.random() * 90000);
      }
      this.save();
      return true;
    }
    return false;
  }

  // Mutation: Officer updates manual review
  updateManualReview(appId, decision, remarks, officerName) {
    const app = this.data.applications.find(a => a.id === appId);
    if (app) {
      if (decision === 'APPROVE') {
        app.status = 'UNDER_VERIFICATION';
        app.currentStage = 'State Verification';
        app.currentStageIndex = 3;
      } else if (decision === 'REJECT') {
        app.status = 'REJECTED';
      } else if (decision === 'REQUEST_DOC') {
        app.status = 'NEEDS_ACTION';
      }
      this.data.admin_notes.unshift({
        id: 'NOTE' + Date.now(),
        applicationId: appId,
        studentId: app.studentId,
        officer: officerName || 'Verification Officer',
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        note: `Manual Review Decision: ${decision}. Remarks: ${remarks}`,
        actionTaken: decision
      });
      this.save();
      return true;
    }
    return false;
  }

  // Mutation: Send Outreach
  sendOutreach(unreachedId, channel = 'App Notification + SMS') {
    const item = this.data.unreached_students.find(u => u.id === unreachedId);
    if (item) {
      item.outreachStatus = 'SENT';
      item.outreachDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      item.outreachChannel = channel;
      this.data.outreach_records.unshift({
        id: 'OUT' + Date.now(),
        studentId: item.studentId,
        studentName: item.name,
        date: item.outreachDate,
        channels: [channel],
        message: 'You may be eligible for a Ministry of Tribal Affairs scholarship. Please check your eligibility and application status through the TRIBALONE platform.',
        status: 'DELIVERED',
        response: 'Pending Student Login'
      });
      this.save();
      return true;
    }
    return false;
  }

  // Mutation: Update Scholarship Rule
  updateRule(ruleId, updates) {
    const rule = this.data.scholarship_rules.find(r => r.id === ruleId);
    if (rule) {
      Object.assign(rule, updates, { lastUpdated: new Date().toISOString().split('T')[0] });
      this.save();
      return rule;
    }
    return null;
  }

  // Session & Login State
  getIsLoggedIn() {
    return this.data.isLoggedIn === true;
  }

  setIsLoggedIn(status, role = 'student', studentId = null) {
    this.data.isLoggedIn = status;
    if (role) this.data.currentRole = role;
    if (studentId) this.data.currentStudentId = studentId;
    this.save();
  }

  getSelectedStateFilter() {
    return this.data.selectedStateFilter || 'ALL';
  }

  setSelectedStateFilter(state) {
    this.data.selectedStateFilter = state;
    this.save();
  }

  // Combined State & Central Government Scholarships
  getAllScholarships(stateFilter = null, levelFilter = null) {
    const filterState = stateFilter || this.getSelectedStateFilter();
    let central = (this.data.scholarships || []).map(s => ({ ...s, governmentType: 'CENTRAL', state: 'All India (Central)' }));
    let stateList = this.data.state_scholarships || [];

    if (filterState && filterState !== 'ALL' && filterState !== 'All India') {
      stateList = stateList.filter(s => s.state.toLowerCase() === filterState.toLowerCase());
    }

    let combined = [...central, ...stateList];

    if (levelFilter && levelFilter !== 'ALL') {
      const lf = levelFilter.toLowerCase();
      combined = combined.filter(s => {
        const l = (s.level || '').toLowerCase();
        if (lf === 'school') return l.includes('class') || l.includes('pre-matric') || l.includes('ix') || l.includes('x') || l.includes('secondary');
        if (lf === 'college') return l.includes('degree') || l.includes('post-matric') || l.includes('diploma') || l.includes('pg') || l.includes('undergraduate');
        if (lf === 'top_class') return l.includes('top class') || l.includes('premier') || l.includes('iit') || l.includes('nit');
        if (lf === 'overseas') return l.includes('overseas') || l.includes('foreign') || l.includes('fellowship') || l.includes('ph.d');
        return true;
      });
    }

    return combined;
  }

  // Official Government Database Live Fetch Simulator
  fetchOfficialGovernmentData(type, identifier, extra = {}) {
    const cleanId = (identifier || '').trim().toUpperCase();
    
    if (type === 'school') {
      // Official UDISE+ / APAAR / State Tribal Registry Record Simulation
      const samples = [
        {
          identifier: cleanId || 'PEN-2026-98412',
          studentName: 'Sanjay Marandi',
          fatherName: 'Babulal Marandi',
          motherName: 'Sumitra Marandi',
          dob: '2010-04-12',
          gender: 'Male',
          schoolName: 'Govt. Tribal High School, Megamalai',
          udiseCode: '33250100418',
          schoolType: 'Government Tribal Residential (GTRS)',
          currentClass: 'Class 9',
          stream: 'General Secondary',
          previousYearMarks: '86.4%',
          category: 'ST',
          stSubTribe: 'Malayali ST',
          casteCertNo: 'TNST2020THN08124',
          casteCertAuthority: 'Tahsildar, Uthamapalayam, Tamil Nadu',
          casteVerifiedDate: '2020-07-14',
          rationCardNo: 'TN-33-08-99412',
          familyAnnualIncome: 140000,
          incomeCertNo: 'TNIC2026THN77102',
          incomeCertAuthority: 'Revenue Inspector / e-District Tamil Nadu',
          incomeExpiryDate: '2027-04-30',
          bankName: 'State Bank of India',
          accountMasked: '•••• •••• 7120',
          ifscCode: 'SBIN0001248',
          aadhaarLinked: true,
          dbtSeeded: true,
          digilockerStatus: 'VERIFIED_OFFICIAL'
        },
        {
          identifier: cleanId || 'APAAR-7712-4410',
          studentName: 'Anil Kumar Soren',
          fatherName: 'Shibu Soren',
          motherName: 'Rani Soren',
          dob: '2009-08-25',
          gender: 'Male',
          schoolName: 'Birsa Munda Model Tribal Residential School, Ranchi',
          udiseCode: '20140200891',
          schoolType: 'Eklavya Model Residential School (EMRS)',
          currentClass: 'Class 10',
          stream: 'Secondary High School',
          previousYearMarks: '91.2%',
          category: 'ST',
          stSubTribe: 'Santhal',
          casteCertNo: 'JHST2019RNC04189',
          casteCertAuthority: 'Sub-Divisional Officer, Ranchi, Jharkhand',
          casteVerifiedDate: '2019-11-20',
          rationCardNo: 'JH-20-14-88412',
          familyAnnualIncome: 110000,
          incomeCertNo: 'JHIC2026RNC55120',
          incomeCertAuthority: 'Circle Officer, Kanke, Jharkhand',
          incomeExpiryDate: '2027-06-30',
          bankName: 'Bank of India',
          accountMasked: '•••• •••• 9924',
          ifscCode: 'BKID0004910',
          aadhaarLinked: true,
          dbtSeeded: true,
          digilockerStatus: 'VERIFIED_OFFICIAL'
        }
      ];
      return samples[0];
    }

    if (type === 'college') {
      // Official ABC (Academic Bank of Credits) / AISHE / DigiLocker Registry Simulation
      return {
        identifier: cleanId || 'ABC-984-214-771',
        studentName: extra.name || 'Manish Kerketta',
        fatherName: 'Mangal Kerketta',
        motherName: 'Reena Kerketta',
        dob: '2005-03-18',
        gender: 'Male',
        institution: 'National Institute of Technology (NIT) Trichy',
        institutionType: 'Centrally Funded Technical Institute (CFTI / Top Class)',
        aisheCode: 'U-0467',
        course: 'B.Tech Electrical & Electronics Engineering',
        courseLevel: 'Undergraduate (Degree)',
        currentYear: '1st Year (Fresh Batch 2026-27)',
        academicYear: '2026-2027',
        marksPercentage: '92.8% in Higher Secondary (10+2 Science)',
        boardName: 'Central Board of Secondary Education (CBSE)',
        category: 'ST',
        stSubTribe: 'Oraon',
        pvtg: false,
        casteCertNo: 'JHST2021RNC99120',
        casteCertAuthority: 'e-District Digital Repository, Govt of Jharkhand',
        casteVerifiedDate: '2021-09-12',
        familyAnnualIncome: 185000,
        incomeCertNo: 'JHIC2026RNC88214',
        incomeCertAuthority: 'Revenue Department / DigiLocker Verified',
        incomeExpiryDate: '2027-07-31',
        bankName: 'State Bank of India',
        accountMasked: '•••• •••• 5510',
        ifscCode: 'SBIN0001617',
        aadhaarLinked: true,
        dbtSeeded: true,
        otrNumber: 'OTR2026GOV' + Math.floor(100000 + Math.random() * 900000),
        apaarId: '8841-2210-' + Math.floor(1000 + Math.random() * 9000),
        digilockerStatus: 'VERIFIED_OFFICIAL'
      };
    }

    return null;
  }

  // Mutation: Register New Student into Database (School or College)
  registerStudent(regData) {
    const newId = 'ST2026' + (this.data.students.length + 125);
    const newStudent = {
      id: newId,
      name: regData.studentName,
      gender: regData.gender || 'Not Specified',
      dob: regData.dob || '2008-01-01',
      mobile: regData.mobile || '+91 98421 00000',
      email: regData.email || `${regData.studentName.toLowerCase().replace(/\s+/g, '.')}.st26@gmail.com`,
      state: regData.state || 'Tamil Nadu',
      district: regData.district || 'Theni',
      category: 'ST',
      stSubTribe: regData.stSubTribe || 'ST Community',
      pvtg: !!regData.pvtg,
      pvtgTribe: regData.pvtgTribe || null,
      institution: regData.institution || regData.schoolName || 'Government Institution',
      institutionType: regData.institutionType || (regData.track === 'school' ? 'Government School' : 'Affiliated College'),
      aisheCode: regData.aisheCode || null,
      udiseCode: regData.udiseCode || null,
      course: regData.course || (regData.track === 'school' ? 'Secondary Education' : 'Undergraduate Degree'),
      courseLevel: regData.courseLevel || (regData.track === 'school' ? 'Secondary (Class 9-10)' : 'Undergraduate'),
      academicYear: '2026-2027',
      currentYear: regData.currentClass || regData.currentYear || '1st Year',
      marksPercentage: parseFloat(regData.marksPercentage) || 85.0,
      familyIncome: parseInt(regData.familyAnnualIncome || regData.familyIncome) || 150000,
      disabilityStatus: regData.disabilityStatus || 'No',
      disabilityPercentage: 0,
      otrNumber: regData.otrNumber || ('OTR2026TN' + Math.floor(10000 + Math.random() * 90000)),
      otrStatus: 'VERIFIED',
      apaarId: regData.apaarId || regData.identifier || ('9845-' + Math.floor(1000 + Math.random() * 9000) + '-3310'),
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: regData.accountMasked || '•••• •••• ' + Math.floor(1000 + Math.random() * 9000),
      bankName: regData.bankName || 'State Bank of India',
      ifscCode: regData.ifscCode || 'SBIN0001248',
      dbtSeeded: true,
      parentId: null,
      profileCompletion: 100,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: regData.pvtg ? 'VERIFIED' : 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    };

    // Add to students list
    this.data.students.unshift(newStudent);

    // Create verified wallet documents for this student
    const docTime = new Date().toISOString().split('T')[0];
    const newDocs = [
      {
        id: 'DOC' + Date.now() + '1',
        studentId: newId,
        docCode: 'AADHAAR',
        name: 'Aadhaar Card (e-KYC Verified)',
        certNumber: 'UIDAI-XXXX-XXXX-9912',
        issuedAuthority: 'Unique Identification Authority of India (UIDAI)',
        issuedDate: '2022-01-10',
        expiryDate: 'Lifetime',
        status: 'VERIFIED',
        statusColor: 'green',
        source: 'UIDAI Aadhaar OTP eKYC',
        confidenceScore: '100%'
      },
      {
        id: 'DOC' + Date.now() + '2',
        studentId: newId,
        docCode: 'ST_CASTE_CERT',
        name: 'ST Community / Tribe Certificate',
        certNumber: regData.casteCertNo || ('TNST2022THN' + Math.floor(10000 + Math.random() * 90000)),
        issuedAuthority: regData.casteCertAuthority || 'Revenue Divisional Officer',
        issuedDate: regData.casteVerifiedDate || '2022-06-15',
        expiryDate: 'Lifetime',
        status: 'VERIFIED',
        statusColor: 'green',
        source: 'State e-District / DigiLocker',
        confidenceScore: '99.4%'
      },
      {
        id: 'DOC' + Date.now() + '3',
        studentId: newId,
        docCode: 'INCOME_CERT',
        name: 'Annual Family Income Certificate',
        certNumber: regData.incomeCertNo || ('TNIC2026THN' + Math.floor(10000 + Math.random() * 90000)),
        issuedAuthority: regData.incomeCertAuthority || 'Tahsildar / Revenue Inspector',
        issuedDate: docTime,
        expiryDate: '2027-05-30',
        status: 'VERIFIED',
        statusColor: 'green',
        source: 'e-District Revenue Service',
        confidenceScore: '98.8%'
      },
      {
        id: 'DOC' + Date.now() + '4',
        studentId: newId,
        docCode: 'ACADEMIC_MARKS',
        name: regData.track === 'school' ? 'Class 8 / 9 Academic Marksheet' : 'Class 12 / Higher Secondary Marksheet',
        certNumber: 'BRD2026MARKS' + Math.floor(1000 + Math.random() * 9000),
        issuedAuthority: 'State Board of School Examination / DigiLocker',
        issuedDate: '2026-05-20',
        expiryDate: 'Permanent',
        status: 'VERIFIED',
        statusColor: 'green',
        source: 'Academic Bank of Credits / DigiLocker',
        confidenceScore: '99.6%'
      }
    ];

    this.data.documents.unshift(...newDocs);

    // Also auto-generate an initial draft application
    const defaultScheme = regData.track === 'school' ? 'PRE_MATRIC' : 'POST_MATRIC';
    const newAppId = (regData.track === 'school' ? 'PM' : 'POST') + '2026' + newId.substring(6);
    const newApp = {
      id: newAppId,
      studentId: newId,
      studentName: newStudent.name,
      schemeCode: defaultScheme,
      schemeName: regData.track === 'school' ? 'Pre-Matric Scholarship for ST Students' : 'Post-Matric Scholarship for ST Students',
      academicYear: '2026-2027',
      submittedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      currentStage: 'Institute Nodal Verification',
      currentStageIndex: 1,
      totalStages: 5,
      status: 'UNDER_VERIFICATION',
      sanctionAmount: regData.track === 'school' ? 7000 : 28000,
      course: newStudent.course,
      institution: newStudent.institution,
      deficienciesCount: 0,
      activeDeficiency: null,
      timeline: [
        { stage: 'Application Registered via Government Fetch', status: 'COMPLETED', date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), remarks: 'Official verified data fetched and application submitted.' },
        { stage: 'Institute Verification', status: 'IN_PROGRESS', date: 'Pending', remarks: 'Awaiting principal/nodal officer e-signature.' }
      ]
    };
    this.data.applications.unshift(newApp);

    // Set logged in
    this.setIsLoggedIn(true, 'student', newId);
    return newStudent;
  }

  // Cross-system application finder for JAGO Chatbot
  findApplication(query) {
    if (!query) return null;
    const clean = query.trim().toUpperCase().replace(/[^A-Z0-9-]/g, '');
    
    // Direct match by ID
    let match = this.data.applications.find(a => a.id.toUpperCase() === clean);
    if (match) return match;

    // Substring match by ID
    match = this.data.applications.find(a => a.id.toUpperCase().includes(clean) || clean.includes(a.id.toUpperCase()));
    if (match) return match;

    // Match by Student ID
    match = this.data.applications.find(a => a.studentId.toUpperCase() === clean);
    if (match) return match;

    // Match by Student Name substring
    const cleanName = query.trim().toLowerCase();
    match = this.data.applications.find(a => a.studentName.toLowerCase().includes(cleanName));
    return match || null;
  }

  // Dispatch interactive outreach campaign
  dispatchOutreachCampaign(campaignData) {
    const campaignId = 'CMP' + Date.now();
    const newCampaign = {
      id: campaignId,
      title: campaignData.title || 'Targeted Tribal Awareness Drive',
      targetAudience: campaignData.targetAudience || 'Unreached ST Beneficiaries',
      state: campaignData.state || 'All India',
      channel: campaignData.channels ? campaignData.channels.join(' + ') : 'SMS + In-App Push',
      recipientsCount: campaignData.recipientsCount || 1250,
      deliveredCount: campaignData.recipientsCount || 1242,
      responseRate: '62.4%',
      dateDispatched: new Date().toISOString().split('T')[0],
      status: 'ACTIVE',
      message: campaignData.message || 'Important scholarship update from Ministry of Tribal Affairs.'
    };

    if (!this.data.outreach_campaigns) this.data.outreach_campaigns = [];
    this.data.outreach_campaigns.unshift(newCampaign);

    // Also dispatch to unreached students
    const targetState = (campaignData.state || '').toLowerCase();
    let count = 0;
    (this.data.unreached_students || []).forEach(u => {
      if (targetState === 'all india' || targetState === 'all' || u.state.toLowerCase() === targetState) {
        u.outreachStatus = 'SENT';
        u.outreachDate = newCampaign.dateDispatched;
        u.outreachChannel = newCampaign.channel;
        count++;
      }
    });

    // Add notification to active student
    if (this.data.currentStudentId) {
      this.data.notifications.unshift({
        id: 'NOTIF' + Date.now(),
        studentId: this.data.currentStudentId,
        title: '📢 ' + newCampaign.title,
        message: newCampaign.message,
        date: 'Just now',
        read: false,
        type: 'campaign'
      });
    }

    this.save();
    return newCampaign;
  }
}

export const db = new Database();
