/**
 * TRIBALONE - Multilingual i18n Dictionary
 * Supporting 14 Indian & Tribal Languages:
 * English (en), हिन्दी (hi), தமிழ் (ta), తెలుగు (te), ಕನ್ನಡ (kn), മലയാളം (ml),
 * বাংলা (bn), मराठी (mr), ગુજરાતી (gu), ଓଡ଼ିଆ (or), ਪੰਜਾਬੀ (pa), অসমীয়া (as),
 * ᱥᱟᱱᱛᱟᱲᱤ (sat - Santali), गोंडी (gon - Gondi)
 */

export const languageList = [
  { code: 'en', name: 'English', native: 'English', script: 'Latin' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', script: 'Devanagari' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', script: 'Tamil' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', script: 'Telugu' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', script: 'Kannada' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', script: 'Malayalam' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', script: 'Bengali' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', script: 'Devanagari' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', script: 'Gujarati' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', script: 'Odia' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', script: 'Gurmukhi' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', script: 'Bengali' },
  { code: 'sat', name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', script: 'Ol Chiki' },
  { code: 'gon', name: 'Gondi', native: 'गोंडी', script: 'Devanagari' }
];

export const translations = {
  en: {
    // Header & Meta
    appTitle: 'TRIBALONE',
    tagline: 'One Student. One Profile. One Scholarship View.',
    govName: 'Ministry of Tribal Affairs',
    govSubtitle: 'Government of India',
    problemStatement: 'Problem Statement ID: 26238 | National Tribal Scholarship Portal',
    apiReadyBadge: 'DigiLocker & APAAR API Integrated',
    demoDisclaimer: 'Official Portal of Ministry of Tribal Affairs (MoTA). All data protected under Digital Personal Data Protection Act.',
    demoPaymentDisclaimer: 'DEMO PAYMENT DATA — FOR PROTOTYPE PURPOSES ONLY',

    // Front Login & Roles
    frontLoginTitle: 'Unified National Tribal Scholarship Access',
    frontLoginSubtitle: 'Single window authentication for Scheduled Tribe students, institutes, and state welfare officers',
    loginAsStudent: 'Student Login',
    loginAsInstitute: 'Institute Login',
    loginAsOfficer: 'Officer Login',
    loginAsParent: 'Parent / Guardian',
    newRegistration: 'New Registration',
    newSchoolRegister: 'School Student (Class 9-10)',
    newCollegeRegister: 'College / Higher Education',
    loginBtn: 'Sign In to Portal',
    quickDemoLogin: 'Quick Demo Login',
    logoutBtn: 'Logout / Switch Portal',

    // Role Switcher labels
    roleStudent: 'Student',
    roleParent: 'Parent / Family',
    roleAdmin: 'MoTA Admin',
    roleVerification: 'Verification Officer',
    roleInstitute: 'Institute Nodal Officer',
    switchRole: 'Switch Role',

    // Viewport Mode
    viewMobile: 'Mobile App View',
    viewDesktop: 'Desktop Portal',

    // Navigation
    navHome: 'Home',
    navScholarships: 'Scholarships',
    navDiscovery: 'Eligibility Finder',
    navApplications: 'Applications',
    navWallet: 'My Documents',
    navPayments: 'Payments & DBT',
    navJago: 'JAGO Assistant',
    navProfile: 'Profile',
    navFamily: 'Family View',
    navArchitecture: 'Integrations',
    navUnreached: 'Unreached Students',
    navCoverage: 'Coverage Analytics',
    navManualReview: 'Manual Review',
    navRules: 'Rules Engine',
    navReports: 'Statutory Reports',
    navOutreach: 'Outreach Engine',

    // Dashboard Quick Stats
    appliedScholarships: 'Applied Schemes',
    activeDisbursement: 'Total Received',
    pendingActions: 'Action Required',
    walletVerified: 'Wallet Documents',

    // Status Badges
    statusVerified: 'VERIFIED',
    statusPending: 'PENDING',
    statusNeedsAction: 'NEEDS ACTION',
    statusNeedsReview: 'NEEDS REVIEW',
    statusMismatch: 'MISMATCH',
    statusExpired: 'EXPIRED',
    statusMissing: 'MISSING',
    statusSanctioned: 'SANCTIONED',
    statusDisbursed: 'CREDITED',
    statusApproved: 'APPROVED',
    statusUnderVerification: 'UNDER VERIFICATION',

    // Schemes
    preMatricName: 'Pre-Matric Scholarship for ST Students',
    postMatricName: 'Post-Matric Scholarship for ST Students',
    topClassName: 'Top Class Education for ST Students',
    nfstName: 'National Fellowship for ST Students (NFST)',
    nosName: 'National Overseas Scholarship (NOS)',

    // Common Buttons & Actions
    btnViewDetails: 'View Details',
    btnApplyNow: 'Apply Now',
    btnTrackApplication: 'Track Application',
    btnCheckEligibility: 'Check Eligibility',
    btnUseExistingDocs: 'Use Existing Documents',
    btnUpload: 'Upload Document',
    btnReplace: 'Replace',
    btnFixNow: 'Fix Now',
    btnExportCSV: 'Export CSV',
    btnPrintReport: 'Print / Save PDF',
    btnSendOutreach: 'Dispatch Outreach',
    btnResolve: 'Submit & Resolve',
    btnSave: 'Save Changes',
    btnClose: 'Close',
    btnSearch: 'Search',
    filterByState: 'Filter by State / UT',
    allIndia: 'All India (Central MoTA)',

    // Deficiency Card
    deficiencyTitle: 'Action Required',
    deficiencyIssueLabel: 'Issue',
    deficiencyActionLabel: 'Required Action',
    deficiencyDeadlineLabel: 'Deadline',

    // Document Wallet
    walletTitle: 'My Document Wallet',
    walletSubtitle: 'Upload once, reuse across all scholarship and fellowship applications.',
    reusableNotice: 'You already submitted these documents. You can reuse them in 1-click!',

    // JAGO Assistant
    jagoGreeting: 'Namaste! I am JAGO, your AI Tribal Scholarship Guide. Ask me: "What is my application status?", enter your Class ("Class 9" or "Class 10"), or ask "What scholarships are available after school for college?"',
    jagoQuickTitle: 'Common Questions:',
    chipWhyPending: 'Track My Application',
    chipClass10: 'Class 9 & 10 Scholarships',
    chipCollege: 'Going to Join College',
    chipRequiredDocs: 'Required Documents',
    chipPaymentStatus: 'DBT Bank Status',
    chipStateScholarships: 'State vs Central Scholarships'
  },

  hi: {
    appTitle: 'ट्राइबल वन (TRIBALONE)',
    tagline: 'एक छात्र • एक प्रोफ़ाइल • संपूर्ण छात्रवृत्ति दृश्य',
    govName: 'जनजातीय कार्य मंत्रालय',
    govSubtitle: 'भारत सरकार',
    problemStatement: 'समस्या विवरण आईडी: 26238 | राष्ट्रीय जनजातीय छात्रवृत्ति पोर्टल',
    apiReadyBadge: 'डिजीलॉकर एवं अपार (APAAR) एकीकृत',
    demoDisclaimer: 'जनजातीय कार्य मंत्रालय (MoTA), भारत सरकार का आधिकारिक प्रोटोटाइप पोर्टल।',
    demoPaymentDisclaimer: 'प्रोटोटाइप प्रत्यक्ष लाभ अंतरण (DBT) डेटा',

    frontLoginTitle: 'एकीकृत राष्ट्रीय जनजातीय छात्रवृत्ति प्रवेश',
    frontLoginSubtitle: 'अनुसूचित जनजाति (ST) छात्रों, संस्थानों और अधिकारियों के लिए एकल लॉगिन',
    loginAsStudent: 'विद्यार्थी लॉगिन',
    loginAsInstitute: 'संस्थान लॉगिन',
    loginAsOfficer: 'अधिकारी लॉगिन',
    loginAsParent: 'अभिभावक लॉगिन',
    newRegistration: 'नया पंजीकरण',
    newSchoolRegister: 'विद्यालय छात्र (कक्षा 9-10)',
    newCollegeRegister: 'महाविद्यालय / उच्च शिक्षा',
    loginBtn: 'पोर्टल में प्रवेश करें',
    quickDemoLogin: 'डेमो त्वरित लॉगिन',
    logoutBtn: 'लॉगआउट / पोर्टल बदलें',

    roleStudent: 'विद्यार्थी',
    roleParent: 'अभिभावक',
    roleAdmin: 'MoTA केंद्रीय व्यवस्थापक',
    roleVerification: 'सत्यापन अधिकारी',
    roleInstitute: 'संस्थान नोडल अधिकारी',
    switchRole: 'भूमिका बदलें',

    viewMobile: 'मोबाइल व्यू',
    viewDesktop: 'डेस्कटॉप पोर्टल',

    navHome: 'होम',
    navScholarships: 'छात्रवृत्तियां',
    navDiscovery: 'पात्रता खोजें',
    navApplications: 'विस्तृत आवेदन',
    navWallet: 'डिजिटल वॉलेट',
    navPayments: 'डीबीटी भुगतान',
    navJago: 'जागो (JAGO) सहायक',
    navProfile: 'प्रोफ़ाइल',
    navFamily: 'पारिवारिक विवरण',
    navArchitecture: 'सरकारी इंटीग्रेशन',
    navUnreached: 'पात्र वंचित छात्र',
    navCoverage: 'कवरेज एनालिटिक्स',
    navManualReview: 'सत्यापन समीक्षा',
    navRules: 'नियम इंजन',
    navReports: 'सांविधिक रिपोर्ट',
    navOutreach: 'आउटरीच अभियान',

    appliedScholarships: 'आवेदन की गईं योजनाएं',
    activeDisbursement: 'कुल प्राप्त डीबीटी',
    pendingActions: 'आवश्यक कार्रवाई',
    walletVerified: 'सत्यापित दस्तावेज़',

    statusVerified: 'सत्यापित',
    statusPending: 'प्रक्रियाधीन',
    statusNeedsAction: 'कार्रवाई अपेक्षित',
    statusNeedsReview: 'समीक्षाधीन',
    statusMismatch: 'असंगति',
    statusExpired: 'नवीनीकरण आवश्यक',
    statusMissing: 'अनुपलब्ध',
    statusSanctioned: 'स्वीकृत',
    statusDisbursed: 'खाते में जमा',
    statusApproved: 'अनुमोदित',
    statusUnderVerification: 'सत्यापन में',

    preMatricName: 'एसटी छात्रों हेतु प्री-मैट्रिक छात्रवृत्ति (कक्षा 9-10)',
    postMatricName: 'एसटी छात्रों हेतु पोस्ट-मैट्रिक छात्रवृत्ति',
    topClassName: 'शीर्ष संस्थानों में उच्च शिक्षा छात्रवृत्ति (टॉप क्लास)',
    nfstName: 'राष्ट्रीय जनजातीय शोध फेलोशिप (NFST)',
    nosName: 'राष्ट्रीय विदेशी छात्रवृत्ति (NOS)',

    btnViewDetails: 'विवरण देखें',
    btnApplyNow: 'आवेदन करें',
    btnTrackApplication: 'आवेदन ट्रैक करें',
    btnCheckEligibility: 'पात्रता जांचें',
    btnUseExistingDocs: 'सत्यापित दस्तावेज़ों का पुन: उपयोग',
    btnUpload: 'दस्तावेज़ अपलोड करें',
    btnReplace: 'बदलें',
    btnFixNow: 'तुरंत सुधारें',
    btnExportCSV: 'CSV डाउनलोड करें',
    btnPrintReport: 'प्रिंट / PDF रिपोर्ट',
    btnSendOutreach: 'आउटरीच भेजें',
    btnResolve: 'प्रस्तुत करें',
    btnSave: 'सुरक्षित करें',
    btnClose: 'बंद करें',
    btnSearch: 'खोजें',
    filterByState: 'राज्य अनुसार फ़िल्टर करें',
    allIndia: 'अखिल भारतीय (केंद्रीय MoTA)',

    deficiencyTitle: 'कार्रवाई आवश्यक',
    deficiencyIssueLabel: 'मुद्दा',
    deficiencyActionLabel: 'आवश्यक कदम',
    deficiencyDeadlineLabel: 'अंतिम तिथि',

    walletTitle: 'मेरा डिजिटल दस्तावेज़ वॉलेट',
    walletSubtitle: 'एक बार अपलोड करें, सभी योजनाओं में उपयोग करें।',
    reusableNotice: 'यह दस्तावेज़ पहले ही सत्यापित है। 1-क्लिक में पुन: उपयोग करें!',

    jagoGreeting: 'नमस्ते! मैं जागो (JAGO) हूँ, आपका जनजातीय छात्रवृत्ति AI मार्गदर्शक। मुझसे पूछें: "मेरा आवेदन स्टेटस क्या है?", कक्षा दर्ज करें ("कक्षा 9" या "कक्षा 10"), या पूछें "12वीं के बाद कॉलेज के लिए कौन सी छात्रवृत्तियां हैं?"',
    jagoQuickTitle: 'त्वरित प्रश्न:',
    chipWhyPending: 'आवेदन स्थिति जांचें',
    chipClass10: 'कक्षा 9 व 10 छात्रवृत्ति',
    chipCollege: 'कॉलेज में प्रवेश छात्रवृत्तियां',
    chipRequiredDocs: 'आवश्यक दस्तावेज़ सूची',
    chipPaymentStatus: 'डीबीटी बैंक स्थिति',
    chipStateScholarships: 'राज्य बनाम केंद्र योजनाएं'
  },

  ta: {
    appTitle: 'ட்ரைபல் ஒன் (TRIBALONE)',
    tagline: 'ஒரு மாணவர் • ஒரு சுயவிவரம் • ஒரு உதவித்தொகை பார்வை',
    govName: 'பழங்குடியினர் விவகார அமைச்சகம்',
    govSubtitle: 'இந்திய அரசு',
    problemStatement: 'சிக்கல் அறிக்கை எண்: 26238 | தேசிய பழங்குடியினர் உதவித்தொகை தளம்',
    apiReadyBadge: 'டிஜிலாக்கர் & அபார் (APAAR) ஒருங்கிணைப்பு',
    demoDisclaimer: 'பழங்குடியினர் விவகார அமைச்சகம் (MoTA), இந்திய அரசு அதிகாரப்பூர்வ முன்மாதிரி தளம்.',
    demoPaymentDisclaimer: 'நேரடி வங்கிப் பரிமாற்றம் (DBT) மாதிரித் தரவு',

    frontLoginTitle: 'ஒருங்கிணைந்த தேசிய பழங்குடியினர் உதவித்தொகை நுழைவு',
    frontLoginSubtitle: 'பழங்குடியின மாணவர்கள், கல்லூரிகள் மற்றும் அதிகாரிகளுக்கான ஒற்றைச் சாளர உள்நுழைவு',
    loginAsStudent: 'மாணவர் உள்நுழைவு',
    loginAsInstitute: 'கல்வி நிறுவன உள்நுழைவு',
    loginAsOfficer: 'அதிகாரி உள்நுழைவு',
    loginAsParent: 'பெற்றோர் / பாதுகாவலர்',
    newRegistration: 'புதிய பதிவு',
    newSchoolRegister: 'பள்ளி மாணவர் (வகுப்பு 9-10)',
    newCollegeRegister: 'கல்லூரி / உயர்கல்வி மாணவர்',
    loginBtn: 'தளத்தில் நுழைக',
    quickDemoLogin: 'டெமோ நேரடி உள்நுழைவு',
    logoutBtn: 'வெளியேறு / தளம் மாற்று',

    roleStudent: 'மாணவர்',
    roleParent: 'பெற்றோர்',
    roleAdmin: 'MoTA நிர்வாகி',
    roleVerification: 'சரிபார்ப்பு அதிகாரி',
    roleInstitute: 'கல்லூரி நோடல் அதிகாரி',
    switchRole: 'பங்கை மாற்றுக',

    viewMobile: 'மொபைல் செயலி',
    viewDesktop: 'கணினி போர்ட்டல்',

    navHome: 'முகப்பு',
    navScholarships: 'உதவித்தொகைகள்',
    navDiscovery: 'தகுதி அறிதல்',
    navApplications: 'விண்ணப்பங்கள்',
    navWallet: 'ஆவண பணப்பை',
    navPayments: 'DBT பணப்பரிமாற்றம்',
    navJago: 'ஜாகோ (JAGO) AI',
    navProfile: 'சுயவிவரம்',
    navFamily: 'குடும்ப விவரம்',
    navArchitecture: 'அரசு இணைப்புகள்',
    navUnreached: 'அடையாத மாணவர்கள்',
    navCoverage: 'கவரேஜ் பகுப்பாய்வு',
    navManualReview: 'சரிபார்ப்பு வரிசை',
    navRules: 'விதிகள் மேலாண்மை',
    navReports: 'அரசு அறிக்கைகள்',
    navOutreach: 'அறிவிப்பு தளம்',

    appliedScholarships: 'விண்ணப்பித்த திட்டங்கள்',
    activeDisbursement: 'பெறப்பட்ட தொகை',
    pendingActions: 'தேவைப்படும் நடவடிக்கை',
    walletVerified: 'சரிபார்க்கப்பட்டவை',

    statusVerified: 'சரிபார்க்கப்பட்டது',
    statusPending: 'நிலுவையில்',
    statusNeedsAction: 'நடவடிக்கை தேவை',
    statusNeedsReview: 'ஆய்வில் உள்ளது',
    statusMismatch: 'பொருந்தவில்லை',
    statusExpired: 'காலாவதியானது',
    statusMissing: 'இல்லை',
    statusSanctioned: 'அனுமதிக்கப்பட்டது',
    statusDisbursed: 'வங்கியில் வரவு',
    statusApproved: 'ஏற்றுக்கொள்ளப்பட்டது',
    statusUnderVerification: 'சரிபார்ப்பில் உள்ளது',

    preMatricName: 'பழங்குடியின மாணவர்களுக்கான மெட்ரிக் முந்தைய உதவித்தொகை (9-10)',
    postMatricName: 'பழங்குடியின மாணவர்களுக்கான மெட்ரிக் பிந்தைய உதவித்தொகை',
    topClassName: 'உயர்தர கல்வி நிறுவனங்களுக்கான டாப் கிளாஸ் திட்டம்',
    nfstName: 'தேசிய ஆய்வு உதவித்தொகை (NFST - Ph.D)',
    nosName: 'தேசிய வெளிநாட்டு கல்வி உதவித்தொகை (NOS)',

    btnViewDetails: 'விவரம் காண்க',
    btnApplyNow: 'விண்ணப்பிக்கவும்',
    btnTrackApplication: 'நிலை அறியவும்',
    btnCheckEligibility: 'தகுதியை சோதிக்கவும்',
    btnUseExistingDocs: 'ஏற்கனவே உள்ள ஆவணங்களை பயன்படுத்துக',
    btnUpload: 'ஆவணம் பதிவேற்றுக',
    btnReplace: 'மாற்றுக',
    btnFixNow: 'உடனே சரிசெய்யவும்',
    btnExportCSV: 'CSV பதிவிறக்கம்',
    btnPrintReport: 'அறிக்கை அச்சிடு / PDF',
    btnSendOutreach: 'தகவல் அனுப்புக',
    btnResolve: 'சமர்ப்பிக்கவும்',
    btnSave: 'சேமிக்க',
    btnClose: 'மூடுக',
    btnSearch: 'தேடுக',
    filterByState: 'மாநிலம் வாரியாக வடிகட்டுக',
    allIndia: 'அனைத்து இந்தியா (மத்திய MoTA)',

    deficiencyTitle: 'நடவடிக்கை தேவை',
    deficiencyIssueLabel: 'காரணம்',
    deficiencyActionLabel: 'தேவைப்படும் ஆவணம்',
    deficiencyDeadlineLabel: 'கடைசி நாள்',

    walletTitle: 'எனது ஆவண பணப்பை',
    walletSubtitle: 'ஒரு முறை பதிவேற்றி அனைத்து திட்டங்களிலும் பயன்படுத்துங்கள்.',
    reusableNotice: 'இந்த ஆவணங்கள் ஏற்கனவே சரிபார்க்கப்பட்டு தயார் நிலையில் உள்ளன!',

    jagoGreeting: 'வணக்கம்! நான் ஜாகோ, பழங்குடியினர் உதவித்தொகை வழிகாட்டி. என்னிடம் கேளுங்கள்: "விண்ணப்ப நிலை என்ன?", அல்லது "10ஆம் வகுப்பு" அல்லது "கல்லூரி சேரும் போது என்ன உதவித்தொகை கிடைக்கும்?"',
    jagoQuickTitle: 'விரைவு வினவல்கள்:',
    chipWhyPending: 'விண்ணப்ப நிலை அறிய',
    chipClass10: 'வகுப்பு 9 மற்றும் 10 திட்டங்கள்',
    chipCollege: 'கல்லூரி சேருபவர்களுக்கான உதவித்தொகை',
    chipRequiredDocs: 'தேவையான ஆவணங்கள்',
    chipPaymentStatus: 'DBT வங்கி வரவு நிலை',
    chipStateScholarships: 'மாநில vs மத்திய திட்டங்கள்'
  },

  te: {
    appTitle: 'ట్రైబల్ వన్ (TRIBALONE)',
    tagline: 'ఒక విద్యార్థి • ఒక ప్రొఫైల్ • సంపూర్ణ స్కాలర్‌షిప్ దృశ్యం',
    govName: 'గిరిజన వ్యవహారాల మంత్రిత్వ శాఖ',
    govSubtitle: 'భారత ప్రభుత్వం',
    problemStatement: 'సమస్య ఐడీ: 26238 | జాతీయ గిరిజన స్కాలర్‌షిప్ పోర్టల్',
    apiReadyBadge: 'డిజిలాకర్ & అపార్ (APAAR) అనుసంధానం',
    demoDisclaimer: 'గిరిజన వ్యవహారాల మంత్రిత్వ శాఖ, భారత ప్రభుత్వం అధికారిక పోర్టల్.',
    demoPaymentDisclaimer: 'ప్రోటోటైప్ ప్రత్యక్ష ప్రయోజన బదిలీ (DBT) డేటా',

    frontLoginTitle: 'సమగ్ర జాతీయ గిరిజన స్కాలర్‌షిప్ ప్రవేశం',
    frontLoginSubtitle: 'ఎస్టీ విద్యార్థులు, విద్యాసంస్థలు మరియు అధికారుల కోసం ఒకే లాగిన్',
    loginAsStudent: 'విద్యార్థి లాగిన్',
    loginAsInstitute: 'విద్యాసంస్థ లాగిన్',
    loginAsOfficer: 'అధికారి లాగిన్',
    loginAsParent: 'తల్లిదండ్రుల లాగిన్',
    newRegistration: 'కొత్త రిజిస్ట్రేషన్',
    newSchoolRegister: 'పాఠశాల విద్యార్థి (క్లాస్ 9-10)',
    newCollegeRegister: 'కళాశాల / ఉన్నత విద్య',
    loginBtn: 'పోర్టల్ లోకి ప్రవేశించండి',
    quickDemoLogin: 'డెమో త్వరిత లాగిన్',
    logoutBtn: 'లాగౌట్ / మార్చండి',

    roleStudent: 'విద్యార్థి',
    roleParent: 'తల్లిదండ్రులు',
    roleAdmin: 'MoTA నిర్వాహకుడు',
    roleVerification: 'ధృవీకరణ అధికారి',
    roleInstitute: 'సంస్థ నోడల్ అధికారి',
    switchRole: 'పాత్రను మార్చండి',

    viewMobile: 'మొబైల్ వీక్షణ',
    viewDesktop: 'డెస్క్‌టాప్ పోర్టల్',

    navHome: 'హోమ్',
    navScholarships: 'స్కాలర్‌షిప్‌లు',
    navDiscovery: 'అర్హత అన్వేషణ',
    navApplications: 'దరఖాస్తులు',
    navWallet: 'పత్రాల వాలెట్',
    navPayments: 'చెల్లింపులు & DBT',
    navJago: 'జాగో (JAGO) అసిస్టెంట్',
    navProfile: 'ప్రొఫైల్',
    navFamily: 'కుటుంబ వివరాలు',
    navArchitecture: 'ప్రభుత్వ అనుసంధానాలు',
    navUnreached: 'చేరని విద్యార్థులు',
    navCoverage: 'కవరేజ్ విశ్లేషణ',
    navManualReview: 'సమీక్ష',
    navRules: 'నియమావళి',
    navReports: 'నివేదికలు',
    navOutreach: 'అవుట్‌రీచ్ ఇంజిన్',

    appliedScholarships: 'దరఖాస్తు చేసిన పథకాలు',
    activeDisbursement: 'అందుకున్న మొత్తం',
    pendingActions: 'తీసుకోవలసిన చర్య',
    walletVerified: 'ధృవీకరించబడిన పత్రాలు',

    statusVerified: 'ధృవీకరించబడింది',
    statusPending: 'పెండింగ్',
    statusNeedsAction: 'చర్య అవసరం',
    statusNeedsReview: 'సమీక్షలో ఉంది',
    statusMismatch: 'సరిపోలలేదు',
    statusExpired: 'గడువు ముగిసింది',
    statusMissing: 'లేదు',
    statusSanctioned: 'మంజూరు చేయబడింది',
    statusDisbursed: 'ఖాతాలో జమ',
    statusApproved: 'ఆమోదించబడింది',
    statusUnderVerification: 'ధృవీకరణలో ఉంది',

    preMatricName: 'ఎస్టీ విద్యార్థులకు ప్రీ-మెట్రిక్ స్కాలర్‌షిప్ (9-10)',
    postMatricName: 'ఎస్టీ విద్యార్థులకు పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్',
    topClassName: 'ఉన్నత విద్యాసంస్థల టాప్ క్లాస్ స్కీమ్',
    nfstName: 'జాతీయ పరిశోధన ఫెలోషిప్ (NFST - Ph.D)',
    nosName: 'జాతీయ విదేశీ విద్య స్కాలర్‌షిప్ (NOS)',

    btnViewDetails: 'వివరాలు చూడండి',
    btnApplyNow: 'దరఖాస్తు చేసుకోండి',
    btnTrackApplication: 'స్థితి ట్రాక్ చేయండి',
    btnCheckEligibility: 'అర్హత తనిఖీ చేయండి',
    btnUseExistingDocs: 'ఉన్న పత్రాలను వాడండి',
    btnUpload: 'అప్‌లోడ్ చేయండి',
    btnReplace: 'మార్చండి',
    btnFixNow: 'సరిచేయండి',
    btnExportCSV: 'CSV డౌన్‌లోడ్',
    btnPrintReport: 'ప్రింట్ / PDF నివేదిక',
    btnSendOutreach: 'సందేశం పంపండి',
    btnResolve: 'సమర్పించండి',
    btnSave: 'సేవ్ చేయండి',
    btnClose: 'మూసివేయండి',
    btnSearch: 'వెతకండి',
    filterByState: 'రాష్ట్రం వారీగా ఫిల్టర్',
    allIndia: 'అఖిల భారత (కేంద్ర MoTA)',

    deficiencyTitle: 'చర్య అవసరం',
    deficiencyIssueLabel: 'సమస్య',
    deficiencyActionLabel: 'చేయవలసిన పని',
    deficiencyDeadlineLabel: 'చివరి తేదీ',

    walletTitle: 'నా డాక్యుమెంట్ వాలెట్',
    walletSubtitle: 'ఒకసారి అప్‌లోడ్ చేసి అన్ని పథకాలకు ఉపయోగించండి.',
    reusableNotice: 'ఈ పత్రాలు ఇప్పటికే ధృవీకరించబడ్డాయి!',

    jagoGreeting: 'నమస్కారం! నేను జాగో, మీ గిరిజన స్కాలర్‌షిప్ AI గైడ్. "నా దరఖాస్తు స్థితి ఏమిటి?", "10వ తరగతి స్కాలర్‌షిప్స్" లేదా "కాలేజ్ చేరేటప్పుడు ఏ స్కాలర్‌షిప్‌లు ఉన్నాయి?" అని నన్ను అడగండి.',
    jagoQuickTitle: 'తరచుగా అడిగే ప్రశ్నలు:',
    chipWhyPending: 'దరఖాస్తు స్థితి చూడండి',
    chipClass10: 'క్లాస్ 9 & 10 స్కాలర్‌షిప్‌లు',
    chipCollege: 'కాలేజ్ ప్రవేశ స్కాలర్‌షిప్‌లు',
    chipRequiredDocs: 'అవసరమైన పత్రాలు',
    chipPaymentStatus: 'DBT జమ స్థితి',
    chipStateScholarships: 'రాష్ట్ర vs కేంద్ర పథకాలు'
  },

  kn: {
    appTitle: 'ಟ್ರೈಬಲ್ ಒನ್ (TRIBALONE)',
    tagline: 'ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿ • ಒಂದು ಪ್ರೊಫೈಲ್ • ಸಮಗ್ರ ವಿದ್ಯಾರ್ಥಿವೇತನ ನೋಟ',
    govName: 'ಬುಡಕಟ್ಟು ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ',
    govSubtitle: 'ಭಾರತ ಸರ್ಕಾರ',
    problemStatement: 'ಸಮಸ್ಯೆ ಸಂಖ್ಯೆ: 26238 | ರಾಷ್ಟ್ರೀಯ ಬುಡಕಟ್ಟು ವಿದ್ಯಾರ್ಥಿವೇತನ ಪೋರ್ಟಲ್',
    apiReadyBadge: 'ಡಿಜಿಲಾಕರ್ ಮತ್ತು ಅಪಾರ್ (APAAR) ಸಂಯೋಜನೆ',
    demoDisclaimer: 'ಬುಡಕಟ್ಟು ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಪ್ರೋಟೋಟೈಪ್ ಪೋರ್ಟಲ್.',
    demoPaymentDisclaimer: 'ಪ್ರೋಟೋಟೈಪ್ ನೇರ ನಗದು ವರ್ಗಾವಣೆ (DBT) ಡೇಟಾ',

    frontLoginTitle: 'ಏಕೀಕೃತ ರಾಷ್ಟ್ರೀಯ ಬುಡಕಟ್ಟು ವಿದ್ಯಾರ್ಥಿವೇತನ ಪ್ರವೇಶ',
    frontLoginSubtitle: 'ಎಸ್ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳಿಗೆ ಏಕ ಲಾಗಿನ್',
    loginAsStudent: 'ವಿದ್ಯಾರ್ಥಿ ಲಾಗಿನ್',
    loginAsInstitute: 'ಸಂಸ್ಥೆ ಲಾಗಿನ್',
    loginAsOfficer: 'ಅಧಿಕಾರಿ ಲಾಗಿನ್',
    loginAsParent: 'ಪೋಷಕರ ಲಾಗಿನ್',
    newRegistration: 'ಹೊಸ ನೋಂದಣಿ',
    newSchoolRegister: 'ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿ (ತರಗತಿ 9-10)',
    newCollegeRegister: 'ಕಾಲೇಜು / ಉನ್ನತ ಶಿಕ್ಷಣ',
    loginBtn: 'ಪೋರ್ಟಲ್ ಪ್ರವೇಶಿಸಿ',
    quickDemoLogin: 'ಡೆಮೊ ತ್ವರಿತ ಲಾಗಿನ್',
    logoutBtn: 'ನಿರ್ಗಮಿಸಿ / ಬದಲಾಯಿಸಿ',

    roleStudent: 'ವಿದ್ಯಾರ್ಥಿ',
    roleParent: 'ಪೋಷಕರು',
    roleAdmin: 'MoTA ನಿರ್ವಾಹಕ',
    roleVerification: 'ಪರಿಶೀಲನಾ ಅಧಿಕಾರಿ',
    roleInstitute: 'ಸಂಸ್ಥೆಯ ನೋಡಲ್ ಅಧಿಕಾರಿ',
    switchRole: 'ಪಾತ್ರ ಬದಲಾಯಿಸಿ',

    viewMobile: 'ಮೊಬೈಲ್ ವೀಕ್ಷಣೆ',
    viewDesktop: 'ಡೆಸ್ಕ್‌ಟಾಪ್ ಪೋರ್ಟಲ್',

    navHome: 'ಮುಖಪುಟ',
    navScholarships: 'ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು',
    navDiscovery: 'ಅರ್ಹತೆ ಶೋಧನೆ',
    navApplications: 'ಅರ್ಜಿಗಳು',
    navWallet: 'ದಾಖಲೆ ವಾಲೆಟ್',
    navPayments: 'ಪಾವತಿಗಳು & DBT',
    navJago: 'ಜಾಗೋ (JAGO) ಸಹಾಯಕ',
    navProfile: 'ಪ್ರೊಫೈಲ್',
    navFamily: 'ಕುಟುಂಬ ವಿವರ',
    navArchitecture: 'ಸರ್ಕಾರಿ ಸಂಯೋಜನೆ',
    navUnreached: 'ವಂಚಿತ ವಿದ್ಯಾರ್ಥಿಗಳು',
    navCoverage: 'ವ್ಯಾಪ್ತಿ ವಿಶ್ಲೇಷಣೆ',
    navManualReview: 'ಪರಿಶೀಲನೆ',
    navRules: 'ನಿಯಮಗಳು',
    navReports: 'ವರದಿಗಳು',
    navOutreach: 'ಔಟ್‌ರೀಚ್ ಎಂಜಿನ್',

    appliedScholarships: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ಯೋಜನೆಗಳು',
    activeDisbursement: 'ಸ್ವೀಕರಿಸಿದ ಮೊತ್ತ',
    pendingActions: 'ಕ್ರಮ ಅಗತ್ಯವಿದೆ',
    walletVerified: 'ಪರಿಶೀಲಿತ ದಾಖಲೆಗಳು',

    statusVerified: 'ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    statusPending: 'ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿದೆ',
    statusNeedsAction: 'ಕ್ರಮ ಅಗತ್ಯ',
    statusNeedsReview: 'ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ',
    statusMismatch: 'ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
    statusExpired: 'ಅವಧಿ ಮುಗಿದಿದೆ',
    statusMissing: 'ಲಭ್ಯವಿಲ್ಲ',
    statusSanctioned: 'ಮಂಜೂರಾಗಿದೆ',
    statusDisbursed: 'ಖಾತೆಗೆ ಜಮೆಯಾಗಿದೆ',
    statusApproved: 'ಅನುಮೋದಿಸಲಾಗಿದೆ',
    statusUnderVerification: 'ಪರಿಶೀಲನೆಯ ಹಂತದಲ್ಲಿದೆ',

    preMatricName: 'ಎಸ್ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರೀ-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ (9-10)',
    postMatricName: 'ಎಸ್ಟಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪೋಸ್ಟ್-ಮೆಟ್ರಿಕ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    topClassName: 'ಉನ್ನತ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಉನ್ನತ ದರ್ಜೆ ಶಿಕ್ಷಣ ಯೋಜನೆ',
    nfstName: 'ರಾಷ್ಟ್ರೀಯ ಬುಡಕಟ್ಟು ಸಂಶೋಧನಾ ಫೆಲೋಶಿಪ್ (NFST - Ph.D)',
    nosName: 'ರಾಷ್ಟ್ರೀಯ ವಿದೇಶಿ ಶಿಕ್ಷಣ ವಿದ್ಯಾರ್ಥಿವೇತನ (NOS)',

    btnViewDetails: 'ವಿವರ ನೋಡಿ',
    btnApplyNow: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    btnTrackApplication: 'ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ',
    btnCheckEligibility: 'ಅರ್ಹತೆ ಪರೀಕ್ಷಿಸಿ',
    btnUseExistingDocs: 'ಇರುವ ದಾಖಲೆ ಬಳಸಿ',
    btnUpload: 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    btnReplace: 'ಬದಲಿಸಿ',
    btnFixNow: 'ಸರಿಪಡಿಸಿ',
    btnExportCSV: 'CSV ಡೌನ್‌ಲೋಡ್',
    btnPrintReport: 'ವರದಿ ಮುದ್ರಿಸಿ / PDF',
    btnSendOutreach: 'ಸಂದೇಶ ರವಾನಿಸಿ',
    btnResolve: 'ಸಲ್ಲಿಸಿ',
    btnSave: 'ಉಳಿಸಿ',
    btnClose: 'ಮುಚ್ಚಿ',
    btnSearch: 'ಹುಡುಕಿ',
    filterByState: 'ರಾಜ್ಯವಾರು ಫಿಲ್ಟರ್',
    allIndia: 'ಅಖಿಲ ಭಾರತ (ಕೇಂದ್ರ MoTA)',

    deficiencyTitle: 'ಕ್ರಮ ಅಗತ್ಯವಿದೆ',
    deficiencyIssueLabel: 'ಸಮಸ್ಯೆ',
    deficiencyActionLabel: 'ಅಗತ್ಯ ಕ್ರಮ',
    deficiencyDeadlineLabel: 'ಕೊನೆಯ ದಿನಾಂಕ',

    walletTitle: 'ನನ್ನ ದಾಖಲೆ ವಾಲೆಟ್',
    walletSubtitle: 'ಒಮ್ಮೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಎಲ್ಲ ಯೋಜನೆಗಳಿಗೂ ಮರುಬಳಸಿ.',
    reusableNotice: 'ಈ ದಾಖಲೆಗಳು ಈಗಾಗಲೇ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟಿವೆ!',

    jagoGreeting: 'ನಮಸ್ಕಾರ! ನಾನು ಜಾಗೋ, ನಿಮ್ಮ ಬುಡಕಟ್ಟು ವಿದ್ಯಾರ್ಥಿವೇತನ AI ಮಾರ್ಗದರ್ಶಿ. "ನನ್ನ ಅರ್ಜಿಯ ಸ್ಥಿತಿ ಏನು?", "10ನೇ ತರಗತಿ ವಿದ್ಯಾರ್ಥಿವೇತನ" ಅಥವಾ "ಕಾಲೇಜು ಪ್ರವೇಶ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು" ಎಂದು ಕೇಳಿ.',
    jagoQuickTitle: 'ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು:',
    chipWhyPending: 'ಅರ್ಜಿ ಸ್ಥಿತಿ ತಿಳಿಯಿರಿ',
    chipClass10: 'ತರಗತಿ 9 & 10 ವಿದ್ಯಾರ್ಥಿವೇತನ',
    chipCollege: 'ಕಾಲೇಜು ಪ್ರವೇಶ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    chipRequiredDocs: 'ಅಗತ್ಯ ದಾಖಲೆಗಳು',
    chipPaymentStatus: 'DBT ಬ್ಯಾಂಕ್ ಜಮೆ ಸ್ಥಿತಿ',
    chipStateScholarships: 'ರಾಜ್ಯ vs ಕೇಂದ್ರ ಯೋಜನೆಗಳು'
  }
};

// Polyfill helper: fill other languages with Hindi / English defaults for smooth bilingual experience
const defaultLangs = ['ml', 'bn', 'mr', 'gu', 'or', 'pa', 'as', 'sat', 'gon'];
defaultLangs.forEach(code => {
  if (!translations[code]) {
    translations[code] = { ...translations.en };
  }
});

// Custom local overrides for language titles & greetings
if (translations.ml) {
  translations.ml.govName = 'പട്ടികവർഗ്ഗ കാര്യ മന്ത്രാലയം';
  translations.ml.tagline = 'ഒരു വിദ്യാർത്ഥി • ഒരു പ്രൊഫൈൽ • സമ്പൂർണ്ണ സ്കോളർഷിപ്പ് കാഴ്ച';
  translations.ml.frontLoginTitle = 'ഏകീകൃത ദേശീയ ഗോത്രവർഗ്ഗ സ്കോളർഷിപ്പ് പോർട്ടൽ';
  translations.ml.loginAsStudent = 'വിദ്യാർത്ഥി ലോഗിൻ';
  translations.ml.newRegistration = 'പുതിയ രജിസ്ട്രേഷൻ';
  translations.ml.jagoGreeting = 'നമസ്കാരം! ഞാൻ ജാഗോ, ഗോത്രവർഗ്ഗ സ്കോളർഷിപ്പ് AI സഹായി. അപേക്ഷാ നില, യോഗ്യത അല്ലെങ്കിൽ കോളേജ് സ്കോളർഷിപ്പുകളെക്കുറിച്ച് എന്നോട് ചോദിക്കാം.';
}

if (translations.bn) {
  translations.bn.govName = 'উপজাতি বিষয়ক মন্ত্রক, ভারত সরকার';
  translations.bn.tagline = 'এক ছাত্র • এক প্রোফাইল • সম্পূর্ণ স্কলারশিপ পোর্টাল';
  translations.bn.frontLoginTitle = 'সংহত জাতীয় উপজাতি স্কলারশিপ পোর্টাল';
  translations.bn.loginAsStudent = 'ছাত্র লগইন';
  translations.bn.newRegistration = 'নতুন নিবন্ধন';
  translations.bn.jagoGreeting = 'নমস্কার! আমি জাগো, আপনার উপজাতি স্কলারশিপ সহায়ক। আমাকে আপনার আবেদন নম্বর দিয়ে স্ট্যাটাস জিজ্ঞাসা করুন বা ক্লাসের স্কলারশিপ জানুন।';
}

if (translations.mr) {
  translations.mr.govName = 'जनजातीय कार्य मंत्रालय, भारत सरकार';
  translations.mr.tagline = 'एक विद्यार्थी • एक प्रोफाइल • संपूर्ण शिष्यवृत्ती दृश्य';
  translations.mr.frontLoginTitle = 'एकीकृत राष्ट्रीय जनजातीय शिष्यवृत्ती पोर्टल';
  translations.mr.loginAsStudent = 'विद्यार्थी लॉगिन';
  translations.mr.newRegistration = 'नवीन नोंदणी';
  translations.mr.jagoGreeting = 'नमस्कार! मी जागो, आपला जनजातीय शिष्यवृत्ती AI मार्गदर्शक. मला आपल्या अर्जाची स्थिती किंवा शिष्यवृत्ती विषयी विचारा.';
}

if (translations.gu) {
  translations.gu.govName = 'જનજાતીય બાબતોનું મંત્રાલય, ભારત સરકાર';
  translations.gu.tagline = 'એક વિદ્યાર્થી • એક પ્રોફાઇલ • સંપૂર્ણ સ્કોલરશિપ દર્શન';
  translations.gu.frontLoginTitle = 'સંકલિત રાષ્ટ્રીય આદિજાતિ શિષ્યવૃત્તિ પોર્ટલ';
  translations.gu.loginAsStudent = 'વિદ્યાર્થી લૉગિન';
  translations.gu.newRegistration = 'નવી નોંધણી';
  translations.gu.jagoGreeting = 'નમસ્તે! હું જાગો છું, તમારો આદિજાતિ શિષ્યવૃત્તિ AI સહાયક. મને તમારી અરજીની સ્થિતિ અથવા સ્કોલરશિપ વિશે પૂછો.';
}

if (translations.or) {
  translations.or.govName = 'ଜନଜାତି ବ୍ୟାପାର ମନ୍ତ୍ରଣାଳୟ, ଭାରତ ସରକାର';
  translations.or.tagline = 'ଗୋଟିଏ ଛାତ୍ର • ଗୋଟିଏ ପ୍ରୋଫାଇଲ୍ • ସମ୍ପୂର୍ଣ୍ଣ ବୃତ୍ତି ଦୃଶ୍ୟ';
  translations.or.frontLoginTitle = 'ଏକୀକୃତ ଜାତୀୟ ଜନଜାତି ଛାତ୍ରବୃତ୍ତି ପୋର୍ଟାଲ୍';
  translations.or.loginAsStudent = 'ଛାତ୍ର ଲଗ୍ଇନ୍';
  translations.or.newRegistration = 'ନୂତନ ପଞ୍ଜୀକରଣ';
  translations.or.jagoGreeting = 'ନମସ୍କାର! ମୁଁ ଜାଗୋ, ଆପଣଙ୍କ ଜନଜାତି ଛାତ୍ରବୃତ୍ତି AI ସହାୟକ। ଆପଣଙ୍କ ଆବେଦନ ସ୍ଥିତି ବା ଛାତ୍ରବୃତ୍ତି ସମ୍ପର୍କରେ ପଚାରନ୍ତୁ।';
}

if (translations.pa) {
  translations.pa.govName = 'ਕਬਾਇਲੀ ਮਾਮਲਿਆਂ ਦਾ ਮੰਤਰਾਲਾ, ਭਾਰਤ ਸਰਕਾਰ';
  translations.pa.tagline = 'ਇੱਕ ਵਿਦਿਆਰਥੀ • ਇੱਕ ਪ੍ਰੋਫਾਈਲ • ਸੰਪੂਰਨ ਵਜ਼ੀਫਾ ਦ੍ਰਿਸ਼';
  translations.pa.frontLoginTitle = 'ਏਕੀਕ੍ਰਿਤ ਰਾਸ਼ਟਰੀ ਕਬਾਇਲੀ ਵਜ਼ੀਫਾ ਪੋਰਟਲ';
  translations.pa.loginAsStudent = 'ਵਿਦਿਆਰਥੀ ਲੌਗਇਨ';
  translations.pa.newRegistration = 'ਨਵੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ';
  translations.pa.jagoGreeting = 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਜਾਗੋ ਹਾਂ, ਤੁਹਾਡਾ ਵਜ਼ੀਫਾ AI ਸਹਾਇਕ। ਆਪਣੀ ਅਰਜ਼ੀ ਦੀ ਸਥਿਤੀ ਜਾਂ ਵਜ਼ੀਫਿਆਂ ਬਾਰੇ ਪੁੱਛੋ।';
}

if (translations.sat) {
  translations.sat.govName = 'ᱡᱚᱱᱡᱟᱛᱤᱭᱟᱹ ᱵᱮᱵᱷᱟᱨ ᱢᱚᱱᱛᱨᱟᱲᱚᱭ, ᱵᱷᱟᱨᱚᱛ ᱥᱚᱨᱠᱟᱨ';
  translations.sat.tagline = 'ᱢᱤᱫ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ • ᱢᱤᱫ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ • ᱡᱚᱛᱚ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ';
  translations.sat.frontLoginTitle = 'ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ ᱯᱳᱨᱴᱟᱞ';
  translations.sat.loginAsStudent = 'ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱞᱚᱜᱤᱱ';
  translations.sat.newRegistration = 'ᱱᱟᱣᱟ ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ';
  translations.sat.jagoGreeting = 'ᱡᱚᱦᱟᱨ! ᱤᱧ ᱫᱚ ᱡᱟᱜᱳ, ᱟᱯᱮᱭᱟᱜ ᱥᱠᱚᱞᱟᱨᱥᱤᱯ AI ᱜᱟᱛᱮ᱾ ᱟᱯᱮᱭᱟᱜ ᱮᱯᱞᱤᱠᱮᱥᱚᱱ ᱥᱴᱮᱴᱟᱥ ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱯᱮ᱾';
}

if (translations.gon) {
  translations.gon.govName = 'जनजातीय कार्य मंत्रालय, भारत सरकार';
  translations.gon.tagline = 'उन्दी विद्यार्थी • उन्दी प्रोफाइल • संपूर्ण छात्रवृत्ति दृश्य';
  translations.gon.frontLoginTitle = 'एकल राष्ट्रीय कोया/गोंड छात्रवृत्ति पोर्टल';
  translations.gon.loginAsStudent = 'विद्यार्थी लॉगिन';
  translations.gon.newRegistration = 'पुना पंजीकरण';
  translations.gon.jagoGreeting = 'सेवा जोहार! नना जागो आन, मीवा छात्रवृत्ति AI सगा। मीवा आवेदन स्टेटस या छात्रवृत्ति बारे ते पुच्छकीट।';
}

export class I18nManager {
  constructor(defaultLang = 'en') {
    this.currentLanguage = defaultLang;
  }

  setLanguage(langCode) {
    if (translations[langCode]) {
      this.currentLanguage = langCode;
      return true;
    }
    return false;
  }

  getLanguage() {
    return this.currentLanguage;
  }

  t(key) {
    const langObj = translations[this.currentLanguage] || translations.en;
    if (langObj[key] !== undefined) {
      return langObj[key];
    }
    // Fallback to Hindi, then English
    if (translations.hi && translations.hi[key] !== undefined) {
      return translations.hi[key];
    }
    return translations.en[key] || key;
  }

  getAvailableLanguages() {
    return languageList;
  }
}

export const i18n = new I18nManager('en');
