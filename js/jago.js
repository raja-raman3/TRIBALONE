/**
 * TRIBALONE - JAGO Multilingual Intelligent Chatbot Assistant
 * Ministry of Tribal Affairs (MoTA) - Problem Statement ID: 26238
 * Autonomous Tribal AI Assistant - Works everywhere: Front/Login page (Guest Mode) & Student Portal
 * Answers:
 * 1. Live Application Status with Application Number tracking (APP-2024-001, PM2026TN001, etc.)
 * 2. Class / Standard-wise available scholarships (Class 9, 10, 11, 12)
 * 3. School-to-College Transition guidance ("going to join college", qualifications, schemes, required documents)
 * 4. Required documents checklist
 * 5. State vs Central scholarship comparisons
 */

export class JagoAssistant {
  constructor(db) {
    this.db = db;
  }

  getResponse(queryText, lang = 'en') {
    const raw = (queryText || '').trim();
    const normalized = raw.toLowerCase();

    // Check if query contains an application number pattern:
    // e.g. APP-2024-001, PM2026TN001, TC2026JH002, NOS2026OD003, NFST2026MP004, ST202600124, etc.
    const appRegex = /\b(APP[-_0-9A-Z]+|PM20[0-9A-Z]+|TC20[0-9A-Z]+|NOS20[0-9A-Z]+|NFST20[0-9A-Z]+|ST20[0-9A-Z]+)\b/i;
    const directAppMatch = raw.match(appRegex);

    // =========================================================================
    // 1. APPLICATION STATUS & TRACKING
    // =========================================================================
    // Check if user is asking about application status OR directly provided an application number
    const isStatusQuery = normalized.includes('status') || 
                          normalized.includes('track') || 
                          normalized.includes('application') ||
                          normalized.includes('നില') ||
                          normalized.includes('நிலை') || 
                          normalized.includes('स्थिति') || 
                          normalized.includes('స్థితి') ||
                          normalized.includes('ಗತಿ');

    if (directAppMatch || isStatusQuery) {
      const appId = directAppMatch ? directAppMatch[0] : null;

      // Case A: User asks for status but DID NOT provide an application number
      if (!appId && isStatusQuery && !normalized.includes('pm20') && !normalized.includes('tc20') && !normalized.includes('app-')) {
        if (lang === 'ta') {
          return `விண்ணப்ப நிலையை அறிய, தயவுசெய்து உங்கள் **விண்ணப்ப எண்ணை (Application Number)** உள்ளிடவும்.\n\nஉதாரணம்:\n• **APP-2024-001**\n• **PM2026TN001** (அருண் குமார் - போஸ்ட்-மெட்ரிக்)\n• **TC2026JH002** (பிர்சா சோரன் - டாப் கிளாஸ்)\n• **NOS2026OD003** (அனன்யா நாயக் - வெளிநாட்டு உதவித்தொகை)\n• **PM2026RJ005** (தேவேந்திர பில்)\n\nஉங்கள் விண்ணப்ப எண்ணைத் தட்டச்சு செய்து அனுப்பவும், உடனடியாக முழு நிலை காண்பிக்கப்படும்!`;
        }
        if (lang === 'hi') {
          return `अपने आवेदन की वर्तमान स्थिति देखने के लिए कृपया अपना **आवेदन क्रमांक (Application Number)** दर्ज करें।\n\nउदाहरण के लिए:\n• **APP-2024-001**\n• **PM2026TN001** (अरुण कुमार - पोस्ट-मैट्रिक)\n• **TC2026JH002** (बिरसा सोरेन - टॉप क्लास)\n• **NOS2026OD003** (अनन्या नायक - विदेशी छात्रवृत्ति)\n• **NFST2026MP004** (कमला गोंड)\n\nकृपया अपना आवेदन नंबर भेजें, तुरंत लाइव स्थिति दिखाई जाएगी!`;
        }
        return `To track your live scholarship status, please enter your **Application Number** (or Student ID).\n\nExamples you can try:\n• **APP-2024-001**\n• **PM2026TN001** (Arun Kumar - Post-Matric ST)\n• **TC2026JH002** (Birsa Soren - Top Class Education)\n• **NOS2026OD003** (Ananya Naik - National Overseas Scholarship)\n• **NFST2026MP004** (Kamla Gond - National Fellowship)\n• **PM2026RJ005** (Devendra Bhil)\n\nPlease reply with your Application Number to fetch real-time verification details.`;
      }

      // Case B: User provided an application number!
      const targetQuery = appId || raw;
      const app = this.db.findApplication(targetQuery);

      if (app) {
        const student = this.db.getStudent(app.studentId);
        const hasDeficiency = app.activeDeficiency && !app.deficiencyResolved;
        const sanctionFmt = app.sanctionAmount ? `₹${app.sanctionAmount.toLocaleString('en-IN')}` : 'Under Evaluation';

        if (lang === 'ta') {
          return `🏛️ **அதிகாரப்பூர்வ விண்ணப்ப நிலை அறிக்கை**\n\n` +
            `• **விண்ணப்ப எண்**: \`${app.id}\`\n` +
            `• **மாணவர் பெயர்**: **${app.studentName}** (${app.studentId})\n` +
            `• **திட்டம்**: ${app.schemeName}\n` +
            `• **கல்வி நிறுவனம்**: ${app.institution || student.institution}\n` +
            `• **படிப்பு**: ${app.course || student.course}\n` +
            `• **சமர்ப்பிக்கப்பட்ட தேதி**: ${app.submittedDate}\n` +
            `• **தற்போதைய நிலை**: **${app.currentStage}** (நிலை ${app.currentStageIndex || 2} / 5)\n` +
            `• **ஒதுக்கீடு செய்யப்பட்ட தொகை**: **${sanctionFmt}**\n\n` +
            `🛡️ **சரிபார்ப்பு நிலைகள்:**\n` +
            `✓ ஆதார் e-KYC: சரிபார்க்கப்பட்டது (100% நம்பிக்கை)\n` +
            `✓ பழங்குடியினர் சாதி சான்றிதழ்: சரிபார்க்கப்பட்டது (வருவாய்த்துறை)\n` +
            `${hasDeficiency ? `⚠️ வருமானச் சான்றிதழ்: **காலாவதியானது - புதுப்பிக்கப்பட வேண்டும்**\n` : `✓ வருமானச் சான்றிதழ்: சரிபார்க்கப்பட்டது\n`}` +
            `✓ கல்வி நிறுவன சரிபார்ப்பு: முடிந்தது\n\n` +
            `${hasDeficiency ? `⚠️ **தேவைப்படும் நடவடிக்கை:**\n${app.activeDeficiency.issue}. கடைசி தேதி: **${app.activeDeficiency.deadline}**. தயவுசெய்து புதிய சான்றிதழைப் பதிவேற்றவும்.` : `✓ **அடுத்த கட்டம்:** மாநில மற்றும் மாவட்ட நலத்துறை அதிகாரிகள் இறுதி ஒப்புதல் வழங்கி நிதி DBT மூலம் வங்கி கணக்கில் வரவு வைக்கப்படும்.`}`;
        }

        if (lang === 'hi') {
          return `🏛️ **आधिकारिक आवेदन स्थिति विवरण (Live Status)**\n\n` +
            `• **आवेदन संख्या**: \`${app.id}\`\n` +
            `• **लाभार्थी छात्र**: **${app.studentName}** (${app.studentId})\n` +
            `• **छात्रवृत्ति योजना**: ${app.schemeName}\n` +
            `• **संस्थान**: ${app.institution || student.institution}\n` +
            `• **पाठ्यक्रम**: ${app.course || student.course}\n` +
            `• **आवेदन तिथि**: ${app.submittedDate}\n` +
            `• **वर्तमान चरण**: **${app.currentStage}** (चरण ${app.currentStageIndex || 2}/5)\n` +
            `• **स्वीकृत राशि**: **${sanctionFmt}**\n\n` +
            `🛡️ **सत्यापन स्थिति (Verification Checkpoints):**\n` +
            `✓ आधार ई-केवाईसी: सत्यापित (Aadhaar Seeded)\n` +
            `✓ एसटी जाति प्रमाण पत्र: सत्यापित (e-District)\n` +
            `${hasDeficiency ? `⚠️ आय प्रमाण पत्र: **नवीनीकरण आवश्यक (Expired)**\n` : `✓ आय प्रमाण पत्र: सत्यापित एवं मान्य\n`}` +
            `✓ संस्थान अनापत्ति प्रमाण पत्र: सत्यापित\n\n` +
            `${hasDeficiency ? `⚠️ **आवश्यक कार्रवाई:**\n${app.activeDeficiency.issue}. अंतिम तिथि: **${app.activeDeficiency.deadline}**. पोर्टल पर तुरंत अद्यतन प्रमाण पत्र अपलोड करें।` : `✓ **अगला कदम:** राज्य स्तरीय नोडल अधिकारी द्वारा सत्यापन पूर्ण होते ही राशि सीधे आधार लिंक बैंक खाते में डीबीटी (PFMS) द्वारा हस्तांतरित होगी।`}`;
        }

        return `🏛️ **Official Scholarship Application Live Status**\n\n` +
          `• **Application ID**: \`${app.id}\`\n` +
          `• **Beneficiary Name**: **${app.studentName}** (${app.studentId})\n` +
          `• **Scheme**: ${app.schemeName} (${app.academicYear})\n` +
          `• **Institution**: ${app.institution || student.institution}\n` +
          `• **Course**: ${app.course || student.course}\n` +
          `• **Submission Date**: ${app.submittedDate}\n` +
          `• **Current Stage**: **${app.currentStage}** (Stage ${app.currentStageIndex || 2} of 5)\n` +
          `• **Sanction Allocation**: **${sanctionFmt}**\n\n` +
          `🛡️ **Automated Verification Checkpoints:**\n` +
          `✓ Aadhaar e-KYC & NPCI Mapper: **VERIFIED**\n` +
          `✓ ST Community / Tribe Registry: **VERIFIED**\n` +
          `${hasDeficiency ? `⚠️ Annual Family Income Certificate: **EXPIRED / ACTION REQUIRED**\n` : `✓ Annual Family Income Certificate: **VERIFIED & VALID**\n`}` +
          `✓ Institute Nodal Officer Endorsement: **COMPLETED**\n\n` +
          `${hasDeficiency ? `⚠️ **ACTION REQUIRED FROM CANDIDATE:**\n${app.activeDeficiency.issue}. Deadline: **${app.activeDeficiency.deadline}**. Please upload your renewed income certificate on the dashboard to release the sanction order.` : `✓ **Next Milestone:** State Welfare Directorate final sanction order and PFMS Direct Benefit Transfer (DBT) credit to Aadhaar-seeded bank account.`}`;
      } else {
        return `❌ Application ID **"${targetQuery}"** was not found in the Ministry of Tribal Affairs central database for academic year 2026-27.\n\nPlease check the application number. You can test with standard demo application numbers:\n• \`APP-2024-001\`\n• \`PM2026TN001\` (Arun Kumar)\n• \`TC2026JH002\` (Birsa Soren)\n• \`NOS2026OD003\` (Ananya Naik)\n• \`NFST2026MP004\` (Kamla Gond)\n• \`PM2026RJ005\` (Devendra Bhil)`;
      }
    }

    // =========================================================================
    // 2. STANDARD / CLASS STUDIED INQUIRY (Class 9, 10, 11, 12)
    // =========================================================================
    const class9Match = normalized.includes('9') || normalized.includes('ix') || normalized.includes('ஒன்பதாம்') || normalized.includes('कक्षा 9');
    const class10Match = normalized.includes('10') || normalized.includes('x') || normalized.includes('பத்தாம்') || normalized.includes('कक्षा 10');
    const isSchoolStandardQuery = normalized.includes('standard') || normalized.includes('class') || normalized.includes('school') || normalized.includes('studied') || normalized.includes('வகுப்பு') || normalized.includes('कक्षा');

    if (isSchoolStandardQuery && (class9Match || class10Match || normalized.includes('matric') || normalized.includes('pre-matric'))) {
      if (lang === 'ta') {
        return `📚 **9ஆம் மற்றும் 10ஆம் வகுப்பு பயிலும் பழங்குடியின மாணவர்களுக்கான உதவித்தொகைகள்:**\n\n` +
          `1. **பழங்குடியினர் விவகார அமைச்சகத்தின் மெட்ரிக் முந்தைய உதவித்தொகை (Pre-Matric ST):**\n` +
          `• **தகுதி**: 9 அல்லது 10ஆம் வகுப்பு பயிலும் அங்கீகரிக்கப்பட்ட பள்ளி ST மாணவர்கள். குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்.\n` +
          `• **உதவித்தொகை தொகை**: நாள் மாணவர்களுக்கு ₹3,500/ஆண்டு | உண்டு உறைவிடப் பள்ளி மாணவர்களுக்கு ₹7,000/ஆண்டு + புத்தக மானியம் ₹1,000.\n\n` +
          `2. **மாநில அரசு உண்டு உறைவிடப் பள்ளி சிறப்பு உதவித்தொகை (GTRS):**\n` +
          `• அரசு பழங்குடியினர் உண்டு உறைவிடப் பள்ளி மாணவர்களுக்கு இலவச தங்குமிடம், உணவு, சீருடை மற்றும் ₹6,000 சிறப்பு உதவித்தொகை.\n\n` +
          `3. **தேசிய வருவாய்வழி மற்றும் தகுதிப் படிப்பு உதவித்தொகை (NMMS):**\n` +
          `• 8ஆம் வகுப்பில் தேர்ச்சி பெற்று 9 முதல் 12ஆம் வகுப்பு வரை ஆண்டுக்கு ₹12,000 உதவித்தொகை.\n\n` +
          `📄 **விண்ணப்பிக்க தேவையான ஆவணங்கள்:**\n` +
          `1. ஆதார் அட்டை\n` +
          `2. பழங்குடியினர் சாதி சான்றிதழ்\n` +
          `3. குடும்ப வருமானச் சான்றிதழ் (வருவாய்த்துறை)\n` +
          `4. முந்தைய வகுப்பு மதிப்பெண் பட்டியல்\n` +
          `5. பள்ளி உறுதிமொழி சான்று (School Bonafide with UDISE+)\n` +
          `6. மாணவர் அல்லது பெற்றோர் வங்கி கணக்கு விவரம்`;
      }

      if (lang === 'hi') {
        return `📚 **कक्षा 9 और 10 में अध्ययनरत अनुसूचित जनजाति (ST) छात्रों के लिए उपलब्ध छात्रवृत्तियां:**\n\n` +
          `1. **प्री-मैट्रिक छात्रवृत्ति (MoTA Pre-Matric Scholarship for ST Students):**\n` +
          `• **पात्रता**: मान्यता प्राप्त विद्यालय में कक्षा 9 या 10 में अध्ययनरत एसटी छात्र। पारिवारिक वार्षिक आय ₹2,50,000 से कम।\n` +
          `• **वित्तीय लाभ**: दिवा-छात्रों (Day Scholars) को ₹3,500/वर्ष | छात्रावास में रहने वालों को ₹7,000/वर्ष + तदर्थ अनुदान ₹1,000।\n\n` +
          `2. **एकलव्य आदर्श आवासीय विद्यालय (EMRS) विशेष शिक्षा सहायता:**\n` +
          `• पूर्णत: नि:शुल्क उच्च स्तरीय आवासीय शिक्षा, भोजन, वर्दी और अध्ययन सामग्री।\n\n` +
          `3. **राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना (NMMS):**\n` +
          `• कक्षा 9 से 12 तक ₹12,000 प्रतिवर्ष (₹1,000 प्रति माह) छात्रवृत्ति।\n\n` +
          `📄 **आवश्यक दस्तावेज़ (Required Documents):**\n` +
          `1. आधार कार्ड (मोबाइल लिंक्ड)\n` +
          `2. एसटी जाति प्रमाण पत्र (सक्षम राजस्व अधिकारी द्वारा जारी)\n` +
          `3. चालू वित्तीय वर्ष का आय प्रमाण पत्र\n` +
          `4. कक्षा 8 या 9 की अंकतालिका\n` +
          `5. विद्यालय अध्ययन प्रमाण पत्र (UDISE+ कोड सहित बोनाफाइड)\n` +
          `6. आधार सीडेड बैंक पासबुक विवरण`;
      }

      return `📚 **Scholarships Available for Class 9 & Class 10 ST Students:**\n\n` +
        `1. **Pre-Matric Scholarship for ST Students (Ministry of Tribal Affairs - MoTA):**\n` +
        `• **Target**: ST students studying in Classes IX and X in recognized government or private schools.\n` +
        `• **Eligibility**: Scheduled Tribe community, valid family annual income not exceeding **₹2,50,000 / year**.\n` +
        `• **Financial Benefits**: ₹3,500 / year for Day Scholars | ₹7,000 / year for Hostellers + ₹1,000 ad-hoc book grant.\n\n` +
        `2. **State Tribal Residential School (GTRS / EMRS) Scholarship:**\n` +
        `• Free residential education, nutrition, uniforms, and specialized coaching for board exams.\n\n` +
        `3. **National Means-cum-Merit Scholarship (NMMS):**\n` +
        `• ₹12,000 / year (₹1,000/month) from Class 9 up to Class 12 for meritorious students.\n\n` +
        `📄 **Mandatory Required Documents:**\n` +
        `1. Student's Aadhaar Card (linked to mobile)\n` +
        `2. ST Community / Caste Certificate (digitally signed)\n` +
        `3. Current Annual Family Income Certificate (< 1 year old)\n` +
        `4. Previous Academic Year (Class 8 / 9) Marksheet\n` +
        `5. School Bonafide Certificate with UDISE+ Code\n` +
        `6. Bank Account Passbook seeded with Aadhaar (DBT enabled)\n\n` +
        `*Click "New Registration" on the front portal to register your school details via UDISE+ official fetch!*`;
    }

    // =========================================================================
    // 3. SCHOOL FINISHED -> JOINING COLLEGE INQUIRY
    // =========================================================================
    const isCollegeTransition = normalized.includes('join college') ||
                                normalized.includes('joining college') ||
                                normalized.includes('after school') ||
                                normalized.includes('school finishes') ||
                                normalized.includes('passed 12') ||
                                normalized.includes('12th passed') ||
                                normalized.includes('higher education') ||
                                normalized.includes('degree') ||
                                normalized.includes('engineering') ||
                                normalized.includes('medical') ||
                                normalized.includes('polytechnic') ||
                                normalized.includes('கல்லூரி') ||
                                normalized.includes('பள்ளி முடித்த') ||
                                normalized.includes('कॉलेज') ||
                                normalized.includes('12वीं के बाद');

    if (isCollegeTransition) {
      if (lang === 'ta') {
        return `🎓 **பள்ளி முடித்து கல்லூரி சேரும் பழங்குடியின மாணவர்களுக்கான முழுமையான உதவித்தொகை வழிகாட்டி:**\n\n` +
          `1. **மெட்ரிக் பிந்தைய உதவித்தொகை (Post-Matric Scholarship for ST Students - PMS-ST):**\n` +
          `• **தகுதி**: 12ஆம் வகுப்பு முடித்து அங்கீகரிக்கப்பட்ட கல்லூரியில் பாலிடெக்னிக், இளங்கலை (B.A., B.Sc., B.Com), பொறியியல் (B.Tech), மருத்துவம் (MBBS), வேளாண்மை போன்றவற்றில் சேருபவர்கள்.\n` +
          `• **வருமான வரம்பு**: குடும்ப ஆண்டு வருமானம் **₹2.50 லட்சத்திற்குள்** இருக்க வேண்டும்.\n` +
          `• **பயன்கள்**: கல்லூரி முழுக் கல்விக் கட்டணம் அரசு ஏற்கும் + ₹13,500/ஆண்டு வரை பராமரிப்பு உதவித்தொகை.\n\n` +
          `2. **டாப் கிளாஸ் கல்வித் திட்டம் (Top Class Education for ST Students):**\n` +
          `• **தகுதி**: அறிவிக்கப்பட்ட 259 உயர்தர தேசிய கல்வி நிறுவனங்களில் (IIT, NIT, IIM, AIIMS, NLU) சேர்க்கை பெற்ற ST மாணவர்கள்.\n` +
          `• **வருமான வரம்பு**: குடும்ப ஆண்டு வருமானம் **₹8.00 லட்சத்திற்குள்**.\n` +
          `• **பயன்கள்**: முழுக் கல்விக் கட்டணம் (ரூ. 2.0 லட்சம் வரை) + ₹3,000/மாதம் தங்குமிடச் செலவு + முதல் ஆண்டில் மடிக்கணினிக்கு ₹45,000 + புத்தக மானியம் ₹3,000.\n\n` +
          `3. **தேசிய வெளிநாட்டு கல்வி உதவித்தொகை (National Overseas Scholarship - NOS):**\n` +
          `• உலகின் டாப் 500 பல்கலைக்கழகங்களில் முதுகலை (Master's) மற்றும் முனைவர் (Ph.D.) படிப்புக்கு முழு செலவு (US$ 15,400 / £ 9,900 ஆண்டு பராமரிப்பு உதவித்தொகை + விமானக் கட்டணம்).\n\n` +
          `📋 **விண்ணப்பதாரருக்கு தேவையான கட்டாய ஆவணங்கள் (Required Documents):**\n` +
          `1. **ஆதார் அட்டை** (மொபைல் எண் மற்றும் வங்கி கணக்குடன் இணைக்கப்பட்டது)\n` +
          `2. **பழங்குடியினர் சாதிச் சான்றிதழ்** (வருவாய்த்துறை அதிகாரியால் வழங்கப்பட்டது)\n` +
          `3. **குடும்ப வருமானச் சான்றிதழ்** (தற்போதைய நிதியாண்டு - 1 ஆண்டுக்குள்)\n` +
          `4. **10 மற்றும் 12ஆம் வகுப்பு மதிப்பெண் பட்டியல்கள்** (Marksheets)\n` +
          `5. **கல்லூரி சேர்க்கை ஆணை மற்றும் கட்டண ரசீது** (Admission Letter / Fee Receipt)\n` +
          `6. **இருப்பிடச் சான்றிதழ்** (Domicile / Nativity Certificate)\n` +
          `7. **ஆதார் இணைக்கப்பட்ட வங்கி கணக்கு பாஸ்புக்** (Aadhaar DBT Seeded)\n` +
          `8. **மாற்றுத்திறனாளி சான்றிதழ்** (பொருந்துமானால் - UDID Certificate)\n\n` +
          `💡 *கல்லூரி சேர்க்கை பெற்றவுடன் முகப்புத் திரையில் உள்ள 'கல்லூரி மாணவர் பதிவு' (College Registration) மூலம் உடனடியாகப் பதிவு செய்யலாம்!*`;
      }

      if (lang === 'hi') {
        return `🎓 **विद्यालय (12वीं) उत्तीर्ण करने के बाद कॉलेज प्रवेश हेतु संपूर्ण छात्रवृत्ति मार्गदर्शन:**\n\n` +
          `1. **एसटी छात्रों हेतु पोस्ट-मैट्रिक छात्रवृत्ति (PMS-ST Scheme):**\n` +
          `• **पात्रता**: 12वीं उत्तीर्ण छात्र जो किसी भी मान्यता प्राप्त विश्वविद्यालय/कॉलेज में ग्रेजुएशन, डिप्लोमा, बी.टेक, एमबीबीएस, बीए, बीएससी, आदि में प्रवेश ले रहे हैं।\n` +
          `• **आय सीमा**: परिवार की सकल वार्षिक आय **₹2.50 लाख से कम** होनी चाहिए।\n` +
          `• **वित्तीय लाभ**: संस्थान की पूरी गैर-वापसी योग्य शिक्षण फीस (Tuition Fee) + प्रतिवर्ष ₹13,500 तक रखरखाव भत्ता।\n\n` +
          `2. **टॉप क्लास उच्च शिक्षा छात्रवृत्ति योजना (Top Class Education Scheme):**\n` +
          `• **पात्रता**: भारत के 259 अधिसूचित शीर्ष संस्थानों (IITs, NITs, IIMs, AIIMS, NLUs, IISERs) में प्रवेशित एसटी छात्र।\n` +
          `• **आय सीमा**: पारिवारिक वार्षिक आय **₹8.00 लाख तक**।\n` +
          `• **वित्तीय लाभ**: पूरी कॉलेज ट्यूशन फीस + ₹3,000/माह आवास व भोजन भत्ता + प्रथम वर्ष में लैपटॉप हेतु ₹45,000 अनुदान + ₹3,000 पुस्तक अनुदान।\n\n` +
          `3. **राष्ट्रीय विदेशी छात्रवृत्ति योजना (National Overseas Scholarship - NOS):**\n` +
          `• शीर्ष 500 विदेशी विश्वविद्यालयों में मास्टर्स व पीएचडी हेतु पूर्ण खर्च (US$ 15,400/वर्ष जीवन यापन भत्ता + यात्रा टिकट + वीज़ा शुल्क)।\n\n` +
          `📋 **अभ्यर्थी के लिए अनिवार्य आवश्यक दस्तावेज़ (Required Documents Checklist):**\n` +
          `1. **आधार कार्ड** (मोबाइल नंबर व बैंक खाते से जुड़ा हुआ)\n` +
          `2. **डिजिटल एसटी जाति प्रमाण पत्र** (सक्षम राजस्व अधिकारी द्वारा जारी)\n` +
          `3. **वैध वार्षिक आय प्रमाण पत्र** (एक वर्ष से पुराना न हो)\n` +
          `4. **10वीं एवं 12वीं कक्षा की अंकतालिकाएं एवं प्रमाण पत्र**\n` +
          `5. **कॉलेज प्रवेश पत्र / आवंटन पत्र एवं शुल्क रसीद** (Admission Order & Fee Receipt)\n` +
          `6. **मूल निवास प्रमाण पत्र** (Domicile / Nativity Certificate)\n` +
          `7. **बैंक पासबुक प्रति** (जिसमें आधार डीबीटी सक्रिय हो - DBT Seeded)\n` +
          `8. **दिव्यांगता प्रमाण पत्र (UDID)** (यदि दिव्यांग कोटा लागू हो)\n\n` +
          `💡 *पोर्टल के फ्रंट पेज पर 'महाविद्यालय / उच्च शिक्षा पंजीकरण' पर क्लिक करके एकेडमिक बैंक ऑफ क्रेडिट्स (ABC) के माध्यम से 1-क्लिक में पंजीकरण करें!*`;
      }

      return `🎓 **Comprehensive Scholarship Guide: After School Finishes / Joining College**\n\n` +
        `If you have completed Class 12 and are entering college, diploma, or higher education, the following major Ministry of Tribal Affairs (MoTA) scholarships are available:\n\n` +
        `1. **Post-Matric Scholarship for ST Students (PMS-ST):**\n` +
        `• **Eligible Qualifications**: Passed Class 12 / Higher Secondary; admitted to any UGC/AICTE/State recognized college in degree, diploma, B.Tech, MBBS, B.Sc, B.Com, B.A., Law, Nursing, etc.\n` +
        `• **Family Income Limit**: Up to **₹2,50,000 / year**.\n` +
        `• **Financial Benefits**: 100% Course Tuition Fee Reimbursement + Annual Maintenance Allowance (₹2,500 to ₹13,500/year depending on course group).\n\n` +
        `2. **Top Class Education for ST Students (Premier Institutes):**\n` +
        `• **Eligible Qualifications**: ST students securing admission to **259 notified premier institutes** (IITs, NITs, IIMs, AIIMS, NLUs, IIITs, NID, etc.).\n` +
        `• **Family Income Limit**: Up to **₹8,00,000 / year**.\n` +
        `• **Financial Benefits**: Full tuition fee reimbursement (up to ₹2.0 Lakhs/yr or actuals) + Living allowance of ₹3,000/month + Computer/laptop grant of ₹45,000 in 1st year + Book allowance of ₹3,000/yr.\n\n` +
        `3. **National Overseas Scholarship (NOS) for Foreign Studies:**\n` +
        `• For ST students securing unconditional admission in top 500 QS-ranked universities abroad for Master's or Ph.D.\n` +
        `• Annual maintenance of US$ 15,400 (USA) / £ 9,900 (UK) + full tuition fees + airfare.\n\n` +
        `4. **State Government ST Incentives:**\n` +
        `• Chief Minister Higher Education grants, free hostel boarding, and coaching stipends.\n\n` +
        `📋 **Mandatory Required Documents Checklist for Candidate:**\n` +
        `1. **Aadhaar Card** (Linked with mobile number & NPCI Aadhaar DBT mapper)\n` +
        `2. **ST Community / Caste Certificate** (Digitally verified from state e-District portal)\n` +
        `3. **Current Annual Family Income Certificate** (Issued by Tahsildar / Revenue Authority within last 12 months)\n` +
        `4. **Class 10 & Class 12 Official Marksheets & Passing Certificates**\n` +
        `5. **College Admission Letter / Allotment Order and Fee Receipt**\n` +
        `6. **Domicile / Residence Certificate**\n` +
        `7. **Aadhaar-Seeded Bank Account Passbook Copy** with clear IFSC code\n` +
        `8. **Recent Passport Size Photograph**\n` +
        `9. **Disability (UDID) Certificate** (if applying under PwD reservation)\n\n` +
        `*Tip: You can use the "College / Higher Education Registration" button on the portal to automatically fetch your verified records via Academic Bank of Credits (ABC) & DigiLocker!*`;
    }

    // =========================================================================
    // 4. REQUIRED DOCUMENTS IN GENERAL
    // =========================================================================
    if (normalized.includes('document') || normalized.includes('documents') || normalized.includes('ஆவண') || normalized.includes('दस्तावेज़')) {
      return `📋 **Universal Document Checklist for All ST Scholarships:**\n\n` +
        `1. **Aadhaar Card**: Linked to active mobile for OTP and seeded with your bank account for DBT.\n` +
        `2. **ST Community / Caste Certificate**: Issued by competent revenue authority (Tahsildar / RDO).\n` +
        `3. **Annual Family Income Certificate**: Must be for the current financial year (< 1 year old).\n` +
        `4. **Previous Academic Marksheet**: Class 8/9/10/12 or semester marksheets.\n` +
        `5. **Institution Bonafide / Enrollment Certificate**: Stating course and UDISE+ / AISHE code.\n` +
        `6. **Bank Account Details**: Clear copy showing Student Name, Account Number, and IFSC.\n` +
        `7. **Domicile / Nativity Certificate**: Proving state residence.\n\n` +
        `*Note: Once uploaded or fetched from DigiLocker, all verified documents are saved in your TRIBALONE Document Wallet and can be reused across all future applications in 1 click!*`;
    }

    // =========================================================================
    // 5. PAYMENT & DBT BANK CREDIT INQUIRY
    // =========================================================================
    if (normalized.includes('payment') || normalized.includes('dbt') || normalized.includes('money') || normalized.includes('bank') || normalized.includes('பணம்') || normalized.includes('पैसा') || normalized.includes('भुगतान')) {
      return `💳 **Direct Benefit Transfer (DBT) & Payment Information:**\n\n` +
        `• All Ministry of Tribal Affairs scholarships are disbursed **100% digitally through the Public Financial Management System (PFMS)** directly into the student's Aadhaar-seeded bank account.\n` +
        `• **Important**: Ensure your bank account is active and **Aadhaar Seeded (NPCI Mapper active)** to avoid payment returns.\n` +
        `• If your application status shows "Sanctioned - Payment In-Transit", the DBT transaction reference will be delivered to your registered mobile number via SMS.\n` +
        `• To check payment records, you can log in to your student dashboard or provide your Application Number here!`;
    }

    // =========================================================================
    // 6. STATE VS CENTRAL SCHOLARSHIP FILTER
    // =========================================================================
    if (normalized.includes('state') || normalized.includes('central') || normalized.includes('மாநில') || normalized.includes('राज्य')) {
      return `🏛️ **Central vs State ST Scholarships Co-Availment:**\n\n` +
        `• **Central Government (MoTA)**: Funds Pre-Matric, Post-Matric (75:25 sharing with states), Top Class Education (100% central), National Fellowship (NFST), and National Overseas Scholarship (NOS).\n` +
        `• **State Government Tribal Schemes**: Provide additional top-up grants, hostel allowances, free laptops, and competitive coaching (e.g. TN CM Tribal Award, Jharkhand Marang Gomke, Odisha PRERANA, MP Aakanksha).\n` +
        `• On TRIBALONE, you can use the **"Filter by State"** dropdown in the Scholarships tab to see both Central and your State's specific schemes simultaneously!`;
    }

    // =========================================================================
    // 7. DEFAULT WELCOME & HELP
    // =========================================================================
    if (lang === 'ta') {
      return `வணக்கம்! நான் உங்கள் ஜாகோ (JAGO) பழங்குடியினர் உதவித்தொகை AI உதவியாளர்.\n\nஎன்னிடம் நீங்கள் கேட்கலாம்:\n` +
        `1. **"விண்ணப்ப நிலை என்ன?"** (விண்ணப்ப எண்ணுடன்: \`APP-2024-001\` அல்லது \`PM2026TN001\`)\n` +
        `2. **"10ஆம் வகுப்பு உதவித்தொகை என்ன?"** (பள்ளி மாணவர் திட்டங்கள்)\n` +
        `3. **"பள்ளி முடித்து கல்லூரி சேரும் போது என்ன உதவித்தொகை கிடைக்கும்?"**\n` +
        `4. **"தேவையான ஆவணங்கள் எவை?"**\n` +
        `5. **"DBT வங்கி பணம் எப்போது வரும்?"**\n\nஉங்களுக்கு என்ன தகவல் தேவை என்பதை கீழே உள்ள வினவலில் தட்டச்சு செய்யவும்!`;
    }

    if (lang === 'hi') {
      return `नमस्ते! मैं जागो (JAGO) हूँ, आपका राष्ट्रीय जनजातीय छात्रवृत्ति AI सहायक।\n\nआप मुझसे निम्नलिखित पूछ सकते हैं:\n` +
        `1. **"आवेदन स्थिति क्या है?"** (आवेदन संख्या के साथ: \`APP-2024-001\` या \`PM2026TN001\`)\n` +
        `2. **"कक्षा 9 या 10 के लिए छात्रवृत्ति"**\n` +
        `3. **"12वीं के बाद कॉलेज प्रवेश के लिए कौन सी छात्रवृत्तियां हैं?"**\n` +
        `4. **"पात्रता एवं आवश्यक दस्तावेज़"**\n` +
        `5. **"डीबीटी भुगतान एवं बैंक सीडिंग"**\n\nकृपया अपना प्रश्न नीचे टाइप करें या त्वरित चिप्स पर क्लिक करें!`;
    }

    return `Hello! I am JAGO, your dedicated Ministry of Tribal Affairs (MoTA) AI Assistant.\n\nI can help you with:\n` +
      `• **Live Application Tracking**: Send your Application Number (e.g. \`APP-2024-001\`, \`PM2026TN001\`, \`TC2026JH002\`, \`NOS2026OD003\`) to check stage-by-stage status, deficiencies, and DBT credit.\n` +
      `• **Standard / Class Inquiry**: Tell me your class (e.g. "Class 9", "10th standard") to see all pre-matric scholarships.\n` +
      `• **Joining College Guidance**: Ask "What scholarships are available after school for college?" to see full higher education schemes, eligibility, and required documents checklist.\n` +
      `• **Required Documents**: Full list of mandatory certificates.\n` +
      `• **State vs Central Schemes**: Check state-specific scholarships.\n\nHow can I help you today?`;
  }
}
